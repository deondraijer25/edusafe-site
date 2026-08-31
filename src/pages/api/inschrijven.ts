/**
 * POST /api/inschrijven
 * Handles course registrations:
 * 1. Find or create Contact in GHL
 * 2. Create Association: Contact ↔ Event
 * 3. Increment registration count on the Event
 * 4. Auto-set status to "vol" if capacity is reached
 */
export const prerender = false;

import { findOrCreateContact, createOpportunity, createAssociation, updateEventRegistrations, fetchEventById } from '../../lib/ghl';

export async function POST({ request }: { request: Request }) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }

    const { eventId, firstName, lastName, email, phone, company, street, postalCode, city, gender, notes } = payload;

    // Validation
    if (!eventId || !firstName || !lastName || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Verplichte velden ontbreken (eventId, firstName, lastName, email).',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 0: Fetch event details to get current registration count
    const event = await fetchEventById(eventId);
    if (!event) {
      return new Response(
        JSON.stringify({ success: false, error: 'Evenement niet gevonden.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if event is full
    if (event.status === 'vol' || (event.spots > 0 && event.freeSpots <= 0)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Dit evenement is helaas volgeboekt.' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 1: Find or create Contact in GHL
    console.log(`[Inschrijving] Creating/finding contact: ${firstName} ${lastName} (${email})`);
    const contactId = await findOrCreateContact({
      firstName,
      lastName,
      email,
      phone: phone || '',
      company: company || '',
      address: street || '',
      postalCode: postalCode || '',
      city: city || '',
    });

    // Step 2: Create Opportunity in pipeline "Cursusbeheer & Trainingsverloop"
    console.log(`[Inschrijving] Creating opportunity for contact ${contactId}`);
    const opportunity = await createOpportunity({
      contactId,
      courseTitle: event.title,
      courseDate: event.date,
      price: event.price,
    });

    // Step 3: Create Association Contact ↔ Event (parallel with step 4)
    // Step 4: Update registration count
    console.log(`[Inschrijving] Linking contact ${contactId} to event ${eventId}`);
    const [associationResult, updateResult] = await Promise.all([
      createAssociation(contactId, eventId),
      updateEventRegistrations(eventId, event.registrations, event.spots),
    ]);

    const newFreeSpots = Math.max(0, event.spots - (event.registrations + 1));

    console.log(`[Inschrijving] Success! ${firstName} ${lastName} ingeschreven voor ${event.title}. Vrije plekken: ${newFreeSpots}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inschrijving succesvol verwerkt!',
        data: {
          contactId,
          eventId,
          eventTitle: event.title,
          eventDate: event.date,
          freeSpots: newFreeSpots,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[Inschrijving] Error:', error.message);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Er is een fout opgetreden bij het verwerken van uw inschrijving. Probeer het opnieuw.',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
