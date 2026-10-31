/**
 * POST /api/inschrijven
 * Handles direct course date registrations & E-learning practical day bookings:
 * 1. Find or create Contact in GHL
 * 2. Create Opportunity in GHL pipeline "Cursusbeheer & Trainingsverloop"
 * 3. Create Association (Contact ↔ Event) & increment registration count on the GHL Event
 * 4. Auto-set status to "vol" if capacity is reached
 */
export const prerender = false;

import {
  findOrCreateContact,
  createOpportunity,
  createAssociation,
  updateEventRegistrations,
  fetchEventById,
} from '../../lib/ghl';
import { courses as localCourses } from '../../data/courses.js';

export async function POST({ request }: { request: Request }) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else if (
      contentType.includes('application/x-www-form-urlencoded') ||
      contentType.includes('multipart/form-data')
    ) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }

    const {
      eventId,
      name,
      firstName: rawFirstName,
      lastName: rawLastName,
      email,
      phone,
      company,
      street,
      postalCode,
      city,
      notes,
      participantsCount = 1,
      registrationType = 'new',
    } = payload;

    // Support both single "name" field (unified street) and legacy firstName + lastName
    let firstName = String(rawFirstName || '').trim();
    let lastName = String(rawLastName || '').trim();
    const fullName = String(name || `${firstName} ${lastName}`).trim();

    if (!firstName && fullName) {
      const parts = fullName.split(/\s+/);
      firstName = parts[0] || fullName;
      lastName = parts.slice(1).join(' ') || '-';
    } else if (firstName && !lastName) {
      lastName = '-';
    }

    const count = Math.min(15, Math.max(1, parseInt(String(participantsCount || '1'), 10) || 1));
    const resolvedType: 'new' | 'elearning_completed' =
      registrationType === 'elearning_completed' ? 'elearning_completed' : 'new';

    if (!eventId || !firstName || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Vul a.u.b. uw naam, e-mailadres en een geldige cursusdatum in.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 0: Fetch live GHL event, or gracefully fall back to local schedule record
    let event: any = null;
    let isLiveGhlEvent = false;

    try {
      event = await fetchEventById(String(eventId));
      if (event && event.id) {
        isLiveGhlEvent = true;
      }
    } catch (err) {
      console.warn('[Inschrijving] Live GHL event lookup fallback:', err);
    }

    if (!event) {
      const localMatch = localCourses.find((c: any) => String(c.id) === String(eventId));
      if (localMatch) {
        const parsedFree = parseInt(String(localMatch.freeSpots || '10').replace(/[^0-9]/g, ''), 10) || 10;
        event = {
          id: String(localMatch.id),
          title: localMatch.title,
          date: localMatch.date,
          time: localMatch.time,
          location: localMatch.location,
          price: localMatch.price,
          spots: 15,
          registrations: Math.max(0, 15 - parsedFree),
          freeSpots: parsedFree,
          status: 'gepubliceerd',
        };
      }
    }

    if (!event) {
      return new Response(
        JSON.stringify({ success: false, error: 'Gekozen cursusdatum niet gevonden.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check capacity
    if (event.status === 'vol' || (event.spots > 0 && event.freeSpots <= 0)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Deze cursusdatum is helaas volgeboekt.' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (event.spots > 0 && event.freeSpots < count) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Er ${event.freeSpots === 1 ? 'is nog maar 1 plek' : `zijn nog maar ${event.freeSpots} plekken`} vrij op deze datum.`,
        }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const noteLines = [
      resolvedType === 'elearning_completed'
        ? `🎓 PRAKTIJKDAG INGEPLAND (NA E-LEARNING)`
        : `📅 DIRECTE CURSUSINSCHRIJVING (WEBSITE)`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `• Cursus: ${event.title}`,
      `• Datum: ${event.date}${event.time ? ` (${event.time})` : ''}`,
      `• Locatie: ${event.location || 'Edusafe Hoofdlocatie Den Haag'}`,
      `• Type: ${
        resolvedType === 'elearning_completed'
          ? 'Praktijkdag na E-learning (online theorie al afgerond)'
          : `Nieuwe inschrijving (${count} ${count === 1 ? 'deelnemer' : 'deelnemers'})`
      }`,
      `• Naam: ${fullName}`,
      company ? `• Bedrijf / Organisatie: ${company}` : '',
      `• E-mail: ${email}`,
      phone ? `• Telefoon: ${phone}` : '',
      notes ? `\n💬 Opmerkingen / extra deelnemers:\n${String(notes).trim()}` : '',
    ].filter(Boolean);

    const noteBody = noteLines.join('\n');

    let contactId: string | null = null;
    try {
      contactId = await findOrCreateContact({
        firstName,
        lastName,
        email: String(email).trim(),
        phone: String(phone || '').trim(),
        company: String(company || '').trim(),
        address: String(street || '').trim(),
        postalCode: String(postalCode || '').trim(),
        city: String(city || '').trim(),
      });

      if (contactId) {
        const ghlTasks: Promise<any>[] = [
          createOpportunity({
            contactId,
            courseTitle: event.title,
            courseDate: event.date,
            courseLocation: event.location,
            notes: notes ? String(notes).trim() : undefined,
            noteBody,
            price: event.price,
            participantsCount: count,
            registrationType: resolvedType,
          }),
        ];

        if (isLiveGhlEvent) {
          ghlTasks.push(
            updateEventRegistrations(String(eventId), event.registrations, event.spots, count),
            createAssociation(contactId, String(eventId)).catch((assocErr) =>
              console.warn('[Inschrijving] Association warning:', assocErr?.message)
            )
          );
        }

        await Promise.all(ghlTasks);
      }
    } catch (ghlErr: any) {
      console.warn('[Inschrijving] GHL sync warning:', ghlErr?.message);
    }

    const newFreeSpots = Math.max(0, (event.spots || 0) - ((event.registrations || 0) + count));

    return new Response(
      JSON.stringify({
        success: true,
        message:
          resolvedType === 'elearning_completed'
            ? 'Uw praktijkdag is succesvol ingepland!'
            : 'Uw inschrijving is succesvol verwerkt!',
        data: {
          contactId,
          eventId,
          eventTitle: event.title,
          eventDate: event.date,
          eventTime: event.time || '',
          eventLocation: event.location || 'Edusafe Hoofdlocatie Den Haag',
          participantsCount: count,
          registrationType: resolvedType,
          freeSpots: newFreeSpots,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[Inschrijving] Error:', error?.message);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Er is een fout opgetreden bij het verwerken van uw inschrijving. Probeer het opnieuw.',
        details: error?.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
