import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const destination = searchParams.get('destination');
  const baseEstimate = parseInt(searchParams.get('estimate') || '5000');

  // Using the RapidAPI key provided by the user
  const apiKey = process.env.RAPIDAPI_KEY || '9b53bab05dmsh1d158e0616fac1ap1b1cb0jsn63b36e21a4dc';
  const apiHost = 'flights-sky.p.rapidapi.com';
  
  if (!destination) {
    return NextResponse.json({ success: false, error: 'Destination is required' }, { status: 400 });
  }

  try {
    // 1. Get Destination PlaceId using auto-complete
    const acRes = await fetch(`https://${apiHost}/web/flights/auto-complete?query=${encodeURIComponent(destination)}`, {
      headers: {
        'x-rapidapi-host': apiHost,
        'x-rapidapi-key': apiKey
      }
    });
    
    if (!acRes.ok) {
        throw new Error('Autocomplete API failed');
    }

    const acData = await acRes.json();
    let placeIdTo = '';
    
    if (acData.status && acData.data && acData.data.length > 0) {
      // Find the first valid PlaceId
      placeIdTo = acData.data[0].PlaceId;
    } else {
      throw new Error('Could not find destination PlaceId');
    }

    // 2. Search for flights 30 days from now
    const today = new Date();
    today.setDate(today.getDate() + 30);
    const departDate = today.toISOString().split('T')[0]; // YYYY-MM-DD

    const searchRes = await fetch(`https://${apiHost}/web/flights/search-one-way?placeIdFrom=HYD&placeIdTo=${placeIdTo}&departDate=${departDate}&adults=1&currency=INR`, {
      headers: {
        'x-rapidapi-host': apiHost,
        'x-rapidapi-key': apiKey
      }
    });

    if (!searchRes.ok) {
        throw new Error('Search API failed');
    }

    const searchData = await searchRes.json();
    
    // Check for results
    if (searchData.status && searchData.data && searchData.data.itineraries && searchData.data.itineraries.results) {
        const results = searchData.data.itineraries.results;
        
        // Extract top 3 flights
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const flights = results.slice(0, 3).map((flight: any) => {
            const leg = flight.legs[0];
            const airline = leg.carriers.marketing[0].name;
            const logoUrl = leg.carriers.marketing[0].logoUrl;
            const price = flight.pricingOptions[0].price.amount;
            
            // Format times (e.g. 2025-05-07T14:30:00 -> 14:30)
            const depTime = new Date(leg.departure).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            const arrTime = new Date(leg.arrival).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            const duration = Math.floor(leg.durationInMinutes / 60) + 'h ' + (leg.durationInMinutes % 60) + 'm';
            
            return {
                id: flight.id,
                airline,
                logoUrl,
                departureTime: depTime,
                arrivalTime: arrTime,
                duration,
                price: parseFloat(price),
                stops: leg.stopCount,
                bookingLink: `https://www.skyscanner.co.in/transport/flights/HYD/${placeIdTo}/${departDate}` // Dynamic Skyscanner deep link
            };
        });

        if (flights.length > 0) {
            return NextResponse.json({
                success: true,
                data: {
                    price: flights[0].price, // Cheapest flight price as baseline
                    flights,
                    currency: 'INR',
                    source: 'RapidAPI Flights Sky'
                }
            });
        }
    }

    // Fallback if no flights found
    throw new Error('No flights found');

  } catch (error) {
    console.error("Flight API Error:", error);
    // Return mock variation based on baseEstimate so UI doesn't crash completely
    const randomFlux = Math.floor(Math.random() * 800) - 400;
    return NextResponse.json({
        success: true,
        data: {
            price: baseEstimate + randomFlux,
            currency: 'INR',
            source: 'Fallback Estimate',
            flights: []
        }
    });
  }
}
