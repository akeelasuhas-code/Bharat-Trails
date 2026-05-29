export default function Footer() {
  return (
    <footer style={{ padding: '4rem 2rem', backgroundColor: 'var(--forest-deep)', color: 'var(--off-white)', textAlign: 'center' }}>
      <div className="container">
        <h3 style={{ color: 'var(--sage-green)', marginBottom: '1rem' }}>Bharat Trails</h3>
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center', fontSize: '0.9rem', opacity: 0.6 }}>
          <p>
            *Built for real travellers planning real trips. Every piece of information on this site either has a verified source linked, or is explicitly flagged as unverified with a direct contact to verify it.*<br/><br/>
            — Suhas, Bharat Trails
          </p>
          <p style={{ marginTop: '1rem' }}>
            &copy; {new Date().getFullYear()} Bharat Trails. Licensed to akeelasuhas@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
