'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav-brand">
        Bharat Trails
      </Link>
      <div className="nav-links">
        <Link href="/destinations">Destinations</Link>
        <Link href="/plan">Plan a Trip</Link>
        <Link href="/budget">Budget Calculator</Link>
        <Link href="/permits">Permits Hub</Link>
        <Link href="/suhas-picks">Suhas&apos;s Picks</Link>
      </div>
    </nav>
  );
}
