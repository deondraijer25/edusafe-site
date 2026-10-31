/**
 * GHL (Lead Fabriek / GoHighLevel) API Helper
 * Centralizes all API communication with the CRM
 */

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';

function getApiKey(): string {
  const key = (typeof process !== 'undefined' && process.env?.GHL_API_KEY) || import.meta.env.GHL_API_KEY;
  if (!key) {
    throw new Error('GHL_API_KEY is not configured');
  }
  return key;
}

function getLocationId(): string {
  const locationId = (typeof process !== 'undefined' && process.env?.GHL_LOCATION_ID) || import.meta.env.GHL_LOCATION_ID;
  if (!locationId) {
    throw new Error('GHL_LOCATION_ID is not configured');
  }
  return locationId;
}

function getObjectId(): string {
  return (typeof process !== 'undefined' && process.env?.GHL_OBJECT_ID) || import.meta.env.GHL_OBJECT_ID || '69fb490694debd0adf491703';
}

function getHeaders() {
  const apiKey = getApiKey();
  return {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Version': '2021-07-28',
  };
}

/**
 * Fetch all published events from GHL Custom Object "Evenementen"
 */
export async function fetchEvents() {
  const locationId = getLocationId();
  const url = `${GHL_BASE_URL}/objects/custom_objects.evenement/records/search`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      page: 1,
      pageLimit: 100,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (fetchEvents): ${response.status} - ${errorText}`);
    throw new Error(`GHL API error: ${response.status}`);
  }

  const data = await response.json();
  const records = data.records || [];

  // Filter: only published events with date >= today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return records
    .filter((record: any) => {
      const props = record.properties || record;
      const status = (props.status || props['custom_objects.evenement.status'] || '').toLowerCase();
      return status === 'gepubliceerd' || status === 'vol';
    })
    .map((record: any) => mapEventRecord(record))
    .filter((event: any) => {
      // Filter out past events
      if (!event.rawDate) return true;
      const eventDate = new Date(event.rawDate);
      return eventDate >= today;
    })
    .sort((a: any, b: any) => {
      // Sort by date ascending
      const dateA = new Date(a.rawDate || 0);
      const dateB = new Date(b.rawDate || 0);
      return dateA.getTime() - dateB.getTime();
    });
}

/**
 * Fetch a single event by its record ID
 */
export async function fetchEventById(recordId: string) {
  const locationId = getLocationId();
  const url = `${GHL_BASE_URL}/objects/custom_objects.evenement/records/${recordId}?locationId=${locationId}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (fetchEventById): ${response.status} - ${errorText}`);
    return null;
  }

  const data = await response.json();
  const record = data.record || data;
  return mapEventRecord(record);
}

/**
 * Search for a contact by email, or create a new one
 */
export async function findOrCreateContact(contactData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  postalCode?: string;
  city?: string;
}) {
  const locationId = getLocationId();
  
  // Step 1: Search for existing contact by email
  const searchUrl = `${GHL_BASE_URL}/contacts/search/duplicate?locationId=${locationId}&email=${encodeURIComponent(contactData.email)}`;
  
  const searchResponse = await fetch(searchUrl, {
    method: 'GET',
    headers: getHeaders(),
  });

  if (searchResponse.ok) {
    const searchData = await searchResponse.json();
    const existingContact = searchData.contact;
    if (existingContact && existingContact.id) {
      return existingContact.id;
    }
  }

  // Step 2: Create new contact
  const createUrl = `${GHL_BASE_URL}/contacts/`;
  const createResponse = await fetch(createUrl, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      email: contactData.email,
      phone: contactData.phone || '',
      companyName: contactData.company || '',
      address1: contactData.address || '',
      postalCode: contactData.postalCode || '',
      city: contactData.city || '',
    }),
  });

  if (!createResponse.ok) {
    const errorText = await createResponse.text();
    console.error(`GHL API error (createContact): ${createResponse.status} - ${errorText}`);
    throw new Error(`Failed to create contact: ${createResponse.status}`);
  }

  const createData = await createResponse.json();
  return createData.contact?.id || createData.id;
}

/**
 * Update a GHL Contact with custom fields (e.g. from the Evaluation Form)
 * and optionally attach a formatted note with the full evaluation summary.
 */
export async function saveContactEvaluation(params: {
  contactId: string;
  customFields: Array<{ id: string; field_value: string | number }>;
  noteBody?: string;
}) {
  const url = `${GHL_BASE_URL}/contacts/${params.contactId}`;

  const updateResponse = await fetch(url, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({
      customFields: params.customFields,
    }),
  });

  if (!updateResponse.ok) {
    const errorText = await updateResponse.text();
    console.warn(`GHL API warning (updateContact customFields): ${updateResponse.status} - ${errorText}`);
  }

  if (params.noteBody) {
    const noteUrl = `${GHL_BASE_URL}/contacts/${params.contactId}/notes`;
    const noteRes = await fetch(noteUrl, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        body: params.noteBody,
      }),
    });
    if (!noteRes.ok) {
      const noteErr = await noteRes.text();
      console.warn(`GHL API warning (createContactNote): ${noteRes.status} - ${noteErr}`);
    }
  }

  return true;
}

/**
 * Create an association between a Contact and an Event
 */
export async function createAssociation(contactId: string, eventRecordId: string) {
  const locationId = getLocationId();
  const url = `${GHL_BASE_URL}/objects/records/associations`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      firstRecordId: contactId,
      secondRecordId: eventRecordId,
      associationLabel: 'inschrijving',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (createAssociation): ${response.status} - ${errorText}`);
    throw new Error(`Failed to create association: ${response.status}`);
  }

  return await response.json();
}

