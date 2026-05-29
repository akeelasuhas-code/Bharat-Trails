import Link from 'next/link';
import { allDestinations } from '@/data/destinations';

export default function DestinationsList() {
  const zone1 = allDestinations.filter(d => d.zone.includes('Zone 1'));
  const zone2 = allDestinations.filter(d => d.zone.includes('Zone 2'));
  const zone3 = allDestinations.filter(d => d.zone.includes('Zone 3'));

  const renderZone = (title: string, id: string, destinations: typeof allDestinations) => (
    <div id={id} style={{ marginBottom: '5rem', paddingTop: '5rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)', paddingBottom: '1rem' }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {destinations.map(dest => (
          <div key={dest.id} className="tilt-card" style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '2rem' }}>
              <span className="badge badge-green" style={{ marginBottom: '1rem' }}>{dest.altitude}m Altitude</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{dest.name}</h3>
              <p className="mono-label" style={{ color: 'var(--sage-green)', marginBottom: '1rem' }}>{dest.state}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>{dest.keyFeature}</p>
              <Link href={`/destinations/${dest.id}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                View Destination
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--warm-cloud)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>All Destinations</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
          Explore our complete coverage of the Indian highlands.
        </p>

        {renderZone('Zone 1: Northeast India (Clouds & Tribes)', 'zone-1', zone1)}
        {renderZone('Zone 2: North India (Himalayan High)', 'zone-2', zone2)}
        {renderZone('Zone 3: South India (Misty Highlands)', 'zone-3', zone3)}
      </div>
    </main>
  );
}
