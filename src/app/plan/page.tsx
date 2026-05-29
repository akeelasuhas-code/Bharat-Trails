import { itineraries } from '@/data/itineraries';
import AltitudeChart from '@/components/AltitudeChart';
import DynamicImage from '@/components/DynamicImage';

export default function PlanTrip() {
  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--off-white)', minHeight: '100vh' }}>
      <section style={{ backgroundColor: 'var(--forest-deep)', color: 'var(--off-white)', padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Multi-Destination Itineraries</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
            Day-by-day breakdowns of our most requested trails. Every detail you need to hit the road.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 2rem' }}>
        {itineraries.map(it => (
          <div key={it.id} style={{ marginBottom: '8rem', paddingBottom: '4rem', borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '4rem 2rem', borderRadius: '8px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.2 }}>
                <DynamicImage query={it.name.split(':')[1] || it.name} alt={it.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span className="badge badge-amber" style={{ marginBottom: '1rem' }}>{it.zone}</span>
                <h2 style={{ fontSize: '3rem', color: 'var(--forest-deep)', marginBottom: '1rem' }}>{it.name}</h2>
                <p className="mono-label" style={{ fontSize: '1rem', color: 'var(--forest-deep)' }}>{it.durationDays} Days • {it.totalKm} km • {it.routeTitle}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Cost Per Person</h3>
                <ul style={{ listStyle: 'none', fontSize: '1.2rem', lineHeight: 2 }}>
                  <li><strong>Tier 1 (Backpacker):</strong> ₹{it.costPerPerson.tier1}</li>
                  <li><strong>Tier 2 (Mid-Range):</strong> ₹{it.costPerPerson.tier2}</li>
                  <li><strong>Tier 3 (Premium):</strong> ₹{it.costPerPerson.tier3}</li>
                </ul>
                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', borderRadius: '4px' }}>
                  <p><strong>Best Time:</strong> {it.bestTimeToGoBanner}</p>
                  <p style={{ marginTop: '0.5rem', color: '#d9534f' }}><strong>Warning:</strong> {it.seasonalWarnings}</p>
                </div>
              </div>
              <div>
                <AltitudeChart 
                  labels={it.days.map(d => `Day ${d.dayNumber}`)} 
                  data={it.days.map(d => d.altitude)} 
                  title="Route Elevation Profile" 
                />
              </div>
            </div>

            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Day-by-Day Schedule</h3>
            <div className="timeline" style={{ borderLeft: '4px solid var(--sage-green)', paddingLeft: '2rem', marginLeft: '1rem' }}>
              {it.days.map(day => (
                <div key={day.dayNumber} style={{ position: 'relative', marginBottom: '3rem', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <div style={{ position: 'absolute', left: '-3.15rem', top: '2rem', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--forest-deep)', border: '4px solid white' }}></div>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--forest-deep)', marginBottom: '1rem' }}>Day {day.dayNumber} <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--sage-green)' }}>(Altitude: {day.altitude}m)</span></h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    <p><strong>🌅 Wake up:</strong> {day.wakeUpTime}</p>
                    <p><strong>🚗 Transit:</strong> {day.transitDuration}</p>
                    <p><strong>🏕️ Morning:</strong> {day.morningActivity}</p>
                    <p><strong>🍽️ Lunch:</strong> {day.lunchSpot}</p>
                    <p><strong>📸 Afternoon:</strong> {day.afternoonActivity}</p>
                    <p><strong>🛎️ Check-in:</strong> {day.eveningCheckIn}</p>
                    <p><strong>🥘 Dinner:</strong> {day.dinnerRecommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
