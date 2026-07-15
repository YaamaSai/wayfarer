// Home screen — 7 sections: hero+search, value props, featured trips, destinations, how it works, testimonials, CTA. window.HomeScreen.
function HomeScreen({ onNav, onOpenTrip }) {
  const { Button, Tag, TripCard, Input, Select, Avatar, Rating } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const reviews = window.WF_REVIEWS;
  const [cat, setCat] = React.useState('All');
  const cats = [['All', 'Compass'], ['Adventure', 'Mountain'], ['Culture', 'Landmark'], ['Beaches', 'Waves'], ['Food', 'UtensilsCrossed'], ['Wildlife', 'Bird']];
  const shown = (cat === 'All' ? trips : trips.filter((t) => t.style.includes(cat))).slice(0, 6);
  const dests = [
    ['Japan', '12 trips', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=70&auto=format&fit=crop'],
    ['Chile', '8 trips', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70&auto=format&fit=crop'],
    ['Iceland', '6 trips', 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=70&auto=format&fit=crop'],
    ['Morocco', '9 trips', 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=70&auto=format&fit=crop'],
    ['Peru', '7 trips', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=70&auto=format&fit=crop'],
    ['Italy', '11 trips', 'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?w=600&q=70&auto=format&fit=crop'],
  ];

  const sectionHead = (eyebrow, title, action) => (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 24 }}>
      <div>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>{eyebrow}</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 0' }}>{title}</h2>
      </div>
      {action}
    </div>
  );

  return (
    <div>
      {/* 1 · Hero + search */}
      <section style={{ position: 'relative', minHeight: 520, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=75&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,53,42,0.78) 0%, rgba(6,53,42,0.45) 55%, rgba(6,53,42,0.2) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ maxWidth: 620, padding: '32px 0 56px' }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--marigold-300)' }}>40+ countries · Local guides</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 62, lineHeight: 1.04, letterSpacing: '-0.02em', fontWeight: 600, color: '#fff', margin: '14px 0 0' }}>Go further than<br />the map.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--stone-100)', margin: '18px 0 0', maxWidth: 520 }}>Handcrafted small-group adventures, led by people who call these places home.</p>
          </div>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', padding: 14, display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr auto', gap: 12, alignItems: 'end', width: '100%' }}>
            <Input label="Where to?" iconLeft={<Icon name="MapPin" size={18} />} placeholder="Search destinations" />
            <Select label="When" iconLeft={<Icon name="Calendar" size={18} />} options={['Anytime', 'This summer', 'Autumn 2026', 'Winter 2026']} />
            <Select label="Travelers" iconLeft={<Icon name="Users" size={18} />} options={['2 adults', '2 adults · 1 child', 'Family (2+2)', 'Solo']} />
            <Button variant="accent" size="lg" onClick={() => onNav('services')} iconLeft={<Icon name="Search" size={18} color="var(--pine-900)" />}>Search</Button>
          </div>
        </div>
      </section>

      {/* 2 · Trust / value props */}
      <section style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '28px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[['Award', '4.9 / 5', 'from 9,400+ travelers'], ['Users', '12 max', 'small-group sizes'], ['MapPinned', '40+', 'countries, all guided'], ['ShieldCheck', 'Free', 'cancellation · 30 days']].map(([ic, big, sub], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={22} color="var(--color-primary)" /></div>
              <div><div style={{ fontWeight: 700, fontSize: 18, color: 'var(--text-strong)' }}>{big}</div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{sub}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · Featured trips */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 16px' }}>
        {sectionHead('Featured journeys', 'Trips travelers love right now',
          <button onClick={() => onNav('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-link)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>View all <Icon name="ArrowRight" size={16} color="var(--color-primary)" /></button>
        )}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
          {cats.map(([c, ic]) => <Tag key={c} selected={cat === c} onClick={() => setCat(c)} iconLeft={<Icon name={ic} size={16} color={cat === c ? '#fff' : 'var(--text-muted)'} />}>{c}</Tag>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {shown.map((t) => (
            <TripCard key={t.id} image={t.image} title={t.title} location={t.location} badge={t.badge} badgeTone={t.badgeTone} rating={t.rating} reviews={t.reviews} duration={t.duration} price={t.price} onClick={() => onOpenTrip(t.id)} />
          ))}
        </div>
      </section>

      {/* 4 · Popular destinations */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 16px' }}>
        {sectionHead('Where to next', 'Popular destinations')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
          {dests.map(([name, n, img], i) => (
            <button key={i} onClick={() => onNav('services')} style={{ position: 'relative', border: 'none', padding: 0, cursor: 'pointer', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '3 / 4' }}>
              <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
              <span style={{ position: 'absolute', left: 12, bottom: 10, textAlign: 'start' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: '#fff' }}>{name}</span>
                <span style={{ display: 'block', fontSize: 12, color: 'var(--stone-200)' }}>{n}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 5 · How it works */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 16px' }}>
        {sectionHead('Simple by design', 'How Wayfarer works')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            ['Search', '01', 'Find your trip', 'Browse by destination, style, or season. Every itinerary is small-group and guide-led.', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=72&auto=format&fit=crop'],
            ['CalendarCheck', '02', 'Book in minutes', 'Pick a departure, add travelers, and reserve with no payment due today.', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&q=72&auto=format&fit=crop'],
            ['Plane', '03', 'Go further', 'Meet your local guide and a handful of fellow travelers — the rest is taken care of.', 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=72&auto=format&fit=crop'],
            ['Heart', '04', 'Come home changed', 'Return with new stories, new friends, and a fresh perspective — then start dreaming of the next one.', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=72&auto=format&fit=crop'],
          ].map(([ic, n, h, p, img], i) => (
            <div key={i} style={{ position: 'relative', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                <img src={img} alt={h} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,53,42,0.55), rgba(6,53,42,0) 55%)' }} />
                <span className="u-mono" style={{ position: 'absolute', top: 14, left: 16, fontSize: 15, fontWeight: 700, color: '#fff', background: 'rgba(6,53,42,0.55)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>Step {n}</span>
              </div>
              <div style={{ position: 'relative', padding: '36px 24px 26px', flex: 1 }}>
                <div style={{ position: 'absolute', left: 24, top: -28, width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', border: '3px solid var(--surface-card)' }}>
                  <Icon name={ic} size={26} color="var(--pine-900)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px' }}>{h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 · Testimonials */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 16px' }}>
        {sectionHead('Traveler stories', 'Loved by people who go further')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-xs)', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Rating value={r.rating} size="sm" showValue={false} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-strong)', margin: 0 }}>“{r.text}”</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                <Avatar src={r.photo} name={r.name} size="md" />
                <div><div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{r.name}</div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.date}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7 · CTA band */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 72px' }}>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', padding: '64px 48px', textAlign: 'center' }}>
          <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=72&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,53,42,0.78), rgba(6,53,42,0.9))' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px' }}>Your next adventure is waiting.</h2>
            <p style={{ fontSize: 18, color: 'var(--stone-100)', margin: '0 0 28px', maxWidth: 520, marginInline: 'auto' }}>Join 9,400+ travelers who've gone further with a local guide by their side.</p>
            <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button variant="accent" size="lg" onClick={() => onNav('services')}>Browse all trips</Button>
              <Button variant="inverse" size="lg" onClick={() => onNav('about')}>Why Wayfarer</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;


// Home v2 — editorial / magazine style, deliberately different from HomeScreen.
// 7 sections: split hero, promise strip, editor's pick spotlight, region index,
// journal stories, guide spotlight, newsletter. window.HomeTwoScreen.
function HomeTwoScreen({ onNav, onOpenTrip }) {
  const { Button, Badge, Rating, Avatar } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const pick = trips.find((t) => t.id === 'peru') || trips[0];

  const regionData = [
    { name: 'Asia', count: 4, blurb: 'Temple towns, street food, and mountain trails.', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=72&auto=format&fit=crop' },
    { name: 'Europe', count: 3, blurb: 'Fjords, coastlines, and old-world cities.', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&q=72&auto=format&fit=crop' },
    { name: 'Americas', count: 2, blurb: 'Andes peaks, patagonian wild, and ancient paths.', img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1000&q=72&auto=format&fit=crop' },
    { name: 'Africa', count: 2, blurb: 'Migration plains, deserts, and souks.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=72&auto=format&fit=crop' },
    { name: 'Oceania', count: 1, blurb: 'Glaciers, fjords, and Middle-earth roads.', img: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1000&q=72&auto=format&fit=crop' },
  ];
  const [activeRegion, setActiveRegion] = React.useState(0);

  const journal = [
    { cat: 'Field notes', title: 'Why we cap every trip at twelve travelers', excerpt: 'The math of a great group trip is smaller than you think — here\u2019s what changes when the group shrinks.', read: '5 min', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=72&auto=format&fit=crop' },
    { cat: 'Destinations', title: 'A first-timer\u2019s guide to the Inca Trail', excerpt: 'Altitude, packing, and the dawn moment at the Sun Gate that makes every step worth it.', read: '8 min', img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=700&q=72&auto=format&fit=crop' },
    { cat: 'Guides', title: 'Meet the people who lead the way', excerpt: 'From Kyoto to Patagonia, our guides share what travelers always get wrong — and right.', read: '6 min', img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=72&auto=format&fit=crop' },
    { cat: 'Packing', title: 'What our guides always bring — and never do', excerpt: 'The small-group essentials that make the difference between a good trip and a great one.', read: '4 min', img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&q=72&auto=format&fit=crop' },
  ];

  const region = regionData[activeRegion];

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      {/* 1 · Editorial split hero */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 56px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>Wayfarer · est. 2014</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 0.98, letterSpacing: '-0.03em', fontWeight: 600, color: 'var(--text-strong)', margin: '18px 0 0' }}>The world,<br /><em style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>well&#8209;guided.</em></h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--text-body)', margin: '24px 0 0', maxWidth: 460 }}>We design small-group journeys with the people who know each place best — then hand you the keys to a deeper kind of travel.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNav('services')}>Explore journeys</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('about')} iconRight={<Icon name="ArrowRight" size={18} color="var(--color-primary)" />}>Our story</Button>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 44, paddingTop: 28, borderTop: '1px solid var(--border-subtle)' }}>
            {[['40+', 'countries'], ['9.4k', 'travelers'], ['4.9★', 'avg. rating']].map(([n, l], i) => (
              <div key={i}>
                <div className="u-mono" style={{ fontSize: 30, fontWeight: 600, color: 'var(--text-strong)' }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', height: 540 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '74%', height: 360, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=74&auto=format&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '56%', height: 280, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '5px solid var(--surface-canvas)' }}>
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=74&auto=format&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', top: 28, left: 8, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-md)', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="Compass" size={22} color="var(--pine-900)" /></div>
            <div><div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>Local guides</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>in every destination</div></div>
          </div>
        </div>
      </section>

      {/* 2 · Promise strip */}
      <section style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {[['Rooted in place', 'Guides born and raised where they lead — not flown in for the season.'], ['Small by principle', 'Twelve travelers, maximum. Always. It changes everything about a trip.'], ['Care, end to end', 'Free cancellation, fair local pay, and 24/7 support while you travel.']].map(([h, p], i) => (
            <div key={i} style={{ display: 'flex', gap: 18 }}>
              <span className="u-mono" style={{ fontSize: 20, fontWeight: 700, color: 'var(--clay-400)' }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 6px' }}>{h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · Editor's pick spotlight */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>Editor's pick</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 0' }}>This month, we're dreaming of Peru</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 0, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ position: 'relative', minHeight: 440 }}>
            <img src={pick.image} alt={pick.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 18, left: 18 }}><Badge tone="marigold" variant="solid">{pick.badge || 'Featured'}</Badge></div>
          </div>
          <div style={{ background: 'var(--surface-card)', padding: '40px 38px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 15, marginBottom: 10 }}><Icon name="MapPin" size={18} color="var(--clay-400)" />{pick.location}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, lineHeight: 1.1, color: 'var(--text-strong)', margin: '0 0 12px' }}>{pick.title}</h3>
            <Rating value={pick.rating} reviews={pick.reviews} />
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '16px 0 22px' }}>{pick.summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 26 }}>
              {[['Clock', pick.duration], ['Users', pick.group], ['Activity', pick.level]].map(([ic, v], i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--surface-sunk)', borderRadius: 'var(--radius-pill)', padding: '8px 14px', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}><Icon name={ic} size={15} color="var(--color-primary)" />{v}</span>
              ))}
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>from</span>
                <span className="u-mono" style={{ fontSize: 28, fontWeight: 600, color: 'var(--text-strong)' }}>${pick.price}</span>
                <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>/ person</span>
              </div>
              <Button variant="accent" size="lg" onClick={() => onOpenTrip(pick.id)}>View this trip</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Region index (interactive) */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 16px' }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>Where we go</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 28px' }}>Explore by region</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {regionData.map((r, i) => {
              const on = i === activeRegion;
              return (
                <button key={r.name} onMouseEnter={() => setActiveRegion(i)} onClick={() => onNav('services')}
                  style={{ display: 'flex', alignItems: 'center', gap: 18, textAlign: 'start', background: 'none', border: 'none', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)', padding: '22px 8px', cursor: 'pointer' }}>
                  <span className="u-mono" style={{ fontSize: 14, fontWeight: 700, color: on ? 'var(--clay-400)' : 'var(--text-muted)', width: 28 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: on ? 'var(--color-primary)' : 'var(--text-strong)', transition: 'color var(--dur-fast)' }}>{r.name}</div>
                    {on && <div style={{ fontSize: 14, color: 'var(--text-body)', marginTop: 2 }}>{r.blurb}</div>}
                  </div>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{r.count} trips</span>
                  <Icon name="ArrowUpRight" size={20} color={on ? 'var(--color-primary)' : 'var(--text-muted)'} />
                </button>
              );
            })}
          </div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: 420, boxShadow: 'var(--shadow-md)' }}>
            {regionData.map((r, i) => (
              <img key={r.name} src={r.img} alt={r.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: i === activeRegion ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-out)' }} />
            ))}
            <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
            <div style={{ position: 'absolute', left: 24, bottom: 22 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: '#fff' }}>{region.name}</div>
              <div style={{ fontSize: 14, color: 'var(--stone-100)' }}>{region.count} guided journeys</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Journal / stories */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>The journal</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 0' }}>Stories from the road</h2>
          </div>
          <button onClick={() => onNav('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-link)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>All stories <Icon name="ArrowRight" size={16} color="var(--color-primary)" /></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {journal.map((j, i) => (
            <article key={i} className={i === journal.length - 1 ? 'journal-card-extra' : ''} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xs)', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => onNav('about')}>
              <div style={{ aspectRatio: '3 / 2', overflow: 'hidden' }}><img src={j.img} alt={j.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Badge tone="pine">{j.cat}</Badge>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{j.read} read</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 600, lineHeight: 1.25, color: 'var(--text-strong)', margin: '0 0 8px' }}>{j.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{j.excerpt}</p>
                <span style={{ marginTop: 16, color: 'var(--text-link)', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Read story <Icon name="ArrowRight" size={15} color="var(--color-primary)" /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6 · Guide spotlight */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 16px' }}>
        <div style={{ background: 'var(--color-primary-soft)', borderRadius: 'var(--radius-xl)', padding: '44px 48px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 36, alignItems: 'center' }}>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&q=72&auto=format&fit=crop" alt="Mara Okafor" style={{ width: 180, height: 220, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
          <div>
            <Icon name="Quote" size={40} color="var(--color-primary)" />
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1.5, fontWeight: 500, color: 'var(--text-strong)', margin: '8px 0 18px' }}>A place tells you its story slowly. My job is to give you the time, and the company, to actually hear it.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>Mara Okafor</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Founder & lead guide · 9 years with Wayfarer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · Newsletter / CTA */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px 80px' }}>
        <div style={{ background: 'var(--surface-inverse)', borderRadius: 'var(--radius-xl)', padding: '56px 48px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--stone-50)', margin: '0 0 12px' }}>Travel notes, once a month.</h2>
          <p style={{ fontSize: 17, color: 'var(--stone-200)', margin: '0 auto 28px', maxWidth: 480 }}>New journeys, guide interviews, and the occasional well-timed deal. No noise.</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto' }}>
            <input placeholder="you@email.com" style={{ flex: 1, border: 'none', borderRadius: 'var(--radius-md)', padding: '14px 16px', fontSize: 16, fontFamily: 'var(--font-sans)', outline: 'none', background: 'var(--surface-card)', color: 'var(--text-strong)' }} />
            <Button variant="accent" size="lg" type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
window.HomeTwoScreen = HomeTwoScreen;


// Services — 6 sections: hero, trip styles, listing (filters+grid+skeleton), why book, FAQ, CTA. window.ServicesScreen.
function ServicesScreen({ onOpenTrip, onNav }) {
  const { TripCard, Tag, Checkbox, Select, Button } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const loading = window.useFakeLoad(800);
  const [region, setRegion] = React.useState('All');
  const [styles, setStyles] = React.useState({});
  const [difficulty, setDifficulty] = React.useState({});
  const [duration, setDuration] = React.useState({});
  const [price, setPrice] = React.useState({});
  const [extras, setExtras] = React.useState({});
  const [faq, setFaq] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const perPage = 6;
  const regions = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];
  const allStyles = ['Adventure', 'Culture', 'Food', 'Beaches', 'Wildlife'];
  const durationBuckets = [['Up to 5 days', (d) => d <= 5], ['6–8 days', (d) => d >= 6 && d <= 8], ['9+ days', (d) => d >= 9]];
  const priceBuckets = [['Under $1,500', (p) => p < 1500], ['$1,500–$2,500', (p) => p >= 1500 && p <= 2500], ['$2,500+', (p) => p > 2500]];
  const clearAll = () => { setStyles({}); setDifficulty({}); setDuration({}); setPrice({}); setExtras({}); };
  const activeCount = [styles, difficulty, duration, price, extras].reduce((n, o) => n + Object.values(o).filter(Boolean).length, 0);

  const activeStyles = Object.keys(styles).filter((k) => styles[k]);
  const parseDays = (s) => parseInt(String(s), 10) || 0;
  let shown = trips.filter((t) => region === 'All' || t.region === region);
  if (activeStyles.length) shown = shown.filter((t) => activeStyles.some((s) => t.style.includes(s)));
  const activeDiff = Object.keys(difficulty).filter((k) => difficulty[k]);
  if (activeDiff.length) shown = shown.filter((t) => activeDiff.includes(t.level));
  const activeDur = durationBuckets.filter(([l]) => duration[l]);
  if (activeDur.length) shown = shown.filter((t) => activeDur.some(([, fn]) => fn(parseDays(t.duration))));
  const activePrice = priceBuckets.filter(([l]) => price[l]);
  if (activePrice.length) shown = shown.filter((t) => activePrice.some(([, fn]) => fn(t.price)));
  if (extras['Free cancellation']) { /* all trips qualify in this demo */ }
  if (extras['Small group (≤10)']) shown = shown.filter((t) => parseInt(t.group.replace(/\D/g, ''), 10) <= 10);

  const totalPages = Math.max(1, Math.ceil(shown.length / perPage));
  const curPage = Math.min(page, totalPages);
  const paged = shown.slice((curPage - 1) * perPage, curPage * perPage);
  // reset to page 1 whenever filters change
  React.useEffect(() => { setPage(1); }, [region, JSON.stringify(styles), JSON.stringify(difficulty), JSON.stringify(duration), JSON.stringify(price), JSON.stringify(extras)]);

  const tripStyles = [
    ['Mountain', 'Adventure', 'Treks, climbs & wild trails'],
    ['Landmark', 'Culture', 'History, art & local life'],
    ['UtensilsCrossed', 'Food & wine', 'Markets, cooking & tastings'],
    ['Waves', 'Coast & islands', 'Beaches, sailing & sun'],
    ['Bird', 'Wildlife', 'Safari & nature up close'],
    ['Users', 'Family', 'Trips that work for all ages'],
  ];
  const faqs = [
    ['How big are the groups?', 'Every Wayfarer trip is capped between 10 and 14 travelers, so you move easily and get real time with your guide.'],
    ['What\u2019s included in the price?', 'Accommodation, your local guide, listed activities, and most breakfasts. Flights and travel insurance are extra.'],
    ['Can I cancel?', 'Yes — free cancellation up to 30 days before departure, and no payment is due when you reserve.'],
    ['Are the trips suitable for solo travelers?', 'Absolutely. Around half of our travelers come solo; the small-group format makes it easy to connect.'],
  ];

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      {/* 1 · hero */}
      <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '34px 24px 24px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>Our services</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 16px' }}>Guided trips &amp; experiences</h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {regions.map((r) => <Tag key={r} selected={region === r} onClick={() => setRegion(r)}>{r}</Tag>)}
          </div>
        </div>
      </div>

      {/* 2 · trip styles */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px 8px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 18px' }}>Browse by trip style</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {tripStyles.map(([ic, h, p], i) => (
            <button key={i} onClick={() => onNav && onNav('services')} style={{ display: 'flex', alignItems: 'center', gap: 14, textAlign: 'start', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, cursor: 'pointer', boxShadow: 'var(--shadow-xs)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={22} color="var(--color-primary)" /></div>
              <div><div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>{h}</div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{p}</div></div>
            </button>
          ))}
        </div>
      </section>

      {/* 3 · listing */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '264px 1fr', gap: 32, alignItems: 'stretch' }}>
        <aside style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
            <Icon name="SlidersHorizontal" size={18} color="var(--color-primary)" />
            <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>Filters</span>
            {activeCount > 0 && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: 'var(--text-on-primary)', background: 'var(--color-primary)', borderRadius: 'var(--radius-pill)', minWidth: 20, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 6px' }}>{activeCount}</span>}
            {activeCount > 0 && <button onClick={clearAll} style={{ marginInlineStart: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-link)', fontWeight: 600, fontSize: 13 }}>Clear all</button>}
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            {(() => {
              const Group = ({ title, items, state, setState, opts }) => (
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>{title}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {(opts || items).map((s) => {
                      const label = Array.isArray(s) ? s[0] : s;
                      return <Checkbox key={label} label={label} checked={!!state[label]} onChange={(e) => setState({ ...state, [label]: e.target.checked })} />;
                    })}
                  </div>
                </div>
              );
              return (
                <React.Fragment>
                  <Group title="Trip style" items={allStyles} state={styles} setState={setStyles} />
                  <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
                  <Group title="Difficulty" items={['Easy', 'Moderate', 'Challenging']} state={difficulty} setState={setDifficulty} />
                  <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
                  <Group title="Trip length" opts={durationBuckets} state={duration} setState={setDuration} />
                  <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
                  <Group title="Price per person" opts={priceBuckets} state={price} setState={setPrice} />
                  <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
                  <Group title="Extras" items={['Free cancellation', 'Small group (\u226410)']} state={extras} setState={setExtras} />
                </React.Fragment>
              );
            })()}
          </div>
        </aside>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <span style={{ color: 'var(--text-body)', fontSize: 15 }}>{loading ? 'Finding trips…' : <span><strong style={{ color: 'var(--text-strong)' }}>{shown.length}</strong> trips found</span>}</span>
            <div style={{ width: 220 }}><Select options={['Sort: Recommended', 'Price: Low to high', 'Price: High to low', 'Rating']} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 22 }}>
            {loading
              ? [0, 1, 2, 3, 4, 5].map((i) => <window.TripCardSkeleton key={i} />)
              : paged.map((t) => (
                <TripCard key={t.id} image={t.image} title={t.title} location={t.location} badge={t.badge} badgeTone={t.badgeTone} rating={t.rating} reviews={t.reviews} duration={t.duration} price={t.price} onClick={() => onOpenTrip(t.id)} />
              ))}
          </div>

          {/* pagination */}
          {!loading && totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 36 }}>
              <button onClick={() => setPage(Math.max(1, curPage - 1))} disabled={curPage === 1} aria-label="Previous page" style={{ minWidth: 44, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: curPage === 1 ? 'var(--text-muted)' : 'var(--text-strong)', cursor: curPage === 1 ? 'not-allowed' : 'pointer', opacity: curPage === 1 ? 0.5 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', fontWeight: 600, fontSize: 14, gap: 4 }}>
                <Icon name="ChevronLeft" size={16} color="currentColor" />Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1; const on = n === curPage;
                return (
                  <button key={n} onClick={() => setPage(n)} aria-current={on ? 'page' : undefined} style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', border: on ? '1.5px solid var(--color-primary)' : '1px solid var(--border-default)', background: on ? 'var(--color-primary)' : 'var(--surface-card)', color: on ? 'var(--text-on-primary)' : 'var(--text-strong)', cursor: 'pointer', fontWeight: 700, fontSize: 15, fontFamily: 'var(--font-mono)' }}>{n}</button>
                );
              })}
              <button onClick={() => setPage(Math.min(totalPages, curPage + 1))} disabled={curPage === totalPages} aria-label="Next page" style={{ minWidth: 44, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: curPage === totalPages ? 'var(--text-muted)' : 'var(--text-strong)', cursor: curPage === totalPages ? 'not-allowed' : 'pointer', opacity: curPage === totalPages ? 0.5 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', fontWeight: 600, fontSize: 14, gap: 4 }}>
                Next<Icon name="ChevronRight" size={16} color="currentColor" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4 · why book */}
      <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 24px', textAlign: 'center' }}>Why book with Wayfarer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[['Compass', 'Local guides', 'Led by people who live there.'], ['BadgeCheck', 'Handpicked stays', 'Characterful, locally owned.'], ['Wallet', 'No hidden fees', 'Clear pricing, reserve free.'], ['Headphones', '24/7 support', 'Real humans, on every trip.']].map(([ic, h, p], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name={ic} size={24} color="var(--color-primary)" /></div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 6px' }}>{h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · FAQ */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px 16px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 24px', textAlign: 'center' }}>Frequently asked questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'start', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>
                {q}<Icon name={faq === i ? 'Minus' : 'Plus'} size={18} color="var(--color-primary)" />
              </button>
              {faq === i && <p style={{ padding: '0 20px 18px', margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 6 · CTA */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 72px' }}>
        <div style={{ background: 'var(--surface-inverse)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 600, color: 'var(--stone-50)', margin: '0 0 14px' }}>Not sure which trip is right?</h2>
          <p style={{ fontSize: 17, color: 'var(--stone-200)', margin: '0 0 26px' }}>Tell us how you like to travel and we'll match you with a journey.</p>
          <Button variant="accent" size="lg" onClick={() => onNav('contact')}>Talk to a trip expert</Button>
        </div>
      </section>
    </div>
  );
}
window.ServicesScreen = ServicesScreen;


// Gallery — 5 sections: intro+filter, masonry grid, stats band, share/Instagram, CTA (+ lightbox). window.GalleryScreen.
function GalleryScreen({ onNav }) {
  const { Tag, Button } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const photos = [
    { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=70&auto=format&fit=crop', cat: 'Asia', cap: 'Kyoto, Japan' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=70&auto=format&fit=crop', cat: 'Americas', cap: 'Torres del Paine, Chile' },
    { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=70&auto=format&fit=crop', cat: 'Europe', cap: 'Reykjavík, Iceland' },
    { src: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=70&auto=format&fit=crop', cat: 'Africa', cap: 'Marrakech, Morocco' },
    { src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=70&auto=format&fit=crop', cat: 'Americas', cap: 'Machu Picchu, Peru' },
    { src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=70&auto=format&fit=crop', cat: 'Asia', cap: 'Arashiyama bamboo' },
    { src: 'https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=800&q=70&auto=format&fit=crop', cat: 'Americas', cap: 'Patagonian peaks' },
    { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=70&auto=format&fit=crop', cat: 'Europe', cap: 'Coastal road' },
    { src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=70&auto=format&fit=crop', cat: 'Asia', cap: 'Lantern street' },
  ];
  const cats = ['All', 'Asia', 'Europe', 'Americas', 'Africa'];
  const [cat, setCat] = React.useState('All');
  const [active, setActive] = React.useState(null);
  const shown = cat === 'All' ? photos : photos.filter((p) => p.cat === cat);
  const insta = photos.slice(0, 6);

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      {/* 1 · intro + filter */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px 0', textAlign: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>From the road</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 10px' }}>Gallery</h1>
        <p style={{ fontSize: 17, color: 'var(--text-body)', maxWidth: 540, margin: '0 auto 22px', lineHeight: 1.6 }}>Real moments from real Wayfarer journeys — captured by our guides and travelers along the way.</p>
        <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
          {cats.map((c) => <Tag key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</Tag>)}
        </div>
      </div>

      {/* 2 · masonry grid */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px 56px' }}>
        <div style={{ columnGap: 16, columnWidth: 280 }}>
          {shown.map((p, i) => (
            <button key={i} onClick={() => setActive(p)} style={{ display: 'block', width: '100%', border: 'none', padding: 0, marginBottom: 16, cursor: 'pointer', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--surface-sunk)', breakInside: 'avoid', position: 'relative' }}>
              <img src={p.src} alt={p.cap} loading="lazy" style={{ width: '100%', display: 'block', aspectRatio: (i % 3 === 0 ? '3 / 4' : '4 / 3'), objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      </section>

      {/* 3 · stats band */}
      <section style={{ background: 'var(--surface-inverse)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
          {[['250k+', 'Photos shared'], ['40+', 'Countries captured'], ['9,400', 'Travelers'], ['4.9', 'Avg. trip rating']].map(([n, l], i) => (
            <div key={i}>
              <div className="u-mono" style={{ fontSize: 40, fontWeight: 600, color: 'var(--marigold-300)' }}>{n}</div>
              <div style={{ fontSize: 14, color: 'var(--stone-200)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · share / Instagram */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>Tag us</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'var(--text-strong)', margin: '6px 0 0' }}>#GoFurther on Instagram</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {insta.map((p, i) => (
            <a key={i} href="#" onClick={(e) => { e.preventDefault(); setActive(p); }} style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '1', display: 'block' }}>
              <img src={p.src} alt={p.cap} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,21,18,0.3)', opacity: 0, transition: 'opacity var(--dur-base)' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0}><Icon name="Instagram" size={22} color="#fff" /></span>
            </a>
          ))}
        </div>
      </section>

      {/* 5 · CTA */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 72px' }}>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '44px 40px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 12px' }}>Make memories of your own</h2>
          <p style={{ fontSize: 16, color: 'var(--text-body)', margin: '0 0 24px' }}>Find a trip and start filling your own gallery.</p>
          <Button variant="accent" size="lg" onClick={() => onNav('services')}>Browse trips</Button>
        </div>
      </section>

      {active && (
        <div onClick={() => setActive(null)} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(6,21,18,0.86)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <button onClick={() => setActive(null)} aria-label="Close" style={{ position: 'absolute', top: 22, right: 22, width: 48, height: 48, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.14)', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="X" size={24} color="#fff" /></button>
          <figure style={{ margin: 0, maxWidth: 900 }} onClick={(e) => e.stopPropagation()}>
            <img src={active.src.replace('w=800', 'w=1400')} alt={active.cap} style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 'var(--radius-md)' }} />
            <figcaption style={{ color: 'var(--stone-100)', textAlign: 'center', marginTop: 14, fontFamily: 'var(--font-display)', fontSize: 18 }}>{active.cap}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
window.GalleryScreen = GalleryScreen;


// Trip detail: gallery, tabs (Overview/Itinerary/Reviews), sticky booking card. window.TripScreen.
function TripScreen({ tripId, onBook, onNav, onOpenTrip }) {
  const { Button, Badge, Rating, Tabs, Avatar, TripCard } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const t = window.WF_TRIPS.find((x) => x.id === tripId) || window.WF_TRIPS[0];
  const reviews = window.WF_REVIEWS;
  const [tab, setTab] = React.useState('Overview');
  const gallery = [t.image, ...(t.gallery || [])].slice(0, 3);

  const facts = [['Clock', t.duration], ['Users', t.group], ['Activity', t.level], ['MapPin', t.region]];
  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => { setSlide(0); }, [tripId]);
  React.useEffect(() => {
    if (!isNarrow || gallery.length < 2) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % gallery.length), 3500);
    return () => clearInterval(id);
  }, [isNarrow, gallery.length]);

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 28px 0', fontSize: 14, color: 'var(--text-muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => onNav('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 14, padding: 0 }}>Trips</button>
        <Icon name="ChevronRight" size={14} color="var(--stone-400)" />
        <span style={{ color: 'var(--text-body)' }}>{t.location}</span>
      </div>

      {/* Gallery */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '16px 28px 0' }}>
        {isNarrow ? (
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: 280 }}>
            <div style={{ display: 'flex', height: '100%', transform: `translateX(-${slide * 100}%)`, transition: 'transform var(--dur-slow) var(--ease-out)' }}>
              {gallery.map((src, i) => (
                <img key={i} src={src} alt={i === 0 ? t.title : ''} style={{ flex: '0 0 100%', width: '100%', height: '100%', objectFit: 'cover' }} />
              ))}
            </div>
            {gallery.length > 1 && (
              <React.Fragment>
                <button onClick={() => setSlide((s) => (s - 1 + gallery.length) % gallery.length)} aria-label="Previous photo" style={{ position: 'absolute', insetInlineStart: 12, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.9)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}><Icon name="ChevronLeft" size={22} color="var(--ink)" /></button>
                <button onClick={() => setSlide((s) => (s + 1) % gallery.length)} aria-label="Next photo" style={{ position: 'absolute', insetInlineEnd: 12, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.9)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}><Icon name="ChevronRight" size={22} color="var(--ink)" /></button>
                <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 7 }}>
                  {gallery.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)} aria-label={`Photo ${i + 1}`} style={{ width: i === slide ? 22 : 8, height: 8, borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer', background: i === slide ? '#fff' : 'rgba(255,255,255,0.55)', transition: 'width var(--dur-base) var(--ease-out)' }} />
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: gallery.length > 1 ? '2fr 1fr' : '1fr', gridTemplateRows: '1fr 1fr', gap: 10, height: 420, borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <img src={gallery[0]} alt={t.title} style={{ width: '100%', height: '100%', objectFit: 'cover', gridRow: '1 / 3' }} />
            {gallery[1] && <img src={gallery[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            {gallery[2] && <img src={gallery[2]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>
        )}
      </section>

      {/* Title + body grid */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '28px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            {t.badge && <Badge tone={t.badgeTone} variant="solid">{t.badge}</Badge>}
            {t.style.map((s) => <Badge key={s} tone="neutral">{s}</Badge>)}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 12px' }}>{t.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-body)', fontSize: 16 }}><Icon name="MapPin" size={18} color="var(--clay-400)" />{t.location}</span>
            <Rating value={t.rating} reviews={t.reviews} />
          </div>

          {/* fact strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, padding: '20px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', marginBottom: 28 }}>
            {facts.map(([ic, val], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={18} color="var(--color-primary)" /></div>
                <span style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 15 }}>{val}</span>
              </div>
            ))}
          </div>

          <Tabs tabs={['Overview', 'Itinerary', 'Reviews']} value={tab} onChange={setTab} style={{ marginBottom: 24 }} />

          {tab === 'Overview' && (
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 20px' }}>{t.summary}</p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>Your local guide handles the logistics, the introductions, and the little-known detours \u2014 so all you have to do is be present. Group sizes are intentionally small, accommodations are characterful and locally owned, and there's always room in the schedule to wander.</p>
            </div>
          )}

          {tab === 'Itinerary' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {t.itinerary.map(([h, p], i) => (
                <div key={i} style={{ display: 'flex', gap: 18 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{i + 1}</div>
                    {i < t.itinerary.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--border-default)', minHeight: 18 }} />}
                  </div>
                  <div style={{ paddingBottom: 22 }}>
                    <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-strong)', marginBottom: 3 }}>Day {i + 1} · {h}</div>
                    <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{p}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'Reviews' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <Avatar src={r.photo} name={r.name} size="md" />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 15 }}>{r.name}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.date}</div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}><Rating value={r.rating} size="sm" showValue={false} /></div>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Booking card */}
        <aside style={{ position: 'sticky', top: 96 }}>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>from</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 34, fontWeight: 600, color: 'var(--text-strong)' }}>${t.price}</span>
              <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>/ person</span>
            </div>
            <div style={{ marginBottom: 18 }}><Badge tone="success">Free cancellation up to 30 days</Badge></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {[['Calendar', 'Next departure', 'Sep 14, 2026'], ['Users', 'Availability', t.group.replace('Max', 'Up to') + ' \u00b7 4 left']].map(([ic, l, v], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--surface-sunk)', borderRadius: 'var(--radius-md)' }}>
                  <Icon name={ic} size={18} color="var(--color-primary)" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{l}</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 14 }}>{v}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="accent" size="lg" fullWidth onClick={() => onBook(t.id)}>Reserve your spot</Button>
            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', margin: '12px 0 0' }}>No payment due today</p>
          </div>
        </aside>
      </section>

      {/* What's included */}
      <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 28px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 22px' }}>What's included</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 40px' }}>
            {[['check', 'Local expert guide throughout'], ['check', 'All accommodation (locally owned)'], ['check', 'Listed activities & entrance fees'], ['check', 'Most breakfasts & welcome dinner'], ['x', 'International flights'], ['x', 'Travel insurance (add at checkout)']].map(([k, label], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0' }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: k === 'check' ? 'var(--success-50)' : 'var(--surface-sunk)' }}>
                  <Icon name={k === 'check' ? 'Check' : 'X'} size={15} color={k === 'check' ? 'var(--success-500)' : 'var(--text-muted)'} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: 15, color: k === 'check' ? 'var(--text-body)' : 'var(--text-muted)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your guide */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 28px 8px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 22px' }}>Your guide</h2>
        <div style={{ display: 'flex', flexDirection: isNarrow ? 'column' : 'row', gap: 22, alignItems: isNarrow ? 'flex-start' : 'center', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-xs)' }}>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=70&auto=format&fit=crop" alt="Guide" style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 700, fontSize: 19, color: 'var(--text-strong)' }}>Mara Okafor</span>
              <Badge tone="pine">Lead guide · 9 yrs</Badge>
            </div>
            <Rating value={4.9} reviews={210} size="sm" />
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '10px 0 0', maxWidth: 560 }}>Born and raised in the region, Mara has led small groups here for nearly a decade. She knows the quiet corners, the best family-run kitchens, and exactly when to slow down.</p>
          </div>
        </div>
      </section>

      {/* Related trips */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 28px 72px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 22px' }}>You might also like</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {window.WF_TRIPS.filter((x) => x.id !== t.id).slice(0, 3).map((rt) => (
            <TripCard key={rt.id} image={rt.image} title={rt.title} location={rt.location} badge={rt.badge} badgeTone={rt.badgeTone} rating={rt.rating} reviews={rt.reviews} duration={rt.duration} price={rt.price} onClick={() => onOpenTrip && onOpenTrip(rt.id)} />
          ))}
        </div>
      </section>
    </div>
  );
}
window.TripScreen = TripScreen;


// Multi-step booking: trip & date → travelers → details → payment → confirmation. window.BookNowScreen.
function BookNowScreen({ tripId, onNav }) {
  const { Button, Input, Select, Switch, Checkbox, Badge } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const isNarrow = window.useMediaQuery('(max-width: 640px)');
  const trips = window.WF_TRIPS;
  const [tid, setTid] = React.useState(tripId || trips[0].id);
  const t = trips.find((x) => x.id === tid) || trips[0];
  const steps = ['Trip & date', 'Travelers', 'Your details', 'Payment'];
  const [step, setStep] = React.useState(0);
  const [date, setDate] = React.useState(14);
  const [travelers, setTravelers] = React.useState(2);
  const [insurance, setInsurance] = React.useState(true);
  const [form, setForm] = React.useState({ first: '', last: '', email: '', phone: '' });
  const [errors, setErrors] = React.useState({});

  const subtotal = t.price * travelers;
  const fees = Math.round(subtotal * 0.04);
  const ins = insurance ? 89 * travelers : 0;
  const total = subtotal + fees + ins;

  // available departure days in September (demo)
  const avail = { 14: true, 5: true, 21: true, 28: true, 2: true };
  const firstDow = 1; // Sep 2026 starts Tuesday-ish (demo)

  function validateDetails() {
    const e = {};
    if (!form.first.trim()) e.first = 'Required';
    if (!form.last.trim()) e.last = 'Required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid phone';
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function next() {
    if (step === 2 && !validateDetails()) return;
    setStep((s) => Math.min(s + 1, steps.length));
    if (window.innerWidth <= 1024) {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
    }
  }
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  if (step >= steps.length) {
    return (
      <div style={{ background: 'var(--surface-canvas)', minHeight: 560, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 48, maxWidth: 480, textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--success-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}><Icon name="Check" size={36} color="var(--success-500)" strokeWidth={2.5} /></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 10px' }}>You're going, {form.first || 'traveler'}!</h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 8px' }}>Your spot on <strong style={{ color: 'var(--text-strong)' }}>{t.title}</strong> departing Sep {date} is reserved. A confirmation is on its way to {form.email || 'your inbox'}.</p>
          <div className="u-mono" style={{ fontSize: 14, color: 'var(--text-muted)', margin: '0 0 24px' }} data-ltr>Booking ref · WF-2K9X4</div>
          <Button variant="primary" size="lg" onClick={() => onNav('home')}>Back to home</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '28px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 20px' }}>Book your trip</h1>

        {/* Stepper */}
        <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr 1fr' : undefined, ...(isNarrow ? {} : { display: 'flex' }), alignItems: 'center', gap: isNarrow ? 10 : 0, marginBottom: 28, flexWrap: 'wrap' }}>
          {steps.map((label, i) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: isNarrow ? (i === step ? 'var(--color-primary-soft)' : 'var(--surface-card)') : 'transparent', border: isNarrow ? '1px solid var(--border-subtle)' : 'none', borderRadius: isNarrow ? 'var(--radius-md)' : 0, padding: isNarrow ? '10px 12px' : 0 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-mono)', background: i < step ? 'var(--color-primary)' : i === step ? 'var(--color-primary)' : 'var(--surface-sunk)', color: i <= step ? 'var(--text-on-primary)' : 'var(--text-muted)', border: i === step ? '2px solid var(--color-primary)' : 'none' }}>{i < step ? '✓' : i + 1}</div>
                <span style={{ fontSize: 14, fontWeight: i === step ? 700 : 500, color: i === step ? 'var(--text-strong)' : 'var(--text-muted)' }}>{label}</span>
              </div>
              {!isNarrow && i < steps.length - 1 && <div style={{ flex: 1, minWidth: 24, height: 2, background: i < step ? 'var(--color-primary)' : 'var(--border-default)', margin: '0 12px' }} />}
            </React.Fragment>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 32, alignItems: 'start' }}>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
            {step === 0 && (
              <div>
                <Select label="Choose your trip" value={tid} onChange={(e) => setTid(e.target.value)} options={trips.map((x) => ({ value: x.id, label: x.title }))} iconLeft={<Icon name="Compass" size={18} />} />
                <div style={{ marginTop: 22, fontWeight: 700, fontSize: 15, color: 'var(--text-strong)', marginBottom: 6 }}>Select a departure · September 2026</div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 14px' }}>Highlighted dates have guaranteed availability.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', padding: '4px 0' }}>{d}</div>)}
                  {Array.from({ length: firstDow }).map((_, i) => <div key={'e' + i} />)}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const day = i + 1; const ok = avail[day]; const on = date === day && ok;
                    return (
                      <button key={day} disabled={!ok} onClick={() => setDate(day)} style={{ aspectRatio: '1', minHeight: 44, border: on ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', background: on ? 'var(--color-primary)' : ok ? 'var(--color-primary-soft)' : 'transparent', color: on ? 'var(--text-on-primary)' : ok ? 'var(--text-strong)' : 'var(--text-muted)', fontWeight: ok ? 700 : 400, cursor: ok ? 'pointer' : 'default', fontFamily: 'var(--font-mono)', fontSize: 14, opacity: ok ? 1 : 0.4 }}>{day}</button>
                    );
                  })}
                </div>
              </div>
            )}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Select label="Travelers" value={String(travelers)} onChange={(e) => setTravelers(Number(e.target.value))} options={[1, 2, 3, 4].map((n) => ({ value: String(n), label: n + (n === 1 ? ' traveler' : ' travelers') }))} iconLeft={<Icon name="Users" size={18} />} />
                <Switch label="Add travel insurance ($89 / person)" checked={insurance} onChange={setInsurance} />
                <Checkbox label="I'd like a private room (if available)" checked={false} onChange={() => {}} />
                <Checkbox label="I have dietary requirements" checked={false} onChange={() => {}} />
              </div>
            )}
            {step === 2 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Input label="First name" value={form.first} onChange={set('first')} error={errors.first} placeholder="Jordan" />
                <Input label="Last name" value={form.last} onChange={set('last')} error={errors.last} placeholder="Rivera" />
                <Input label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@email.com" iconLeft={<Icon name="Mail" size={18} />} />
                <Input label="Phone" value={form.phone} onChange={set('phone')} error={errors.phone} placeholder="+1 (555) 000-0000" iconLeft={<Icon name="Phone" size={18} />} />
              </div>
            )}
            {step === 3 && (
              <div style={{ display: 'grid', gap: 16 }}>
                <Input label="Card number" placeholder="1234 5678 9012 3456" iconLeft={<Icon name="CreditCard" size={18} />} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="Expiry" placeholder="MM / YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
                <div style={{ marginTop: 4 }}><Badge tone="success" iconLeft={<Icon name="ShieldCheck" size={14} color="var(--success-500)" />}>Secured · you won't be charged until 30 days before departure</Badge></div>
              </div>
            )}

            <div className="booking-nav-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
              <Button variant="ghost" onClick={() => (step === 0 ? onNav('trip') : setStep(step - 1))} iconLeft={<Icon name="ChevronLeft" size={18} color="var(--color-primary)" />}>Back</Button>
              <Button variant={step === steps.length - 1 ? 'accent' : 'primary'} size="lg" onClick={next}>{step === steps.length - 1 ? 'Confirm & reserve' : 'Continue'}</Button>
            </div>
          </div>

          {/* Summary */}
          <aside style={{ position: 'sticky', top: 96, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ position: 'relative', height: 120 }}>
              <img src={t.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
              <div style={{ position: 'absolute', left: 16, bottom: 12, right: 16 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, color: '#fff' }}>{t.title}</div>
                <div style={{ fontSize: 13, color: 'var(--stone-100)' }}>{t.location} · {t.duration} · Sep {date}</div>
              </div>
            </div>
            <div style={{ padding: 22 }}>
              {[[`$${t.price} × ${travelers}`, subtotal], ['Booking fees', fees]].concat(insurance ? [[`Insurance × ${travelers}`, ins]] : []).map(([l, v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: 'var(--text-body)', marginBottom: 12 }}><span>{l}</span><span className="u-mono" data-ltr>${v.toLocaleString()}</span></div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-strong)' }}>Total</span>
                <span className="u-mono" data-ltr style={{ fontWeight: 600, fontSize: 24, color: 'var(--text-strong)' }}>${total.toLocaleString()}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* assurance strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 32 }}>
          {[['ShieldCheck', 'Free cancellation', '30 days before departure'], ['Lock', 'Secure payment', '256-bit encryption'], ['CalendarClock', 'No payment today', 'Reserve, pay later'], ['Headphones', '24/7 support', 'Real humans, always']].map(([ic, h, p], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
              <Icon name={ic} size={22} color="var(--color-primary)" />
              <div><div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{h}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{p}</div></div>
            </div>
          ))}
        </div>

        {/* what's included */}
        <div style={{ marginTop: 32, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 18px' }}>What's included in {t.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 40px' }}>
            {['Local expert guide throughout', 'All accommodation, locally owned', 'Listed activities & entrance fees', 'Most breakfasts & a welcome dinner', 'Airport transfers on trip dates', 'Small group, capped at ' + t.group.replace('Max ', '')].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="Check" size={16} color="var(--success-500)" strokeWidth={2.5} />
                <span style={{ fontSize: 15, color: 'var(--text-body)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* reassurance / testimonial */}
        <div style={{ marginTop: 32, marginBottom: 8, background: 'var(--color-primary-soft)', borderRadius: 'var(--radius-lg)', padding: '32px 36px', display: 'flex', gap: 20, alignItems: 'center' }}>
          <Icon name="Quote" size={36} color="var(--color-primary)" />
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.5, color: 'var(--text-strong)', margin: '0 0 8px' }}>“Booking took five minutes and every promise held up on the ground. The best trip we've taken.”</p>
            <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>— Liam Chen, booked {t.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
window.BookNowScreen = BookNowScreen;


// About: story, mission, stats, team. window.AboutScreen.
function AboutScreen({ onNav }) {
  const { Button, Avatar, Badge } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const stats = [['40+', 'Countries'], ['12', 'Avg. group size'], ['9,400', 'Happy travelers'], ['4.9', 'Avg. trip rating']];
  const team = [
    { name: 'Mara Okafor', role: 'Founder & lead guide', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&q=70&auto=format&fit=crop' },
    { name: 'Liam Chen', role: 'Head of trips', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&q=70&auto=format&fit=crop' },
    { name: 'Sofia Reyes', role: 'Traveler care', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&q=70&auto=format&fit=crop' },
    { name: 'Diego Marín', role: 'Local partnerships', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&q=70&auto=format&fit=crop' },
  ];
  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      {/* hero */}
      <section style={{ position: 'relative', minHeight: 380, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=75&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,53,42,0.82), rgba(6,53,42,0.4))' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px', width: '100%' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--marigold-300)' }}>Our story</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 52, lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', margin: '12px 0 0', maxWidth: 640 }}>We believe the best trips are led by locals.</h1>
        </div>
      </section>

      {/* mission */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1.5, color: 'var(--text-strong)', margin: 0 }}>Wayfarer started with a simple idea: that a place is best understood through the people who call it home. So we built small-group trips around local guides — and kept them small on purpose.</p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', margin: '24px 0 0' }}>Today we run guided journeys in more than forty countries, capped at a dozen travelers, with characterful stays and time built in to wander. We handle the logistics so you can be present for the trip.</p>
      </section>

      {/* stats */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {stats.map(([n, l], i) => (
            <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '26px 20px', textAlign: 'center' }}>
              <div className="u-mono" style={{ fontSize: 40, fontWeight: 600, color: 'var(--color-primary)' }}>{n}</div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[['HeartHandshake', 'Local first', 'Guides and partners are from the places we visit — and paid fairly for it.'], ['Leaf', 'Light footprint', 'Carbon-offset travel, small groups, and locally owned stays.'], ['ShieldCheck', 'Care, always', 'Free cancellation up to 30 days out and 24/7 on-trip support.']].map(([ic, h, p], i) => (
            <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28 }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={ic} size={24} color="var(--color-primary)" /></div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 8px' }}>{h}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px 24px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 24px', textAlign: 'center' }}>The people behind the trips</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {team.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={m.photo} alt={m.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 12 }} />
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>{m.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 72px' }}>
        <div style={{ background: 'var(--surface-inverse)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: 'var(--stone-50)', margin: '0 0 16px' }}>Ready to go further?</h2>
          <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="accent" size="lg" onClick={() => onNav('services')}>Browse trips</Button>
            <Button variant="inverse" size="lg" onClick={() => onNav('contact')}>Talk to us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.AboutScreen = AboutScreen;


// Contact — 5 sections: header, contact+map+form, support channels, FAQ, global offices. window.ContactScreen.
function ContactScreen() {
  const { Button, Input, Select, Badge } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [form, setForm] = React.useState({ name: '', email: '', topic: 'General enquiry', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [faq, setFaq] = React.useState(0);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please tell us your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (form.message.trim().length < 10) er.message = 'A little more detail, please (10+ chars)';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  }

  const details = [['MapPin', 'Visit us', '24 Harbour Lane, Lisbon, Portugal'], ['Mail', 'Email', 'hello@wayfarer.travel'], ['Phone', 'Call', '+351 21 000 0000'], ['Clock', 'Hours', 'Mon–Sat · 9:00–18:00 WET']];
  const channels = [['MessageSquare', 'Live chat', 'Chat with our team', 'Mon–Sat, 9–18 WET'], ['LifeBuoy', 'Help center', 'Browse 200+ articles', 'Answers, anytime'], ['Plane', 'On-trip support', '24/7 while you travel', 'Every trip, included']];
  const faqs = [
    ['How quickly will you reply?', 'We answer most messages within one business day — often much sooner during office hours.'],
    ['Can you help plan a custom trip?', 'Yes. Pick “Custom trip” above and tell us your dates and interests; a trip expert will design an itinerary with you.'],
    ['Do you offer group or private departures?', 'We do — private departures for groups of 6+ and tailored corporate retreats. Mention it in your message.'],
  ];
  const offices = [['Lisbon', 'HQ · Europe', 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=500&q=70&auto=format&fit=crop'], ['Kyoto', 'Asia desk', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=70&auto=format&fit=crop'], ['Santiago', 'Americas desk', 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=500&q=70&auto=format&fit=crop']];

  return (
    <div style={{ background: 'var(--surface-canvas)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px 16px', textAlign: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay-400)' }}>We'd love to hear from you</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '6px 0 0' }}>Get in touch</h1>
      </div>

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '28px 24px 64px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'start' }}>
        {/* left: details + map */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 24 }}>
            {details.map(([ic, l, v], i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={19} color="var(--color-primary)" /></div>
                <div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{l}</div><div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 15 }}>{v}</div></div>
              </div>
            ))}
          </div>
          {/* map placeholder (Google Maps API ready) */}
          <div data-map="google" style={{ position: 'relative', height: 260, borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: 'var(--surface-sunk)' }}>
            <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=900&q=70&auto=format&fit=crop" alt="Map of Lisbon" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', background: 'var(--clay-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
                <span style={{ transform: 'rotate(45deg)', display: 'inline-flex' }}><Icon name="MapPin" size={22} color="#fff" /></span>
              </div>
            </div>
            <span style={{ position: 'absolute', bottom: 10, right: 10, fontSize: 11, color: 'var(--text-muted)', background: 'var(--surface-card)', padding: '4px 8px', borderRadius: 'var(--radius-pill)' }}>Google Maps placeholder</span>
          </div>
        </div>

        {/* right: form */}
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 30, boxShadow: 'var(--shadow-sm)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--success-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><Icon name="Check" size={32} color="var(--success-500)" strokeWidth={2.5} /></div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px' }}>Message sent!</h2>
              <p style={{ fontSize: 15, color: 'var(--text-body)', margin: 0 }}>Thanks, {form.name.split(' ')[0]}. We'll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate data-form="formspree" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Your name" value={form.name} onChange={set('name')} error={errors.name} placeholder="Jordan Rivera" />
              <Input label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@email.com" iconLeft={<Icon name="Mail" size={18} />} />
              <Select label="Topic" value={form.topic} onChange={set('topic')} options={['General enquiry', 'Booking help', 'Custom trip', 'Press & partnerships']} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="wf-msg" style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>Message</label>
                <textarea id="wf-msg" value={form.message} onChange={set('message')} rows={4} placeholder="Tell us where you'd like to go…"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-strong)', background: 'var(--surface-card)', border: `1.5px solid ${errors.message ? 'var(--error-500)' : 'var(--border-default)'}`, borderRadius: 'var(--radius-md)', padding: '12px 14px', resize: 'vertical', outline: 'none' }} />
                {errors.message && <span style={{ fontSize: 12, color: 'var(--error-500)' }}>{errors.message}</span>}
              </div>
              <Button type="submit" variant="accent" size="lg" fullWidth>Send message</Button>
              <p style={{ fontSize: 12.5, color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>We'll never share your details. Powered by Formspree.</p>
            </form>
          )}
        </div>
      </div>

      {/* 3 · support channels */}
      <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 22px', textAlign: 'center' }}>More ways to reach us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {channels.map(([ic, h, p, s], i) => (
              <div key={i} style={{ background: 'var(--surface-canvas)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24, textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name={ic} size={24} color="var(--color-primary)" /></div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 4px' }}>{h}</h3>
                <p style={{ fontSize: 15, color: 'var(--text-body)', margin: '0 0 6px' }}>{p}</p>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · FAQ */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px 16px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 22px', textAlign: 'center' }}>Before you write</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'start', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>
                {q}<Icon name={faq === i ? 'Minus' : 'Plus'} size={18} color="var(--color-primary)" />
              </button>
              {faq === i && <p style={{ padding: '0 20px 18px', margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 5 · global offices */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px 72px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 22px', textAlign: 'center' }}>Find us around the world</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {offices.map(([city, role, img], i) => (
            <div key={i} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4 / 3' }}>
              <img src={img} alt={city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
              <span style={{ position: 'absolute', left: 16, bottom: 14 }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#fff' }}>{city}</span>
                <span style={{ display: 'block', fontSize: 13, color: 'var(--stone-200)' }}>{role}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.ContactScreen = ContactScreen;


// 404 + Coming Soon — full-screen, no chrome, no scroll, responsive. window.NotFoundScreen, window.ComingSoonScreen.

function NotFoundScreen({ onNav }) {
  const { Button } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(120% 120% at 50% 0%, #0F7A63 0%, #084838 55%, #04241D 100%)' }}>
      {/* decorative oversized 404 watermark */}
      <div className="u-mono" aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(220px, 52vw, 620px)', fontWeight: 700, color: 'rgba(242,169,0,0.07)', letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>404</div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '24px', maxWidth: 560 }}>
        <img src={window.WF_LOGO} width="52" height="52" alt="" style={{ margin: '0 auto 22px' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', marginBottom: 22 }}>
          <Icon name="Compass" size={16} color="var(--marigold-300)" />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--marigold-300)' }}>Lost your way?</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 7vw, 56px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px' }}>You've wandered<br />off the map.</h1>
        <p style={{ fontSize: 'clamp(15px, 2.4vw, 18px)', lineHeight: 1.6, color: 'var(--stone-100)', margin: '0 auto 30px', maxWidth: 420 }}>This trail doesn't exist — but every great trip needs a wrong turn or two. Let's get you back on route.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="accent" size="lg" onClick={() => onNav('home')} iconLeft={<Icon name="Home" size={18} color="var(--pine-900)" />}>Back to home</Button>
          <Button variant="inverse" size="lg" onClick={() => onNav('services')} iconLeft={<Icon name="Compass" size={18} color="var(--color-primary)" />}>Browse trips</Button>
        </div>
      </div>
    </div>
  );
}
window.NotFoundScreen = NotFoundScreen;

function ComingSoonScreen({ onNav }) {
  const { Button, Input } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [sent, setSent] = React.useState(false);
  const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 42, []);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000), h = Math.floor(diff / 3600000) % 24, m = Math.floor(diff / 60000) % 60, s = Math.floor(diff / 1000) % 60;
  const units = [[d, 'Days'], [h, 'Hrs'], [m, 'Min'], [s, 'Sec']];

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&q=75&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,53,42,0.62), rgba(6,53,42,0.9))' }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '24px', maxWidth: 640, width: '100%' }}>
        <img src={window.WF_LOGO} width="48" height="48" alt="" style={{ margin: '0 auto 18px' }} />
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--marigold-300)' }}>New expedition · 2026</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 8vw, 64px)', lineHeight: 1.02, fontWeight: 600, letterSpacing: '-0.02em', margin: '12px 0 12px' }}>Antarctica<br />is coming.</h1>
        <p style={{ fontSize: 'clamp(14px, 2.4vw, 18px)', lineHeight: 1.55, color: 'var(--stone-100)', margin: '0 auto 28px', maxWidth: 460 }}>Our most ambitious journey yet. Join the waitlist to be first in line when bookings open.</p>

        <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 14px)', justifyContent: 'center', marginBottom: 30 }}>
          {units.map(([v, l], i) => (
            <div key={i} style={{ flex: '1 1 0', maxWidth: 88, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', borderRadius: 'var(--radius-md)', padding: 'clamp(10px, 2vw, 16px) 4px' }}>
              <div className="u-mono" style={{ fontSize: 'clamp(22px, 5.5vw, 36px)', fontWeight: 600, lineHeight: 1 }}>{String(v).padStart(2, '0')}</div>
              <div style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: 'var(--stone-200)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        {sent ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.16)', padding: '12px 22px', borderRadius: 'var(--radius-pill)', fontSize: 15 }}><Icon name="Check" size={20} color="#fff" /> You're on the list — see you down south.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}><Input placeholder="you@email.com" iconLeft={<Icon name="Mail" size={18} />} /></div>
            <Button variant="accent" size="lg" type="submit">Join waitlist</Button>
          </form>
        )}
        <div style={{ marginTop: 24 }}>
          <button onClick={() => onNav('home')} style={{ background: 'none', border: 'none', color: 'var(--stone-200)', cursor: 'pointer', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="ArrowLeft" size={15} color="var(--stone-200)" />Back to Wayfarer</button>
        </div>
      </div>
    </div>
  );
}
window.ComingSoonScreen = ComingSoonScreen;


// Login / Sign up / Forgot password — split panel, responsive, with theme + RTL toggles. window.AuthScreen.
function AuthScreen({ mode = 'login', onNav, theme, onToggleTheme, dir, onToggleDir }) {
  const { Button, Input, Checkbox } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const isNarrow = window.useMediaQuery('(max-width: 860px)');
  const isSignup = mode === 'signup';
  const isForgot = mode === 'forgot';
  const [form, setForm] = React.useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = React.useState({});
  const [showPw, setShowPw] = React.useState(false);
  const [showPw2, setShowPw2] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const er = {};
    if (isSignup && !form.name.trim()) er.name = 'Please enter your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (!isForgot && form.password.length < 6) er.password = 'At least 6 characters';
    if (isSignup && form.confirm !== form.password) er.confirm = 'Passwords don\u2019t match';
    setErrors(er);
    if (Object.keys(er).length === 0) setDone(true);
  }

  // Password field with an eye show/hide toggle (DS Input has no trailing slot).
  const PwInput = ({ label, value, onChange, error, show, onToggle }) => {
    const [focus, setFocus] = React.useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
        <label style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-card)', border: '1.5px solid ' + (error ? 'var(--error-500)' : focus ? 'var(--color-primary)' : 'var(--border-default)'), borderRadius: 'var(--radius-md)', padding: '0 14px', height: 46, transition: 'border-color var(--dur-fast) var(--ease-out)' }}>
          <span style={{ display: 'inline-flex', color: 'var(--text-muted)' }}><Icon name="Lock" size={18} /></span>
          <input type={show ? 'text' : 'password'} value={value} onChange={onChange} placeholder="••••••••" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-strong)', minWidth: 0 }} />
          <button type="button" onClick={onToggle} aria-label={show ? 'Hide password' : 'Show password'} title={show ? 'Hide password' : 'Show password'}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 4 }}>
            <Icon name={show ? 'EyeOff' : 'Eye'} size={18} />
          </button>
        </div>
        {error && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--error-500)' }}>{error}</span>}
      </div>
    );
  };

  const toggles = (
    <div style={{ position: 'absolute', top: 20, insetInlineEnd: 20, display: 'flex', gap: 10, zIndex: 5 }}>
      <button onClick={onToggleTheme} aria-label="Toggle theme" title="Toggle theme" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-body)' }}><Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={19} /></button>
      <button onClick={onToggleDir} aria-label="Toggle text direction" title={dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'} style={{ height: 42, padding: '0 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer', color: 'var(--text-body)', fontWeight: 700, fontSize: 13 }}>{dir === 'rtl' ? 'RTL' : 'LTR'}</button>
    </div>
  );

  const title = isForgot ? 'Reset your password' : isSignup ? 'Create your account' : 'Sign in';
  const subtitle = isForgot ? 'Enter your email and we\u2019ll send you a reset link.' : isSignup ? 'Join Wayfarer and start going further.' : 'Welcome back — sign in to manage your trips.';

  const formPanel = (
    <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isNarrow ? '40px 22px' : '48px', background: 'var(--surface-canvas)' }}>
      {toggles}
      <div style={{ width: '100%', maxWidth: 400 }}>
        <button onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: 28 }}>
          <img src={window.WF_LOGO} width="36" height="36" alt="" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Wayfarer</span>
        </button>

        {(done && !isForgot) ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--success-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><Icon name={isForgot ? 'MailCheck' : 'Check'} size={32} color="var(--success-500)" strokeWidth={2.5} /></div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px' }}>{isForgot ? 'Check your inbox' : isSignup ? 'Welcome aboard!' : 'Welcome back!'}</h1>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 24px' }}>{isForgot ? 'We\u2019ve sent a password reset link to ' + (form.email || 'your email') + '.' : isSignup ? 'Your account is ready. Time to plan your first adventure.' : 'You\u2019re signed in. Pick up where you left off.'}</p>
            <Button variant="primary" size="lg" fullWidth onClick={() => onNav(isForgot ? 'login' : 'account')}>{isForgot ? 'Back to sign in' : 'Go to dashboard'}</Button>
          </div>
        ) : (
          <React.Fragment>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 6px' }}>{title}</h1>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 0 26px' }}>{subtitle}</p>

            <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {isForgot && done && (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'var(--success-50)', border: '1px solid var(--success-500)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
                  <Icon name="MailCheck" size={20} color="var(--success-500)" />
                  <div><div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-strong)' }}>Reset link sent!</div><div style={{ fontSize: 13.5, color: 'var(--text-body)', marginTop: 2 }}>Check {form.email || 'your inbox'} for a link to reset your password.</div></div>
                </div>
              )}
              {isSignup && <Input label="Full name" value={form.name} onChange={set('name')} error={errors.name} placeholder="Jordan Rivera" iconLeft={<Icon name="User" size={18} />} />}
              <Input label="Email" type="email" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@email.com" iconLeft={<Icon name="Mail" size={18} />} />
              {!isForgot && <PwInput label="Password" value={form.password} onChange={set('password')} error={errors.password} show={showPw} onToggle={() => setShowPw((s) => !s)} />}
              {isSignup && <PwInput label="Confirm password" value={form.confirm} onChange={set('confirm')} error={errors.confirm} show={showPw2} onToggle={() => setShowPw2((s) => !s)} />}

              {mode === 'login' && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <Checkbox label="Remember me" checked={true} onChange={() => {}} />
                  <button type="button" onClick={() => onNav('forgot')} style={{ fontSize: 14, color: 'var(--text-link)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Forgot password?</button>
                </div>
              )}

              <Button type="submit" variant="accent" size="lg" fullWidth>{isForgot ? (done ? 'Resend link' : 'Send reset link') : isSignup ? 'Create account' : 'Sign in'}</Button>
            </form>

            {isForgot ? (
              <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', margin: '24px 0 0' }}>
                Remembered it? <button onClick={() => onNav('login')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-link)', fontWeight: 700, fontSize: 14, padding: 0 }}>Back to sign in</button>
              </p>
            ) : (
              <React.Fragment>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '24px 0' }}>
                  <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>or</span>
                  <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[['Google', 'Globe'], ['Apple', 'Apple'], ['Facebook', 'Facebook']].map(([label, ic]) => (
                    <button key={label} type="button" aria-label={'Continue with ' + label} title={'Continue with ' + label}
                      style={{ flex: 1, height: 48, borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-body)', transition: 'border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.background = 'var(--surface-sunk)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.background = 'var(--surface-card)'; }}>
                      {ic === 'Facebook'
                        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>
                        : ic === 'Apple'
                        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.78c.02 2.5 2.2 3.33 2.22 3.34-.02.06-.35 1.2-1.15 2.37-.69 1.02-1.41 2.03-2.55 2.05-1.11.02-1.47-.66-2.74-.66-1.27 0-1.67.64-2.72.68-1.09.04-1.93-1.1-2.63-2.11-1.43-2.07-2.52-5.85-1.05-8.4.73-1.27 2.03-2.07 3.44-2.09 1.07-.02 2.09.72 2.74.72.66 0 1.89-.89 3.19-.76.54.02 2.07.22 3.05 1.65-.08.05-1.82 1.06-1.8 3.18M14.3 5.39c.58-.7.97-1.68.86-2.65-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.61-.88 2.56.93.07 1.89-.47 2.47-1.17"/></svg>
                        : <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 4.75c1.61 0 3.06.55 4.2 1.64l3.15-3.15C17.45 1.46 14.96.5 12 .5A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 4.75 12 4.75Z"/></svg>}
                    </button>
                  ))}
                </div>

                <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', margin: '24px 0 0' }}>
                  {isSignup ? 'Already have an account? ' : 'New to Wayfarer? '}
                  <button onClick={() => onNav(isSignup ? 'login' : 'signup')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-link)', fontWeight: 700, fontSize: 14, padding: 0 }}>{isSignup ? 'Sign in' : 'Create one'}</button>
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );

  const imagePanel = (
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: isNarrow ? 180 : 'auto' }}>
      <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=74&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,53,42,0.85), rgba(6,53,42,0.35))' }} />
      {!isNarrow && (
        <div style={{ position: 'absolute', left: 48, bottom: 48, right: 48 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--marigold-300)' }}>Go further</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, lineHeight: 1.1, fontWeight: 600, color: '#fff', margin: '12px 0 0' }}>Your next adventure starts here.</h2>
          <p style={{ fontSize: 16, color: 'var(--stone-100)', margin: '14px 0 0', maxWidth: 380 }}>Small-group, guide-led journeys in 40+ countries. Sign in to manage your bookings.</p>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: isNarrow ? 'column' : 'row' }}>
      {isNarrow ? <React.Fragment>{imagePanel}{formPanel}</React.Fragment> : <React.Fragment>{formPanel}{imagePanel}</React.Fragment>}
    </div>
  );
}
window.AuthScreen = AuthScreen;