// GoHighLevel Opportunity Custom Field IDs (zichtbaar direct in het geopende pijplijnkaartje)
export const GHL_OPPORTUNITY_FIELD_IDS = {
  typeAanvraag: 'MMq3UY6o4OCYol4kQmj8',        // Type Aanvraag
  categorie: 'kqvpZxjvs9Op1ks9h1Lm',           // Categorie / Vraagstuk
  onderwerpen: 'npVzDplchXRjIw55wKjM',         // Gekozen Trainingen / Onderwerpen
  omvang: 'yNRKIgcaD1S8BwdMXdMF',              // Aantal Deelnemers / Omvang
  voorkeur: 'i2Y9VKJhNvwv2BoHqeHb',            // Voorkeur Locatie / Vervolgstap
  klantbericht: 'Yf9X2HU2X6AhPJCKS9is',        // Klantbericht / Toelichting
  evaluatieSamenvatting: 'sSW006B97wX1QttJAI7G', // Samenvatting Evaluatie
};

/**
 * Create an Opportunity in GHL pipeline "Cursusbeheer & Trainingsverloop"
 */
export async function createOpportunity(params: {
  contactId: string;
  courseTitle: string;
  courseDate: string;
  courseLocation?: string;
  notes?: string;
  noteBody?: string;
  price?: number | string;
  participantsCount?: number;
  registrationType?: 'new' | 'elearning_completed';
}) {
  const locationId = getLocationId();
  const url = `${GHL_BASE_URL}/opportunities/`;

  const count = Math.max(1, Number(params.participantsCount) || 1);
  const isPraktijkdagOnly = params.registrationType === 'elearning_completed';

  const unitPrice = typeof params.price === 'number' 
    ? params.price 
    : parseFloat(String(params.price || '0').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

  const totalMonetaryValue = isPraktijkdagOnly ? 0 : unitPrice * count;

  const typeAanvraagLabel = isPraktijkdagOnly
    ? 'Praktijkdag na E-learning (Theorie afgerond)'
    : 'Directe Cursusinschrijving';

  const omvangLabel = isPraktijkdagOnly
    ? `${count === 1 ? '1 deelnemer' : `${count} deelnemers`} (E-learning afgerond)`
    : `${count} ${count === 1 ? 'deelnemer' : 'deelnemers'}`;

  const customFields: Array<{ id: string; field_value: string }> = [
    { id: GHL_OPPORTUNITY_FIELD_IDS.typeAanvraag, field_value: typeAanvraagLabel },
    { id: GHL_OPPORTUNITY_FIELD_IDS.categorie, field_value: params.courseTitle },
    { id: GHL_OPPORTUNITY_FIELD_IDS.onderwerpen, field_value: params.courseTitle },
    { id: GHL_OPPORTUNITY_FIELD_IDS.omvang, field_value: omvangLabel },
    {
      id: GHL_OPPORTUNITY_FIELD_IDS.voorkeur,
      field_value: params.courseLocation ? `${params.courseDate} (${params.courseLocation})` : params.courseDate,
    },
  ];

  if (params.notes) {
    customFields.push({
      id: GHL_OPPORTUNITY_FIELD_IDS.klantbericht,
      field_value: params.notes,
    });
  }

  // Sla ook een overzichtelijke notitie op in het GHL Contact-dossier (best-effort)
  if (params.noteBody) {
    try {
      await fetch(`${GHL_BASE_URL}/contacts/${params.contactId}/notes`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ body: params.noteBody }),
      });
    } catch (noteErr) {
      console.warn('GHL warning (createOpportunity contact note):', noteErr);
    }
  }

  const oppName = isPraktijkdagOnly
    ? `[Praktijkdag E-learning] ${params.courseTitle} — ${params.courseDate}`
    : `Inschrijving ${params.courseTitle}${count > 1 ? ` (${count} deelnemers)` : ''} — ${params.courseDate}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      name: oppName,
      contactId: params.contactId,
      pipelineId: 'ISQKzPugJG0QuVUZQ0XO',
      pipelineStageId: '45bac17e-d10c-44b0-80cb-9b638a693f05',
      status: 'open',
      source: isPraktijkdagOnly
        ? 'Website Praktijkdag Inplannen (na E-learning)'
        : 'Website Cursusinschrijving',
      monetaryValue: totalMonetaryValue,
      customFields,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (createOpportunity): ${response.status} - ${errorText}`);
    return null;
  }

  return await response.json();
}

