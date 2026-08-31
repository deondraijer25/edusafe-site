/**
 * GET /api/events
 * Fetches all published events from GHL and returns them as JSON
 * Falls back to local courses.js data if GHL API is unavailable
 */
export const prerender = false;

import { fetchEvents } from '../../lib/ghl';
import { courses } from '../../data/courses.js';

export async function GET() {
  try {
    const events = await fetchEvents();

    return new Response(
      JSON.stringify({
        success: true,
        source: 'ghl',
        count: events.length,
        data: events,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      }
    );
  } catch (error: any) {
    console.error('Failed to fetch events from GHL, falling back to local data:', error.message);

    // Fallback to local courses.js data
    return new Response(
      JSON.stringify({
        success: true,
        source: 'local',
        count: courses.length,
        data: courses.map(course => ({
          ...course,
          freeSpotsLabel: course.freeSpots || '0 vrij',
          spots: 15,
          registrations: 0,
          status: 'gepubliceerd',
          rawDate: '',
        })),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      }
    );
  }
}
