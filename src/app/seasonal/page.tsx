'use client';
import { useState } from 'react';
import { allDestinations } from '@/data/destinations';
import Link from 'next/link';

export default function SeasonalCalendarPage() {
  const [selectedZone, setSelectedZone] = useState('All');

  const filteredDestinations = selectedZone === 'All' 
    ? allDestinations 
    : allDestinations.filter(d => d.zone.includes(selectedZone));

  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as const;

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--off-white)', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--forest-deep)' }}>Seasonal Calendar</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', opacity: 0.8, marginBottom: '3rem' }}>
            A 12-month visual guide to planning the perfect trip.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--sage-green)', borderRadius: '4px' }}></div>
              <span>Best Time</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--sunrise-amber)', borderRadius: '4px' }}></div>
              <span>Shoulder (Acceptable)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: '#d9534f', borderRadius: '4px' }}></div>
              <span>Avoid (Monsoon/Snow)</span>
            </div>
          </div>

          {/* Filter */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            {['All', 'Zone 1', 'Zone 2', 'Zone 3'].map(z => (
              <button 
                key={z} 
                onClick={() => setSelectedZone(z)}
                className={`btn ${selectedZone === z ? 'btn-primary' : 'btn-outline'}`}
                style={{ margin: '0 0.5rem' }}
              >
                {z}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', padding: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '2px solid var(--forest-deep)' }}>Destination</th>
                  {monthNames.map(m => (
                    <th key={m} style={{ padding: '1rem', borderBottom: '2px solid var(--forest-deep)', textTransform: 'capitalize' }}>{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredDestinations.map(d => (
                  <tr key={d.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>
                      <Link href={`/destinations/${d.id}`} style={{ fontWeight: 'bold', color: 'var(--forest-deep)' }}>
                        {d.name}
                      </Link>
                      <br />
                      <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{d.state}</span>
                    </td>
                    {monthNames.map(m => (
                      <td key={m} style={{ padding: '0.5rem', textAlign: 'center' }}>
                        <div style={{ 
                          width: '100%', 
                          height: '30px', 
                          backgroundColor: d.seasonalCalendar[m] === 'Green' ? 'var(--sage-green)' : d.seasonalCalendar[m] === 'Amber' ? 'var(--sunrise-amber)' : '#d9534f',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          {d.seasonalCalendar[m] === 'Green' ? '✓' : d.seasonalCalendar[m] === 'Amber' ? '~' : '✕'}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </main>
  );
}
