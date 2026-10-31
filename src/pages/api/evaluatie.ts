/**
 * POST /api/evaluatie
 * Verwerkt ingevulde evaluatieformulieren vanaf /evaluatieformulier en /en/evaluation-form:
 * 1. Valideert de verplichte velden (e-mailadres & cursusdatum)
 * 2. Zoekt of maakt het Contact aan in GoHighLevel (LeadFabriek)
 * 3. Slaat alle 15 evaluatievelden op in de bijbehorende GHL Custom Fields (survey ID: iufqAJ5Ue4D9QV5zMnlG)
 * 4. Voegt een overzichtelijke evaluatie-notitie toe aan het contactpersoon-profiel
 */
export const prerender = false;

import { findOrCreateContact, saveContactEvaluation, createEvaluationOpportunity } from '../../lib/ghl';

// Exacte GoHighLevel Custom Field IDs uit het oorspronkelijke LeadFabriek Evaluatieformulier (iufqAJ5Ue4D9QV5zMnlG)
const GHL_EVALUATION_FIELD_IDS: Record<string, string> = {
  instructor: 'wNAzmwB9msNsmMjueUYq', // Naam instructeur
  q1: 'pHvYShViKOWKOrUWCw2W',         // 1. Over de cursus als geheel ben ik
  q2: 'FZZHWjBT6xjPZuMXkcwQ',         // 2. Over de oefenruimte en oefenmiddelen ben ik
  q3: 'yXQBQuBPaW0PGaUP2hKA',         // 3. Over de lunch ben ik (indien van toepassing)
  q4: 'tRODNQlxMK5QMLt2Cucn',         // 4. Mijn kennis en vaardigheden over de onderwerpen die in de cursus zijn behandeld zijn verbeterd
  q5: 'BC9Olievy43H7XqmQb3I',         // 5. Ik kan de kennis en vaardigheden die ik heb geleerd in mijn eigen praktijksituatie toepassen
  q6: 'M0oFnGXP0EdhirwLMtI4',         // 6. Het lesmateriaal was duidelijk en begrijpelijk
  q7: 'GmPJk2e4DEkTeC8Rvujs',         // 7. Lesgeven/uitleg onderdeel Eerste Hulp
  q8: 'TnnrqmvOKUj2Y5Mm8wMG',         // 8. Lesgeven/uitleg onderdeel Brand & Ontruiming
  q9: 'xt8vGst32pNkQGvf8TmO',         // 9. De onderwerpen werden duidelijk gepresenteerd
  q10: 'FfFXA4N51kOoZRQZKxYL',        // 10. De gestelde vragen werden duidelijk beantwoord
  q11: '5fJ3ou27zDzocSx38qni',        // 11. De feedback op de uitgevoerde taken was voldoende
  q12: 'm1MjgJJg9OcX4cv1GYnL',        // 12. Vindt u de inzet van een lotus tijdens de herhalingslessen van toegevoegde waarde
  q13: '5Wd7G9o4enrndBRqdBZ3',        // 13. Welke onderdelen uit de cursus vindt u het belangrijkst?
  q14: 'btoZTzJYENvQA1T4xYwc',        // 14. Welke suggesties hebt u voor verbetering van de cursus?
  q15: 'aL7ttzVhSEh2conamcBT',        // 15. Is er iets wat toegevoegd of verwijderd zou moeten worden aan de cursus?
};

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
      course = 'BHV Basis',
      name = '',
      email = '',
      instructor = '',
      date = '',
      q1 = '',
      q2 = '',
      q3 = '',
      q4 = '',
      q5 = '',
      q6 = '',
      q7 = '',
      q8 = '',
      q9 = '',
      q10 = '',
      q11 = '',
      q12 = '',
      q13 = '',
      q14 = '',
      q15 = '',
    } = payload;

    if (!email || !date) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Vul a.u.b. uw e-mailadres en de cursusdatum in.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const cleanName = String(name || '').trim();
    const nameParts = cleanName ? cleanName.split(/\s+/) : ['Cursist'];
    const firstName = nameParts[0] || 'Cursist';
    const lastName = nameParts.slice(1).join(' ') || '-';

    // Bereken gemiddelde score over de ingevulde vragen 1 t/m 12
    const ratingsRaw = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
    const numericRatings = ratingsRaw
      .map((val) => Number(val))
      .filter((val) => !isNaN(val) && val >= 1 && val <= 5);

    const averageScore =
      numericRatings.length > 0
        ? (numericRatings.reduce((acc, v) => acc + v, 0) / numericRatings.length).toFixed(1)
        : null;

    // Bouw GHL customFields array op
    const customFields: Array<{ id: string; field_value: string | number }> = [];

    if (instructor) {
      customFields.push({
        id: GHL_EVALUATION_FIELD_IDS.instructor,
        field_value: String(instructor).trim(),
      });
    }

    for (let i = 1; i <= 12; i++) {
      const key = `q${i}`;
      const val = Number(payload[key]);
      if (!isNaN(val) && val >= 1 && val <= 5 && GHL_EVALUATION_FIELD_IDS[key]) {
        customFields.push({
          id: GHL_EVALUATION_FIELD_IDS[key],
          field_value: val,
        });
      }
    }

    for (let i = 13; i <= 15; i++) {
      const key = `q${i}`;
      const val = String(payload[key] || '').trim();
      if (val && GHL_EVALUATION_FIELD_IDS[key]) {
        customFields.push({
          id: GHL_EVALUATION_FIELD_IDS[key],
          field_value: val,
        });
      }
    }

    const noteLines = [
      `📋 Evaluatieformulier ingevuld (${course})`,
      `Datum cursus: ${date}`,
      `Deelnemer: ${cleanName || 'Niet opgegeven'} (${email})`,
      `Instructeur: ${instructor || 'Niet opgegeven'}`,
      `Gemiddelde score: ${averageScore ? `${averageScore} / 5.0` : 'Geen scores ingevuld'}`,
      ``,
      `Beoordelingen (1 = Ontevreden, 5 = Zeer tevreden):`,
      `1. Cursus als geheel: ${q1 || '-'}`,
      `2. Oefenruimte & middelen: ${q2 || '-'}`,
      `3. Lunch: ${q3 || '-'}`,
      `4. Kennis & vaardigheden verbeterd: ${q4 || '-'}`,
      `5. Toepasbaar in eigen praktijk: ${q5 || '-'}`,
      `6. Lesmateriaal duidelijk: ${q6 || '-'}`,
      `7. Uitleg Eerste Hulp: ${q7 || '-'}`,
      `8. Uitleg Brand & Ontruiming: ${q8 || '-'}`,
      `9. Onderwerpen duidelijk gepresenteerd: ${q9 || '-'}`,
      `10. Vragen duidelijk beantwoord: ${q10 || '-'}`,
      `11. Feedback op taken voldoende: ${q11 || '-'}`,
      `12. Toegevoegde waarde LOTUS: ${q12 || '-'}`,
      ``,
      `Open vragen:`,
      `13. Belangrijkste onderdelen: ${q13 || '-'}`,
      `14. Suggesties voor verbetering: ${q14 || '-'}`,
      `15. Toevoegen of verwijderen: ${q15 || '-'}`,
    ];

    console.log('[Evaluatieformulier] Nieuwe inzending:', {
      course,
      name: cleanName,
      email,
      instructor,
      date,
      averageScore,
    });

    let contactId: string | null = null;
    let opportunityId: string | null = null;
    try {
      contactId = await findOrCreateContact({
        firstName,
        lastName,
        email: String(email),
      });

      if (contactId) {
        const [, oppResult] = await Promise.all([
          saveContactEvaluation({
            contactId,
            customFields,
            noteBody: noteLines.join('\n'),
          }),
          createEvaluationOpportunity({
            contactId,
            course: String(course || 'BHV Basis'),
            participantName: cleanName || String(email),
            instructor: String(instructor || '').trim(),
            date: String(date),
            averageScore,
            evaluationSummary: noteLines.join('\n'),
          }),
        ]);
        opportunityId = oppResult?.opportunity?.id || oppResult?.id || null;
      }
    } catch (ghlErr: any) {
      console.warn('[Evaluatieformulier] GHL sync overgeslagen of niet geconfigureerd:', ghlErr?.message);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Bedankt voor het invullen van het Evaluatieformulier!',
        data: {
          contactId,
          opportunityId,
          course,
          averageScore,
          answeredCount: numericRatings.length,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('[Evaluatieformulier] Error:', error?.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Er is een fout opgetreden bij het versturen van het evaluatieformulier. Probeer het opnieuw.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
