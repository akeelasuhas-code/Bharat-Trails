import { notFound } from 'next/navigation';
import { getDestinationById } from '@/data/destinations';
import AltitudeChart from '@/components/AltitudeChart';
import Link from 'next/link';
import { itineraries } from '@/data/itineraries';
import DynamicImage from '@/components/DynamicImage';

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dest = getDestinationById(resolvedParams.slug);

  if (!dest) {
    notFound();
  }

  // Find itineraries featuring this destination
  const linkedItineraries = itineraries.filter(it => it.routeTitle.includes(dest.name));

  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as const;

  return (
    <main>
      {/* 1. Hero */}
      <section style={{ 
        paddingTop: '150px', 
        paddingBottom: '6rem', 
        backgroundColor: 'var(--forest-deep)', 
        color: 'var(--off-white)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.4 }}>
          <DynamicImage query={dest.name + " " + dest.state} alt={dest.name} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <span className="badge badge-amber">{dest.zone}</span>
            <span className="badge badge-green">{dest.altitude}m</span>
          </div>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>{dest.name}</h1>
          <p className="mono-label" style={{ opacity: 0.8 }}>{dest.state}</p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 2rem' }}>
        
        {/* 2. Why go here */}
        <section style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why {dest.name}?</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
            {dest.description}
          </p>
        </section>

        {/* 3. Best Stays */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Curated Stays</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {dest.stays.map(stay => (
              <div key={stay.tier} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <span className="badge badge-amber" style={{ marginBottom: '1rem' }}>Tier {stay.tier}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{stay.propertyName}</h3>
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', opacity: 0.8, fontSize: '0.95rem' }}>
                  <li><strong>Price:</strong> ₹{stay.pricePerNight} / night</li>
                  <li><strong>Location:</strong> {stay.distanceFromAttractions}</li>
                  <li><strong>Breakfast:</strong> {stay.breakfastIncluded ? 'Included' : 'Not Included'}</li>
                  {stay.cloudMountainViews && <li>☁️ Mountain/Cloud Views</li>}
                </ul>
                <a href={stay.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                  {stay.bookingUrl.includes('Unverified') ? 'Booking Unverified' : 'View Booking'}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4 & 5. Transport & Commute */}
        <section style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Getting There (From HYD)</h2>
            <div style={{ padding: '2rem', backgroundColor: 'var(--warm-cloud)', borderRadius: '8px' }}>
              <p><strong>Total Travel Time:</strong> {dest.transport.totalTravelTime}</p>
              {dest.transport.flights && (
                <div style={{ marginTop: '1rem' }}>
                  <h4>✈️ Flight Route</h4>
                  <p>{dest.transport.flights.route} ({dest.transport.flights.airlines.join(', ')})</p>
                  <p>Est. Fare: ₹{dest.transport.flights.averageFareEstimate}</p>
                </div>
              )}
              {dest.transport.trains && (
                <div style={{ marginTop: '1rem' }}>
                  <h4>🚂 Train Route</h4>
                  <p>{dest.transport.trains.name} ({dest.transport.trains.number})</p>
                  <p>{dest.transport.trains.route} - {dest.transport.trains.journeyHours} hrs</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Local Commute</h2>
            <div style={{ padding: '2rem', backgroundColor: 'var(--warm-cloud)', borderRadius: '8px' }}>
              <ul style={{ listStyle: 'none' }}>
                {dest.commuteOptions.map((opt, i) => (
                  <li key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <strong>{opt.type}</strong><br/>
                    Cost: {opt.cost} {opt.vendorName && `| Vendor: ${opt.vendorName}`}
                    {opt.notes && <><br/><span style={{ fontSize: '0.85rem', color: '#d9534f' }}>{opt.notes}</span></>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Trek Card (if applicable) */}
        {dest.trek && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Trek Details: {dest.trek.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', backgroundColor: 'var(--forest-deep)', color: 'white', padding: '3rem', borderRadius: '8px' }}>
              <div>
                <p><strong>Route:</strong> {dest.trek.route}</p>
                <p><strong>Distance:</strong> {dest.trek.totalDistanceKm} km</p>
                <p><strong>Elevation Gain:</strong> {dest.trek.elevationGainMeters}m</p>
                <p><strong>Difficulty:</strong> {dest.trek.difficulty}</p>
                <p><strong>Best Months:</strong> {dest.trek.bestMonths.join(', ')}</p>
                <p><strong>Estimated Time:</strong> {dest.trek.estimatedTime}</p>
              </div>
              <div>
                <AltitudeChart 
                  labels={['Start', 'Peak']} 
                  data={[dest.altitude, dest.altitude + dest.trek.elevationGainMeters]} 
                  title="Trek Elevation Profile" 
                />
              </div>
            </div>
          </section>
        )}

        {/* 7. Food & Dining */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Food & Dining</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '1rem' }}>Top Places to Eat</h3>
              <ul>
                {dest.food.restaurants.map((r, i) => (
                  <li key={i}><a href={r.mapLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>{r.name}</a></li>
                ))}
              </ul>
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Local Dishes to Try</h3>
              <ul>
                {dest.food.localDishes.map((d, i) => (
                  <li key={i}>{d.name} <span style={{ opacity: 0.6 }}>({d.whereToEat})</span></li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--warm-cloud)', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '1rem' }}>Notes</h3>
              <p><strong>Vegetarian Availability:</strong> {dest.food.vegetarianAvailability}</p>
              <p><strong>Est. Meal Cost:</strong> ₹{dest.food.approxMealCostPerDay}/day per person</p>
              <p><strong>Cooking at Stay:</strong> {dest.food.cookingAvailableAtStay ? 'Possible' : 'Not generally possible'}</p>
            </div>
          </div>
        </section>

        {/* 8. Permits */}
        {dest.permits && dest.permits.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Permit Requirements</h2>
            <div style={{ padding: '2rem', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', borderRadius: '4px' }}>
              {dest.permits.map((p, i) => (
                <div key={i} style={{ marginBottom: i !== dest.permits!.length - 1 ? '2rem' : 0 }}>
                  <h3 style={{ marginBottom: '1rem' }}>{p.type}</h3>
                  <p><strong>Issued By:</strong> {p.issuedBy}</p>
                  <p><strong>Cost:</strong> ₹{p.costPerPerson}</p>
                  <p><strong>Processing Time:</strong> {p.processingTime}</p>
                  <p><strong>Docs Required:</strong> {p.documentsRequired.join(', ')}</p>
                  <p><strong>Portal:</strong> <a href={p.applicationPortalLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'blue' }}>{p.applicationPortalLink}</a></p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. Seasonal Calendar */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Seasonal Calendar</h2>
          <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>{dest.bestTimeBanner}</p>
          <p style={{ marginBottom: '2rem', color: '#d9534f' }}>⚠️ {dest.seasonalRoadWarnings}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4px' }}>
            {monthNames.map(m => (
              <div key={m} style={{ textAlign: 'center' }}>
                <div style={{ 
                  height: '40px', 
                  backgroundColor: dest.seasonalCalendar[m] === 'Green' ? 'var(--sage-green)' : dest.seasonalCalendar[m] === 'Amber' ? 'var(--sunrise-amber)' : '#d9534f',
                  borderRadius: '4px'
                }}></div>
                <span className="mono-label" style={{ fontSize: '0.7rem', display: 'block', marginTop: '0.5rem' }}>{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Linked Itineraries */}
        {linkedItineraries.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Featured In Itineraries</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {linkedItineraries.map(it => (
                <div key={it.id} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{it.name}</h3>
                  <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>{it.durationDays} Days • {it.routeTitle}</p>
                  <Link href={`/plan`} className="btn btn-outline">View Itinerary Details</Link>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
