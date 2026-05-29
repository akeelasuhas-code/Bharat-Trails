'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { allDestinations } from '@/data/destinations';
import DynamicImage from '@/components/DynamicImage';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  const featured = allDestinations.slice(0, 3); // Grab top 3 for preview

  return (
    <main>
      {/* Hero Section */}
      <section 
        style={{ 
          height: '100vh', 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--forest-deep)'
        }}
      >
        <div 
          ref={heroRef}
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '120%',
            backgroundImage: 'url("https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
            zIndex: 1
          }}
        />
        <div ref={textRef} style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'var(--off-white)' }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1rem', letterSpacing: '2px' }}>Bharat Trails</h1>
          <p style={{ fontSize: '1.5rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
            India has altitude. Most people miss it.
          </p>
        </div>
      </section>

      {/* Zone Selector */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--off-white)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Explore the Zones</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link href="/destinations#zone-1">
              <div className="tilt-card" style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '8px', cursor: 'pointer' }}>
                <h3>Northeast India</h3>
                <p>Clouds & Tribes</p>
              </div>
            </Link>
            <Link href="/destinations#zone-2">
              <div className="tilt-card" style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '8px', cursor: 'pointer' }}>
                <h3>North India</h3>
                <p>Himalayan High</p>
              </div>
            </Link>
            <Link href="/destinations#zone-3">
              <div className="tilt-card" style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '8px', cursor: 'pointer' }}>
                <h3>South India</h3>
                <p>Misty Highlands</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--warm-cloud)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Featured Trails</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {featured.map(dest => (
              <div key={dest.id} className="tilt-card" style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                  <DynamicImage query={dest.name + " " + dest.state} alt={dest.name} style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <span className="badge badge-green" style={{ marginBottom: '1rem' }}>{dest.altitude}m</span>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{dest.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--sage-green)', marginBottom: '1rem' }}>{dest.keyFeature}</p>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', opacity: 0.8 }}>{dest.description.substring(0, 100)}...</p>
                  <Link href={`/destinations/${dest.id}`} className="btn btn-outline">Explore Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/destinations" className="btn btn-primary">View All Destinations</Link>
          </div>
        </div>
      </section>

      {/* Suhas&apos;s Picks Teaser */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--forest-deep)', color: 'var(--off-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--sage-green)' }}>Curator&apos;s Secret Picks</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.2rem', opacity: 0.9 }}>
            &quot;I&apos;ve traveled these mountains for years. These are the 6 places you must see right now, before they blow up on Instagram.&quot;
          </p>
          <Link href="/suhas-picks" className="btn" style={{ backgroundColor: 'var(--sunrise-amber)', color: 'var(--charcoal)' }}>
            Unlock Suhas&apos;s Picks
          </Link>
        </div>
      </section>

    </main>
  );
}