// GoHighLevel Actieve Workflow IDs (voor directe API-koppeling)
export const GHL_WORKFLOW_IDS = {
  cursusInschrijvingBevestiging: 'a25cf66f-1ea3-4e9b-b2c3-a8305d98c2b3', // 01. 📅 Cursus Inschrijving — Bevestiging
  elearningBhvBasisNl: '9a4a7c20-c471-477d-b53a-9e0adc512b73',           // 02a. 💻 E-learning Toegang — BHV Basis (NL)
  elearningBhvBasisEn: 'dc40da38-403d-43bd-9a7b-1a6cc498e0a3',           // 02b. 💻 E-learning Toegang — BHV Basis (EN)
  elearningVcaVol: 'bf8d1531-d07b-46f6-8f05-de41733513ca',               // 02c. 💻 E-learning Toegang — VCA VOL
  geslaagdPasjeCertificaat: '912fabbd-1c9f-4bac-9326-d734b1d9eec7',      // 03. 🎓 Geslaagd — Certificaat & Pasje Verzenden
  verlengingHerinneringen: '4baef5f1-18db-4293-b0bf-d117fd5faf6e',       // 04. 🔄 Verlenging & Hertraining — Automatische Oproep
};

/**
 * Start een specifieke GHL Workflow voor een contactpersoon
 */
export async function addContactToWorkflow(contactId: string, workflowId: string) {
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/workflow/${workflowId}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ eventStartTime: new Date().toISOString() }),
    });
    return response.ok;
  } catch (err) {
    console.warn(`GHL warning (addContactToWorkflow ${workflowId}):`, err);
    return false;
  }
}

/**
 * Maak een opvolgtaak (Task) aan bij een contactpersoon in GHL
 */
export async function createContactTask(params: {
  contactId: string;
  title: string;
  body: string;
  dueInHours?: number;
}) {
  try {
    const dueDate = new Date(Date.now() + (params.dueInHours ?? 24) * 60 * 60 * 1000).toISOString();
    const response = await fetch(`${GHL_BASE_URL}/contacts/${params.contactId}/tasks`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        title: params.title,
        body: params.body,
        dueDate,
        completed: false,
      }),
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (err) {
    console.warn('GHL warning (createContactTask):', err);
    return null;
  }
}

/**
 * Create an Opportunity in the GHL pipeline "Evaluatieformulier" (ID: HlgIOCBVGIFaBLmL1PJa)
 * Stages:
 * - 9b3b3086-fb79-428c-82c0-624fb6fb8cb2: 📥 Nieuwe Evaluatie
 * - 82b36613-732f-48b8-a5eb-946a67addd70: ⭐ Positief (4.0 - 5.0)
 * - 1d1611cf-b8c8-4216-b2dd-8b99882e5e0e: ⚠️ Aandachtspunt / Opvolging (< 4.0)
 * - 00a3bbda-3f27-4244-b971-3787c7415768: 💬 Besproken met Instructeur
 * - a5ebf4d4-e109-4258-b92e-132337303d2e: ✅ Afgerond
 */
