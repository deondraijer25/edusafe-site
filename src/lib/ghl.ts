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

/**
 * Update the registration count on an event and optionally set status to "vol"
 */
export async function updateEventRegistrations(eventRecordId: string, currentRegistrations: number, maxSpots: number) {
  const locationId = getLocationId();
  const objectId = import.meta.env.GHL_OBJECT_ID || '69fb490694debd0adf491703';
  const url = `${GHL_BASE_URL}/objects/${objectId}/records/${eventRecordId}`;

  const newCount = currentRegistrations + 1;
  const properties: Record<string, any> = {
    'custom_objects.evenement.aantal_inschrijvingen': newCount,
  };

  // Auto-set status to "vol" if capacity is reached
  if (newCount >= maxSpots && maxSpots > 0) {
    properties['custom_objects.evenement.status'] = 'vol';
  }

  const response = await fetch(url, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
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
  const location = props.locatienaam || props['custom_objects.evenement.locatienaam'] || props.location || '';
  const address = props.adres || props['custom_objects.evenement.adres'] || props.address || '';
  const category = (props.cursustype || props['custom_objects.evenement.cursustype'] || props.category || '').toUpperCase();
  const priceRaw = props.prijs || props['custom_objects.evenement.prijs'] || props.price || '0';
  const maxSpots = parseInt(props.max_deelnemers || props['custom_objects.evenement.max_deelnemers'] || props.spots || '0', 10);
  const registrations = parseInt(props.aantal_inschrijvingen || props['custom_objects.evenement.aantal_inschrijvingen'] || props.registrations || '0', 10);
  const status = (props.status || props['custom_objects.evenement.status'] || '').toLowerCase();

  // Calculate free spots
  const freeSpots = Math.max(0, maxSpots - registrations);

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
    'EHAK': 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?auto=format&fit=crop&q=80&w=800',
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
    freeSpotsLabel: freeSpots > 0 ? `${freeSpots} vrij` : 'Volgeboekt',
    image,
    status: status.toLowerCase(),
  };
}
