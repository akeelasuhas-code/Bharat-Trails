'use client';
import { useState, useMemo, useEffect } from 'react';
import { allDestinations } from '@/data/destinations';

type Flight = {
  id: string;
  airline: string;
  logoUrl: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
  bookingLink: string;
};

export default function BudgetCalculator() {
  const [selectedDestId, setSelectedDestId] = useState(allDestinations[0].id);
  const [people, setPeople] = useState(10);
  const [tier, setTier] = useState<1|2|3>(2);
  const [season, setSeason] = useState('Oct-Dec');

  const dest = useMemo(() => allDestinations.find(d => d.id === selectedDestId) || allDestinations[0], [selectedDestId]);
  
  const stay = useMemo(() => dest.stays.find(s => s.tier === tier) || dest.stays[0], [dest, tier]);

  // Baseline budget rules from prompt
  // Tier 1: 22-27k ops + 3k gift
  // Tier 2: 26-28k ops + 4k gift
  // Tier 3: 28-30k ops + 5k gift
  const giftBuffer = tier === 1 ? 3000 : tier === 2 ? 4000 : 5000;
  
  // Calculate specific costs (6 nights, 7 days approximation)
  const [flightCostPP, setFlightCostPP] = useState(0);
  const [isFetchingFlight, setIsFetchingFlight] = useState(false);
  const [availableFlights, setAvailableFlights] = useState<Flight[]>([]);

  useEffect(() => {
    const fetchFlight = async () => {
      setIsFetchingFlight(true);
      const baseEstimate = dest.transport.flights?.averageFareEstimate || 0;
      try {
        const res = await fetch(`/api/flights?destination=${dest.id}&estimate=${baseEstimate}`);
        const data = await res.json();
        if (data.success) {
          setFlightCostPP(data.data.price);
          setAvailableFlights(data.data.flights || []);
        } else {
          setFlightCostPP(baseEstimate);
          setAvailableFlights([]);
        }
      } catch (_err) {
        setFlightCostPP(baseEstimate);
        setAvailableFlights([]);
      }
      setIsFetchingFlight(false);
    };
    fetchFlight();
  }, [dest]);

  const stayCostPP = Math.round((stay.pricePerNight * 6) / 2); // Assuming 2 per room
  const foodCostPP = dest.food.approxMealCostPerDay * 7;
  
  // Estimate local commute cost based on first option
  const commuteMatch = dest.commuteOptions[0]?.cost.match(/\d+/);
  const commuteCostTotal = commuteMatch ? parseInt(commuteMatch[0]) : 5000;
  const commuteCostPP = Math.round((commuteCostTotal * 7) / people); 
  
  const permitCostPP = dest.permits?.reduce((acc, curr) => acc + curr.costPerPerson, 0) || 0;

  const totalPP = stayCostPP + flightCostPP + foodCostPP + commuteCostPP + permitCostPP + giftBuffer;
  const groupTotal = totalPP * people;

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--warm-cloud)', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--forest-deep)' }}>Interactive Budget Calculator</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
            {/* Controls */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)' }}>Trip Settings</h3>
              
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
                Destination
                <select 
                  value={selectedDestId} 
                  onChange={(e) => setSelectedDestId(e.target.value)}
                  style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
                >
                  {allDestinations.map(d => <option key={d.id} value={d.id}>{d.name} ({d.state})</option>)}
                </select>
              </label>

              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
                Group Size: {people} People
                <input 
                  type="range" min="8" max="10" value={people} 
                  onChange={(e) => setPeople(parseInt(e.target.value))}
                  style={{ width: '100%', marginTop: '0.5rem' }}
                />
              </label>

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Budget Tier</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3].map(t => (
                    <button 
                      key={t} 
                      onClick={() => setTier(t as 1|2|3)}
                      className={`btn ${tier === t ? 'btn-primary' : 'btn-outline'}`}
                      style={{ flex: 1, padding: '0.5rem' }}
                    >
                      Tier {t}
                    </button>
                  ))}
                </div>
              </div>

              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
                Season
                <select 
                  value={season} 
                  onChange={(e) => setSeason(e.target.value)}
                  style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
                >
                  <option value="Jan-Mar">Jan - Mar</option>
                  <option value="Apr-Jun">Apr - Jun</option>
                  <option value="Jul-Sep">Jul - Sep</option>
                  <option value="Oct-Dec">Oct - Dec</option>
                </select>
              </label>
            </div>

            {/* Results */}
            <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)', paddingBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '2.5rem', color: 'var(--forest-deep)' }}>Total Estimate</h2>
                  <p className="mono-label">For {people} people • Tier {tier}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--sage-green)', lineHeight: 1 }}>₹{groupTotal.toLocaleString()}</div>
                  <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>₹{totalPP.toLocaleString()} / person</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--forest-deep)' }}>Per Person Breakdown</h4>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr><td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>✈️ Transport (HYD)</td><td style={{ textAlign: 'right' }}>{isFetchingFlight ? 'Fetching...' : `₹${flightCostPP.toLocaleString()}`}</td></tr>
                      <tr><td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>🏨 Accommodation</td><td style={{ textAlign: 'right' }}>₹{stayCostPP.toLocaleString()}</td></tr>
                      <tr><td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>🍽️ Food (7 Days)</td><td style={{ textAlign: 'right' }}>₹{foodCostPP.toLocaleString()}</td></tr>
                      <tr><td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>🚗 Local Commute</td><td style={{ textAlign: 'right' }}>₹{commuteCostPP.toLocaleString()}</td></tr>
                      <tr><td style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>🎫 Permits</td><td style={{ textAlign: 'right' }}>₹{permitCostPP.toLocaleString()}</td></tr>
                      <tr><td style={{ padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--sage-green)' }}>🎁 Gift Buffer (Required)</td><td style={{ textAlign: 'right', fontWeight: 'bold', color: 'var(--sage-green)' }}>₹{giftBuffer.toLocaleString()}</td></tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--forest-deep)' }}>Recommendations</h4>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--warm-cloud)', borderRadius: '4px', marginBottom: '1rem' }}>
                    <p style={{ fontWeight: 'bold' }}>Stay: {stay.propertyName}</p>
                    <a href={stay.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'blue', textDecoration: 'underline' }}>View Booking Link</a>
                  </div>
                  
                  {dest.permits && dest.permits.length > 0 && (
                    <div style={{ padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
                      <p style={{ fontWeight: 'bold' }}>Permits Required!</p>
                      <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                        {dest.permits.map((p, i) => <li key={i}>{p.type}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Flights Panel */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #eee' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--forest-deep)' }}>
                  ✈️ Available Flights (Departing from HYD in ~30 Days)
                </h3>
                
                {isFetchingFlight ? (
                  <p>Searching for live flights...</p>
                ) : availableFlights.length > 0 ? (
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {availableFlights.map(flight => (
                      <div key={flight.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'var(--warm-cloud)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={flight.logoUrl} alt={flight.airline} style={{ width: '40px', height: '40px', objectFit: 'contain', backgroundColor: 'white', borderRadius: '50%', padding: '4px' }} />
                          <div>
                            <p style={{ fontWeight: 'bold' }}>{flight.airline}</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{flight.departureTime} - {flight.arrivalTime} • {flight.duration} ({flight.stops === 0 ? 'Direct' : flight.stops + ' Stop'})</p>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--sage-green)' }}>₹{flight.price.toLocaleString()}</p>
                          <a href={flight.bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', marginTop: '0.5rem', display: 'inline-block' }}>
                            Book on Skyscanner
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ opacity: 0.7 }}>No live flights found for this route. Using baseline estimate.</p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