export async function createEvaluationOpportunity(params: {
  contactId: string;
  course: string;
  participantName: string;
  instructor?: string;
  date: string;
  averageScore?: string | null;
  evaluationSummary?: string;
}) {
  const locationId = getLocationId();
  const url = `${GHL_BASE_URL}/opportunities/`;

  const scoreNum = params.averageScore ? parseFloat(params.averageScore) : null;
  const isLowScore = scoreNum !== null && !isNaN(scoreNum) && scoreNum < 4.0;

  // 1. Alleen bij een lage score (< 4.0) een waarschuwingstag + opvolgtaak aanmaken zodat de kaart direct opvalt
  if (isLowScore) {
    try {
      await fetch(`${GHL_BASE_URL}/contacts/${params.contactId}/tags`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ tags: ['evaluatie-aandachtspunt'] }),
      });
    } catch (tagErr) {
      console.warn('GHL warning (addEvaluationTags):', tagErr);
    }

    await createContactTask({
      contactId: params.contactId,
      title: `⚠️ Evaluatie opvolgen (${params.averageScore}/5): ${params.course} — ${params.participantName}`,
      body: `Cursist ${params.participantName} gaf gemiddeld ${params.averageScore}/5 voor ${params.course} (${params.date}${params.instructor ? `, docent: ${params.instructor}` : ''}). Bekijk het evaluatiekaartje en neem indien nodig contact op.`,
      dueInHours: 24,
    });
  }

  const scoreTag = params.averageScore ? `[${params.averageScore}/5 ★] ` : '';
  const instructorTag = params.instructor ? ` • Docent: ${params.instructor}` : '';
  const oppName = `${scoreTag}${params.course} — ${params.participantName} (${params.date})${instructorTag}`;

  const customFields: Array<{ id: string; field_value: string }> = [
    {
      id: GHL_OPPORTUNITY_FIELD_IDS.typeAanvraag,
      field_value: 'Evaluatieformulier',
    },
    {
      id: GHL_OPPORTUNITY_FIELD_IDS.categorie,
      field_value: params.course,
    },
  ];

  if (params.evaluationSummary) {
    customFields.push({
      id: GHL_OPPORTUNITY_FIELD_IDS.evaluatieSamenvatting,
      field_value: params.evaluationSummary,
    });
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      name: oppName,
      contactId: params.contactId,
      pipelineId: 'HlgIOCBVGIFaBLmL1PJa',
      pipelineStageId: '9b3b3086-fb79-428c-82c0-624fb6fb8cb2',
      status: 'open',
      source: 'Evaluatieformulier (/evaluatieformulier)',
      customFields,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (createEvaluationOpportunity): ${response.status} - ${errorText}`);
    return null;
  }

  return await response.json();
}

/**
 * Create an Opportunity in the GHL pipeline "Website Leads" (ID: f5jmDdrAoJnu1spJfD6m)
 * Stages:
 * - f4d3c425-7602-43e2-a97b-0ccdba8e40d4: 📥 Nieuwe Aanvraag (Website)
 * - 35aaed2e-f9bb-4d4a-8b63-6102edaf16e8: 📞 In Behandeling / Contact Gelegd
 * - 7efce913-5d6f-4807-8abf-5a1511714aab: 📄 Advies / Offerte Verstuurd
 * - 8485faed-5b88-4a8b-9a74-c2c7955a97a4: ⏳ Opvolgen / Wacht op Akkoord
 * - 846460dd-0972-4471-929c-0e7c47a3b134: ✅ Akkoord / Omgezet naar Opdracht
 * - fab2f703-80fb-4830-8b59-7912f135bc5f: ❌ Afgehandeld / Geen Opdracht
 */
export async function createWebsiteLeadOpportunity(params: {
  contactId: string;
  leadTitle: string;
  sourceLabel?: string;
  typeAanvraag?: string;
  categorie?: string;
  onderwerpen?: string;
  omvang?: string;
  voorkeur?: string;
  klantbericht?: string;
  noteBody?: string;
  tags?: string[];
  monetaryValue?: number;
}) {
  const locationId = getLocationId();

  // 1. Voeg relevante tags toe aan het contact (best-effort)
  if (params.tags && params.tags.length > 0) {
    try {
      await fetch(`${GHL_BASE_URL}/contacts/${params.contactId}/tags`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ tags: params.tags }),
      });
    } catch (tagErr) {
      console.warn('GHL warning (addWebsiteLeadTags):', tagErr);
    }
  }

  // 2. Sla een overzichtelijke notitie op bij het contact met alle ingevulde velden (best-effort)
  if (params.noteBody) {
    try {
      await fetch(`${GHL_BASE_URL}/contacts/${params.contactId}/notes`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ body: params.noteBody }),
      });
    } catch (noteErr) {
      console.warn('GHL warning (createWebsiteLeadNote):', noteErr);
    }
  }

  // 3. Maak automatisch een opvolgtaak (Task) aan voor de binnendienst (binnen 24u opvolgen)
  await createContactTask({
    contactId: params.contactId,
    title: `📞 Nieuwe Website Lead opvolgen: ${params.leadTitle}`,
    body: params.noteBody || `Nieuwe aanvraag via ${params.sourceLabel || 'Website'}: ${params.leadTitle}`,
    dueInHours: 24,
  });

  // 4. Bouw Opportunity Custom Fields op zodat alles direct in het pijplijnkaartje zelf zichtbaar is
  const customFields: Array<{ id: string; field_value: string }> = [];
  if (params.typeAanvraag) {
    customFields.push({ id: GHL_OPPORTUNITY_FIELD_IDS.typeAanvraag, field_value: params.typeAanvraag });
  }
  if (params.categorie) {
    customFields.push({ id: GHL_OPPORTUNITY_FIELD_IDS.categorie, field_value: params.categorie });
  }
  if (params.onderwerpen) {
    customFields.push({ id: GHL_OPPORTUNITY_FIELD_IDS.onderwerpen, field_value: params.onderwerpen });
  }
  if (params.omvang) {
    customFields.push({ id: GHL_OPPORTUNITY_FIELD_IDS.omvang, field_value: params.omvang });
  }
  if (params.voorkeur) {
    customFields.push({ id: GHL_OPPORTUNITY_FIELD_IDS.voorkeur, field_value: params.voorkeur });
  }
  if (params.klantbericht) {
    customFields.push({ id: GHL_OPPORTUNITY_FIELD_IDS.klantbericht, field_value: params.klantbericht });
  }

  // 5. Maak de Opportunity aan in pijplijn "Website Leads" -> kolom "📥 Nieuwe Aanvraag (Website)"
  const url = `${GHL_BASE_URL}/opportunities/`;
  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      name: params.leadTitle,
      contactId: params.contactId,
      pipelineId: 'f5jmDdrAoJnu1spJfD6m',
      pipelineStageId: 'f4d3c425-7602-43e2-a97b-0ccdba8e40d4',
      status: 'open',
      source: params.sourceLabel || 'Website Lead',
      monetaryValue: params.monetaryValue || 0,
      customFields,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (createWebsiteLeadOpportunity): ${response.status} - ${errorText}`);
    return null;
  }

  return await response.json();
}

