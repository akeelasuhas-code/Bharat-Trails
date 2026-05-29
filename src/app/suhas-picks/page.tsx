export default function SuhasPicks() {
  const picks = [
    {
      title: 'Laitlum Canyons, Meghalaya',
      whyNow: 'The state is heavily promoting Cherrapunji and Dawki, leaving these grand canyons relatively untouched. The mist rolls in by 2 PM, turning the entire landscape into a scene from a fantasy novel.',
      stay: { name: 'Kynjai Homestay', link: 'Unverified — check local Shillong agents' },
      bestTime: 'October to December (post-monsoon green with clear skies)',
      hiddenSecret: 'Most tourists stay at the top. Hike down the 3,000 steps to Rasong village—it’s a different world down there.',
      note: 'I remember standing at the edge of the canyon and watching the clouds literally form beneath my feet. It’s the "Grand Canyon of the East," but without the crowds. Go before they build a glass bridge here.'
    },
    {
      title: 'Lambasingi, Andhra Pradesh',
      whyNow: 'It’s still largely seen as just a weekend drive for locals from Vizag. But waking up at 4 AM to see frost in South India is an experience that the wider backpacking community hasn’t fully co-opted yet.',
      stay: { name: 'APTDC Haritha Resort Lambasingi', link: 'https://tourism.ap.gov.in/hotels' },
      bestTime: 'December and January strictly for the fog/frost.',
      hiddenSecret: 'The pepper and coffee plantations on the outskirts. Don’t just stay in the town center; drive 5km out towards Chintapalle at dawn.',
      note: 'They call it the Kashmir of Andhra. The first time I went, I didn’t believe it could get that cold in AP. Bring a serious jacket, and drink the local pepper milk.'
    },
    {
      title: 'Jibhi, Himachal Pradesh',
      whyNow: 'Kasol and Manali are completely saturated. Jibhi is right on the edge of blowing up. It still has pristine pine forests and wooden cottages next to streams.',
      stay: { name: 'The Hidden Burrow', link: 'https://www.makemytrip.com/hotels/jibhi-hotels.html' },
      bestTime: 'March to May, and September to November.',
      hiddenSecret: 'Skip the main waterfall. Hike up to the Jalori Pass and walk the 5km trail to Serolsar Lake. It’s incredibly silent.',
      note: 'Jibhi is what Manali used to be 20 years ago. It’s the perfect place to do absolutely nothing. Grab a book, sit by the Tirthan river, and just exist.'
    },
    {
      title: 'Longwa Village, Mon, Nagaland',
      whyNow: 'It’s the frontier of India. The last of the tattooed Konyak headhunters are in their 80s and 90s. In a decade, this living history will be gone forever.',
      stay: { name: 'Longwa Homestay (Chief\'s House)', link: 'Unverified — requires local Mon guide' },
      bestTime: 'April during the Aoleang Festival.',
      hiddenSecret: 'The Angh (Chief) of the village has his house half in India and half in Myanmar. You can literally eat dinner in India and sleep in Myanmar.',
      note: 'Getting here is brutal. The roads from Dimapur will break your back. But sitting around a fire with a man whose facial tattoos tell stories of a time before borders—it changes how you see the world.'
    },
    {
      title: 'Vattakanal, Tamil Nadu',
      whyNow: 'Kodaikanal is for families and boat rides. Vattakanal is for the souls who want to disappear into the fog. It’s a tiny hamlet clinging to a cliff.',
      stay: { name: 'Altaf\'s Cafe Homestay', link: 'https://www.airbnb.co.in/s/Vattakanal/homes' },
      bestTime: 'September to February (The mist is thickest then).',
      hiddenSecret: 'The trail past Dolphin\'s Nose. Keep walking down towards Echo Rock. Most people stop at the first viewpoint.',
      note: 'Vatta is arguably my favorite place in the South. You wake up, eat Shakshuka at Altaf\'s, and then walk into a forest so dense with fog you can\'t see 10 feet ahead. Pure magic.'
    },
    {
      title: 'Aeyo Valley, Arunachal Pradesh',
      whyNow: 'It is the absolute frontier. Mass tourism hasn\'t even heard of it. The Dibang Valley hides glacier lakes and the Idu Mishmi tribe trails. It\'s expensive but it\'s raw untouched earth.',
      stay: { name: 'Fully Catered Expedition Tents', link: 'Unverified — contact local expedition agencies' },
      bestTime: 'April to May. You need a window between extreme cold and extreme rain.',
      hiddenSecret: 'The true secret is the silence. You won\'t see another trekking group for days. Also, watch out for the Mishmi Takin.',
      note: 'I added this because a true adventurer always looks for the edge of the map. Aeyo Valley is the edge. Bring a minus-10 sleeping bag and an iron will.'
    }
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--forest-deep)', minHeight: '100vh', color: 'var(--off-white)' }}>
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--sage-green)', fontFamily: 'var(--font-display)' }}>Suhas&apos;s Secret Picks</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            6 places you need to visit right now before the Instagram crowds take over.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {picks.map((pick, i) => (
              <div key={i} style={{ backgroundColor: 'white', color: 'var(--charcoal)', borderRadius: '8px', padding: '3rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1rem', left: '2rem', backgroundColor: 'var(--sunrise-amber)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold' }}>Pick #{i + 1}</div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--forest-deep)' }}>{pick.title}</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ color: 'var(--sage-green)', marginBottom: '0.5rem' }}>Why Now?</h4>
                    <p style={{ marginBottom: '1.5rem' }}>{pick.whyNow}</p>
                    
                    <h4 style={{ color: 'var(--sage-green)', marginBottom: '0.5rem' }}>The Hidden Secret</h4>
                    <p style={{ marginBottom: '1.5rem' }}>{pick.hiddenSecret}</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--warm-cloud)', padding: '2rem', borderRadius: '4px' }}>
                    <p style={{ marginBottom: '1rem' }}><strong>Best Time:</strong> {pick.bestTime}</p>
                    <p style={{ marginBottom: '1rem' }}><strong>Where to Stay:</strong> {pick.stay.name}</p>
                    <a href={pick.stay.link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', fontSize: '0.9rem' }}>Check Stay Details</a>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '2rem', borderLeft: '4px solid var(--sage-green)', backgroundColor: '#f9f9f9', fontStyle: 'italic' }}>
                  &quot;{pick.note}&quot; <br/><br/>
                  <span style={{ fontWeight: 'bold', fontStyle: 'normal', color: 'var(--forest-deep)' }}>— Suhas</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
