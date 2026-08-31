/**
 * POST /api/sync/evenement
 * Webhook endpoint that receives event updates from GHL workflow
 * Validates the X-Source header and logs the incoming payload
 */
export const prerender = false;

export async function POST({ request }: { request: Request }) {
  try {
    // Validate source header to prevent unauthorized access
    const source = request.headers.get('X-Source') || request.headers.get('x-source');
    
    if (source !== 'ghl') {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized source' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const payload = await request.json();
    
    // Log the received event for debugging
    console.log('[Webhook] Received event update from GHL:', JSON.stringify({
      id: payload.id,
      title: payload.title,
      status: payload.status,
      date: payload.date,
      spots: payload.spots,
      registrations: payload.registrations,
      timestamp: new Date().toISOString(),
    }));

    // For now, acknowledge receipt. 
    // In the future, this could update a local cache/database for faster reads.
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Webhook received successfully',
        eventId: payload.id,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('[Webhook] Error processing GHL webhook:', error.message);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to process webhook',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