/**
 * Update the registration count on an event and optionally set status to "vol"
 */
export async function updateEventRegistrations(
  eventRecordId: string,
  currentRegistrations: number,
  maxSpots: number,
  incrementBy: number = 1
) {
  const locationId = getLocationId();
  const url = `${GHL_BASE_URL}/objects/custom_objects.evenement/records/${eventRecordId}?locationId=${locationId}`;

  const newCount = currentRegistrations + Math.max(1, incrementBy);
  const properties: Record<string, any> = {
    'aantal_inschrijvingen': newCount,
  };

  // Auto-set status to "vol" if capacity is reached
  if (newCount >= maxSpots && maxSpots > 0) {
    properties['status'] = 'vol';
  }

  const response = await fetch(url, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({
      properties,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GHL API error (updateRegistrations): ${response.status} - ${errorText}`);
    throw new Error(`Failed to update registrations: ${response.status}`);
  }

  return await response.json();
}

/**
 * Map a GHL record to the website's event format
 */
function mapEventRecord(record: any) {
  const props = record.properties || record;
  const id = record.id || props.id;
  
  // Extract fields (support GHL search response, single record, and webhook format)
  const title = props.naam || props['custom_objects.evenement.naam'] || props.title || '';
  const rawDate = props.datum || props['custom_objects.evenement.datum'] || props.date || '';
  const startTime = props.starttijd || props['custom_objects.evenement.starttijd'] || props.startTime || '';
  const endTime = props.eindtijd || props['custom_objects.evenement.eindtijd'] || props.endTime || '';
  const rawLocation = props.locatienaam || props['custom_objects.evenement.locatienaam'] || props.location || '';
  const location = (!rawLocation || /zoetermeer|golden tulip/i.test(rawLocation))
    ? 'Edusafe Hoofdlocatie Den Haag'
    : rawLocation;
  const address = props.adres || props['custom_objects.evenement.adres'] || props.address || '';
  const category = (props.cursustype || props['custom_objects.evenement.cursustype'] || props.category || '').toUpperCase();
  const priceRaw = props.prijs || props['custom_objects.evenement.prijs'] || props.price || '0';
  const maxSpots = parseInt(props.max_deelnemers || props['custom_objects.evenement.max_deelnemers'] || props.spots || '0', 10);
  const registrations = parseInt(props.aantal_inschrijvingen || props['custom_objects.evenement.aantal_inschrijvingen'] || props.registrations || '0', 10);
  const status = (props.status || props['custom_objects.evenement.status'] || '').toLowerCase();

  // Resolve course detail slug based on title & category
  const tLower = title.toLowerCase();
  const cLower = category.toLowerCase();
  let courseSlug = 'bhv-basis';
  if (cLower.includes('ehak') || tLower.includes('ehak') || tLower.includes('kinder')) {
    courseSlug = 'ehak';
  } else if (cLower.includes('aed') || tLower.includes('aed') || tLower.includes('reanimatie')) {
    courseSlug = 'aed-reanimatie';
  } else if (cLower.includes('ehbo') || tLower.includes('ehbo') || tLower.includes('first aid')) {
    courseSlug = tLower.includes('herhaling') || tLower.includes('refresher') ? 'ehbo-herhaling' : 'ehbo-basis';
  } else if (cLower.includes('vca') || tLower.includes('vca')) {
    courseSlug = tLower.includes('vol') && !tLower.includes('basis') ? 'vca-vol' : 'vca-basis';
  } else if (cLower.includes('heftruck') || tLower.includes('heftruck') || tLower.includes('forklift')) {
    courseSlug = 'heftruck';
  } else if (cLower.includes('offshore') || tLower.includes('bosiet') || tLower.includes('opito')) {
    courseSlug = 'bosiet';
  } else if (tLower.includes('ploegleider')) {
    courseSlug = 'bhv-ploegleider';
  } else if (tLower.includes('hoofd bhv')) {
    courseSlug = 'hoofd-bhv';
  } else if (tLower.includes('ontruiming')) {
    courseSlug = 'brand-en-ontruiming';
  } else if (tLower.includes('herhaling') && !tLower.includes('basis')) {
    courseSlug = 'bhv-herhaling';
  } else {
    courseSlug = 'bhv-basis';
  }

  // Calculate free spots (only enforce limit if maxSpots > 0)
  const hasCapacity = maxSpots > 0;
  const freeSpots = hasCapacity ? Math.max(0, maxSpots - registrations) : 0;
  const isEventFull = status === 'vol' || (hasCapacity && freeSpots <= 0);
  const resolvedSpotsLabel = isEventFull
    ? 'Volgeboekt'
    : hasCapacity
      ? `${freeSpots} vrij`
      : 'Beschikbaar';

  // Format date for display (Dutch format)
  const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
  let displayDate = rawDate;
  try {
    const dateObj = new Date(rawDate);
    if (!isNaN(dateObj.getTime())) {
      displayDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    }
  } catch (e) {
    // Keep raw date if parsing fails
  }

  // Format price
  const priceNum = parseFloat(String(priceRaw).replace(/[^0-9.,]/g, '').replace(',', '.'));
  let price = '';
  if (priceNum > 0) {
    price = `€ ${Math.round(priceNum)},-`;
  }

  // Format time
  const time = startTime && endTime ? `${startTime} - ${endTime}` : (props.time || '');

  // Category image mapping
  const categoryImages: Record<string, string> = {
    'EHBO': 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
    'EHAK': 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    'BHV': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    'VCA': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    'Heftruck': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    'Ontruiming': 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
  };

  // Find matching category image
  const categoryKey = Object.keys(categoryImages).find(key => 
    category.toLowerCase().includes(key.toLowerCase())
  ) || '';
  const image = categoryImages[categoryKey] || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800';

  return {
    id,
    title,
    courseSlug,
    date: displayDate,
    rawDate,
    time,
    location,
    address,
    category,
    price,
    spots: maxSpots,
    registrations,
    freeSpots,
    freeSpotsLabel: resolvedSpotsLabel,
    image,
    status: status.toLowerCase(),
  };
}
