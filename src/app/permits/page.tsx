'use client';
import { useState } from 'react';
import { allDestinations } from '@/data/destinations';

export default function PermitsHub() {
  const permitDestinations = allDestinations.filter(d => d.permits && d.permits.length > 0);
  
  const [selectedDestId, setSelectedDestId] = useState(permitDestinations[0]?.id || '');
  
  const selectedDest = permitDestinations.find(d => d.id === selectedDestId);

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--off-white)', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--forest-deep)' }}>Permit Hub</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem' }}>
            Checklist and official application links for restricted areas.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
            {/* Sidebar List */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', padding: '1rem', borderBottom: '1px solid #eee' }}>Select Destination</h3>
              <ul style={{ listStyle: 'none' }}>
                {permitDestinations.map(d => (
                  <li key={d.id}>
                    <button 
                      onClick={() => setSelectedDestId(d.id)}
                      style={{ 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '1rem', 
                        border: 'none', 
                        backgroundColor: selectedDestId === d.id ? 'var(--warm-cloud)' : 'transparent',
                        cursor: 'pointer',
                        borderBottom: '1px solid #eee'
                      }}
                    >
                      {d.name} <span style={{ float: 'right', opacity: 0.5 }}>{d.state}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checklist Output */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '3rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              {selectedDest ? (
                <>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--sage-green)', paddingBottom: '1rem' }}>{selectedDest.name} Permits</h2>
                  
                  {selectedDest.permits!.map((p, i) => (
                    <div key={i} style={{ marginBottom: '2rem', padding: '2rem', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', borderRadius: '4px' }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.type}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <p><strong>Issued By:</strong> {p.issuedBy}</p>
                        <p><strong>Cost:</strong> ₹{p.costPerPerson}</p>
                        <p><strong>Time:</strong> {p.processingTime}</p>
                        <p><strong>On Arrival:</strong> {p.onArrivalPossible ? 'Yes' : 'No - Advance Only'}</p>
                      </div>
                      
                      <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '4px', marginBottom: '1rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Documents Required</h4>
                        <ul style={{ paddingLeft: '1.2rem' }}>
                          {p.documentsRequired.map((doc, idx) => <li key={idx}>{doc}</li>)}
                        </ul>
                      </div>
                      
                      {p.groupSpecialRules && (
                        <p style={{ marginBottom: '1rem', color: '#d9534f', fontWeight: 'bold' }}>Group Rules: {p.groupSpecialRules}</p>
                      )}

                      <a href={p.applicationPortalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Apply at Official Portal
                      </a>
                    </div>
                  ))}
                </>
              ) : (
                <p>Select a destination to view permit details.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
