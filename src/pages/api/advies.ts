/**
 * POST /api/advies
 * Verwerkt alle website leads & aanvragen naar de GoHighLevel pijplijn "Website Leads":
 * - Aanvraagstraat / Keuzehulp (/persoonlijk-advies & /en/personal-advice)
 * - Globale Slide-Over Contact Drawer (ContactDrawer.astro)
 * - Contactpagina (/contact & /en/contact)
 * - Incompany & Groepsofferte formulieren (/incompany-training, /bhv-cursus, etc.)
 */
export const prerender = false;

import { findOrCreateContact, createWebsiteLeadOpportunity } from '../../lib/ghl';

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
      source = 'advies-funnel',
      customerType = '',
      category = '',
      topics = '',
      detailPrimary = '',
      detailSecondary = '',
      name = '',
      company = '',
      email = '',
      phone = '',
      notes = '',
      message = '',
      training = '',
      participants = '',
    } = payload;

    const finalNotes = String(notes || message || '').trim();
    const finalCategory = String(category || training || '').trim();
    const finalPrimary = String(detailPrimary || participants || '').trim();

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Vul a.u.b. uw naam, e-mailadres en telefoonnummer in.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Split name into firstName and lastName
    const nameParts = String(name).trim().split(/\s+/);
    const firstName = nameParts[0] || String(name);
    const lastName = nameParts.slice(1).join(' ') || '-';

    // Bepaal het segment (ZZP / MKB / Incompany / Grootzakelijk), 1 functionele tag en de Opportunity-titel voor pijplijn "Website Leads"
    let summaryPrefix = '[Advies]';
    let typeAanvraagLabel = 'Adviesaanvraag';
    let sourceLabel = 'Persoonlijk Advies (/persoonlijk-advies)';
    const uniqueTags = ['zakelijk'];

    if (source === 'incompany-offerte') {
      summaryPrefix = '[Offerte Incompany]';
      typeAanvraagLabel = 'MKB / Grootzakelijk — Incompany Offerte';
      sourceLabel = 'Incompany / Groepsofferte Formulier';
    } else if (source === 'contact-drawer' || source === 'contact-page') {
      summaryPrefix = '[Klantenservice / Contact]';
      typeAanvraagLabel = `${company ? 'Zakelijk' : 'Algemeen'} — Contactvraag`;
      sourceLabel = source === 'contact-drawer' ? 'Slide-Over Contact Drawer' : 'Contactpagina (/contact)';
    } else {
      const cType = customerType || 'Zakelijk';
      summaryPrefix = cType === 'Direct contact' ? '[Direct Contact]' : `[${cType}]`;
      typeAanvraagLabel = `${cType} — Keuzehulp & Advies`;
    }

    const subjectPart = finalCategory || topics || 'Algemene aanvraag';
    const detailPart = finalPrimary && !summaryPrefix.includes(finalPrimary) ? ` (${finalPrimary})` : '';
    const companyOrName = company ? `${company} (${name})` : String(name);
    const summaryTitle = `${summaryPrefix} ${subjectPart}${detailPart} — ${companyOrName}`;

    // Bouw een overzichtelijke samenvattingsnotitie voor in het GHL Contact-dossier
    const noteLines = [
      `🌐 NIEUWE WEBSITE AANVRAAG — ${summaryPrefix}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `• Bron: ${sourceLabel}`,
      `• Segment / Type aanvraag: ${typeAanvraagLabel}`,
      `• Naam: ${name}`,
      company ? `• Bedrijfsnaam / Organisatie: ${company}` : `• Segment: ${customerType || 'ZZP / Zakelijk'}`,
      `• E-mail: ${email}`,
      `• Telefoon: ${phone}`,
      finalCategory ? `• Categorie / Vraagstuk: ${finalCategory}` : '',
      topics ? `• Gekozen training(en) / onderwerpen: ${topics}` : '',
      finalPrimary ? `• Aantal deelnemers / Omvang: ${finalPrimary}` : '',
      detailSecondary ? `• Voorkeur locatie / vervolgstap: ${detailSecondary}` : '',
      finalNotes ? `\n💬 Toelichting / Vraag van klant:\n${finalNotes}` : '',
    ].filter(Boolean);

    const noteBody = noteLines.join('\n');

    console.log('[Website Leads] Nieuwe aanvraag:', {
      source,
      summaryTitle,
      name,
      company,
      email,
      phone,
    });

    let contactId: string | null = null;
    let opportunityId: string | null = null;
    try {
      const resolvedCompany = company
        ? String(company)
        : customerType === 'Particulier' || customerType === 'Private'
          ? 'Particulier'
          : '';

      contactId = await findOrCreateContact({
        firstName,
        lastName,
        email: String(email),
        phone: String(phone),
        company: resolvedCompany,
      });

      if (contactId) {
        const oppResult = await createWebsiteLeadOpportunity({
          contactId,
          leadTitle: summaryTitle,
          sourceLabel,
          typeAanvraag: typeAanvraagLabel,
          categorie: finalCategory || subjectPart,
          onderwerpen: String(topics || finalCategory || '-'),
          omvang: finalPrimary || '-',
          voorkeur: String(detailSecondary || '-'),
          klantbericht: finalNotes || '-',
          noteBody,
          tags: uniqueTags,
        });
        opportunityId = oppResult?.opportunity?.id || oppResult?.id || null;
      }
    } catch (ghlErr: any) {
      console.warn('[Website Leads] GHL sync overgeslagen of fout:', ghlErr?.message);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Uw aanvraag is goed ontvangen!',
        data: {
          contactId,
          opportunityId,
          summaryTitle,
          source,
          customerType,
          category: finalCategory,
          topics,
          detailPrimary: finalPrimary,
          detailSecondary,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('[Website Leads] Error:', error?.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Er is een fout opgetreden bij het versturen van uw aanvraag. Probeer het opnieuw.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
