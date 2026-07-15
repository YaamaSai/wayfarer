// Booking-management dashboard: sidebar, stats, bookings table, messages. window.DashboardScreen.
function DashboardScreen({ onNav, theme, onToggleTheme, dir, onToggleDir }) {
  const { Badge, Avatar, Button, Tag } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const [section, setSection] = React.useState('Overview');
  const mainRef = React.useRef(null);
  React.useEffect(() => { if (mainRef.current) mainRef.current.scrollTop = 0; }, [section]);
  const [bookFilter, setBookFilter] = React.useState('All');
  const nav = [['Overview', 'LayoutDashboard'], ['Bookings', 'CalendarCheck'], ['Reports', 'BarChart3'], ['Travelers', 'Users'], ['Settings', 'Settings']];
  const stats = [['Upcoming trips', '6', 'CalendarCheck', 'pine'], ['New bookings', '24', 'TrendingUp', 'marigold'], ['Revenue (mo)', '$48.2k', 'Wallet', 'success'], ['Occupancy', '82%', 'Gauge', 'clay']];
  const bookings = [
    ['WF-2K9X4', 'Jordan Rivera', 'Temples & Tea of Kyoto', 'Sep 14', 2, 'Confirmed', 'success'],
    ['WF-3L1Z8', 'Amira Haddad', 'Land of Fire & Ice', 'Sep 21', 4, 'Pending', 'warning'],
    ['WF-3M7Q2', 'Sam Okonkwo', 'Patagonia Wild Trek', 'Oct 5', 2, 'Confirmed', 'success'],
    ['WF-4P2R9', 'Lena Vogel', 'Atlas Mountains', 'Oct 12', 3, 'Cancelled', 'error'],
    ['WF-4T8W1', 'Diego Marín', 'Inca Trail', 'Nov 2', 2, 'Confirmed', 'success'],
    ['WF-5A2C6', 'Priya Nair', 'Serengeti Migration Safari', 'Nov 9', 2, 'Confirmed', 'success'],
    ['WF-5K8D3', 'Tom Becker', 'Cyclades Island Hopper', 'Nov 16', 5, 'Pending', 'warning'],
    ['WF-6B1F9', 'Yuki Tanaka', 'New Zealand South Island', 'Dec 1', 2, 'Confirmed', 'success'],
  ];
  const messages = [
    ['Amira Haddad', 'Question about visa for Iceland trip', 'Hi! Do I need a visa as a UK citizen for the Iceland departure? Also, is the airport transfer included on arrival day?', '2h', true],
    ['Sam Okonkwo', 'Can I add a day in Santiago?', 'We\u2019d love to arrive a day early before the Patagonia trek. Can you help arrange the extra night and transfer?', '5h', true],
    ['Priya Nair', 'Dietary requirements', 'Just confirming you received my note about a nut allergy for the Serengeti trip. Thank you!', '1d', true],
    ['Lena Vogel', 'Thanks for the refund — all sorted!', 'Appreciate how quickly you handled the cancellation. We\u2019ll definitely book again next year.', '1d', false],
    ['Diego Marín', 'Packing list question', 'For the Inca Trail in November, would you recommend a 3-season or 4-season sleeping bag?', '2d', false],
  ];
  const travelers = [
    ['Jordan Rivera', 'jordan@email.com', 'United States', 14, 'Gold', 'success'],
    ['Amira Haddad', 'amira.h@email.com', 'United Kingdom', 6, 'Silver', 'neutral'],
    ['Sam Okonkwo', 'sam.ok@email.com', 'Nigeria', 9, 'Gold', 'success'],
    ['Priya Nair', 'priya.n@email.com', 'India', 4, 'Silver', 'neutral'],
    ['Diego Marín', 'diego.m@email.com', 'Spain', 11, 'Gold', 'success'],
    ['Yuki Tanaka', 'yuki.t@email.com', 'Japan', 3, 'Bronze', 'warning'],
  ];

  const shownBookings = bookFilter === 'All' ? bookings : bookings.filter((b) => b[5] === bookFilter);

  const Panel = ({ title, action, children }) => (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>{title}</h2>
        {action}
      </div>
      <div style={{ padding: 22 }}>{children}</div>
    </div>
  );

  const BookingsTable = ({ rows }) => (
    isNarrow ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rows.map((b, i) => (
          <div key={i} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{b[1]}</span>
              <Badge tone={b[6]}>{b[5]}</Badge>
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-body)', marginBottom: 6 }}>{b[2]}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 12.5, color: 'var(--text-muted)' }}>
              <span className="u-mono" data-ltr>{b[0]}</span>
              <span>Departs {b[3]}</span>
              <span>{b[4]} pax</span>
            </div>
          </div>
        ))}
      </div>
    ) : (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ textAlign: 'start', color: 'var(--text-muted)' }}>
            {['Ref', 'Traveler', 'Trip', 'Departs', 'Pax', 'Status'].map((h) => <th key={h} style={{ textAlign: 'start', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '12px 4px' }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((b, i) => (
            <tr key={i} style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <td className="u-mono" data-ltr style={{ padding: '14px 4px', color: 'var(--text-muted)', fontSize: 13 }}>{b[0]}</td>
              <td style={{ padding: '14px 4px', fontWeight: 600, color: 'var(--text-strong)' }}>{b[1]}</td>
              <td style={{ padding: '14px 4px', color: 'var(--text-body)' }}>{b[2]}</td>
              <td style={{ padding: '14px 4px', color: 'var(--text-body)' }}>{b[3]}</td>
              <td style={{ padding: '14px 4px', color: 'var(--text-body)' }}>{b[4]}</td>
              <td style={{ padding: '14px 4px' }}><Badge tone={b[6]}>{b[5]}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  );

  const RevenueChart = () => (
    <Panel title="Revenue · last 8 months" action={<span className="u-mono" style={{ fontSize: 13, color: 'var(--success-500)', fontWeight: 600 }}>▲ 18%</span>}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 160 }}>
        {[['Feb', 38], ['Mar', 44], ['Apr', 41], ['May', 52], ['Jun', 60], ['Jul', 72], ['Aug', 66], ['Sep', 84]].map(([m, v], i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ width: '100%', height: `${v * 1.6}px`, borderRadius: '6px 6px 0 0', background: i === 7 ? 'var(--color-accent)' : 'var(--color-primary)', opacity: i === 7 ? 1 : 0.55 }} />
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{m}</span>
          </div>
        ))}
      </div>
    </Panel>
  );

  const TasksPanel = () => (
    <Panel title="Tasks">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[['Confirm guide for Inca Trail', 'Due today', 'clay'], ['Refund Lena Vogel', 'Due tomorrow', 'warning'], ['Approve 3 new reviews', 'This week', 'pine'], ['Update Iceland itinerary', 'This week', 'pine']].map(([t, due, tone], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
            <span style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid var(--border-strong)', flexShrink: 0 }} />
            <span style={{ flex: 1, fontSize: 14, color: 'var(--text-strong)' }}>{t}</span>
            <Badge tone={tone}>{due}</Badge>
          </div>
        ))}
      </div>
    </Panel>
  );

  const DeparturesPanel = () => (
    <Panel title="Upcoming departures">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[['Temples & Tea of Kyoto', 'Sep 14', 8, 12], ['Land of Fire & Ice', 'Sep 21', 11, 14], ['Patagonia Wild Trek', 'Oct 5', 6, 10]].map(([trip, date, filled, cap], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--color-primary-soft)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="u-mono" style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1 }}>{String(date).split(' ')[1]}</span>
              <span style={{ fontSize: 10, color: 'var(--color-primary)', textTransform: 'uppercase' }}>{String(date).split(' ')[0]}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' }}>{trip}</div>
              <div style={{ height: 6, borderRadius: 3, background: 'var(--surface-sunk)', marginTop: 6, overflow: 'hidden' }}><div style={{ width: `${(filled / cap) * 100}%`, height: '100%', background: 'var(--color-primary)' }} /></div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filled}/{cap}</span>
          </div>
        ))}
      </div>
    </Panel>
  );

  const TopTripsPanel = () => (
    <Panel title="Top-selling trips this month">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[['Temples & Tea of Kyoto', 'Japan', 42, '$77.3k'], ['Inca Trail to Machu Picchu', 'Peru', 38, '$75.2k'], ['Patagonia Wild Trek', 'Chile', 29, '$69.3k'], ['Serengeti Migration Safari', 'Tanzania', 18, '$62.1k']].map(([trip, country, sales, rev], i) => (
          isNarrow ? (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '13px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="u-mono" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-muted)', width: 20, flexShrink: 0 }}>{i + 1}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-strong)' }}>{trip}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{country} · {sales} bookings</div>
                </div>
                <span className="u-mono" data-ltr style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', flexShrink: 0 }}>{rev}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-sunk)', overflow: 'hidden', marginInlineStart: 32 }}><div style={{ width: `${(sales / 42) * 100}%`, height: '100%', background: 'var(--color-primary)' }} /></div>
            </div>
          ) : (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
              <span className="u-mono" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-muted)', width: 22 }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-strong)' }}>{trip}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{country} · {sales} bookings</div>
              </div>
              <div style={{ width: 140, height: 8, borderRadius: 4, background: 'var(--surface-sunk)', overflow: 'hidden' }}><div style={{ width: `${(sales / 42) * 100}%`, height: '100%', background: 'var(--color-primary)' }} /></div>
              <span className="u-mono" data-ltr style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', width: 64, textAlign: 'end' }}>{rev}</span>
            </div>
          )
        ))}
      </div>
    </Panel>
  );

  const StatsRow = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
      {stats.map(([l, v, ic, tone], i) => (
        <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{l}</span>
            <Badge tone={tone} iconLeft={<Icon name={ic} size={13} color={`var(--${tone === 'pine' ? 'pine-700' : tone === 'marigold' ? 'marigold-600' : tone === 'success' ? 'success-500' : 'clay-500'})`} />}> </Badge>
          </div>
          <div className="u-mono" style={{ fontSize: 30, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div>
        </div>
      ))}
    </div>
  );

  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => { setNavOpen(false); }, [section]);
  return (
    <div style={{ background: 'var(--surface-canvas)', height: '100vh', display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr', overflow: 'hidden' }}>
      {isNarrow && navOpen && <div onClick={() => setNavOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 79 }} />}
      {/* Sidebar — full height on desktop; off-canvas drawer on mobile/tablet */}
      <aside style={isNarrow
        ? { position: 'fixed', top: 0, insetInlineStart: 0, width: 280, height: '100vh', zIndex: 80, display: 'flex', flexDirection: 'column', background: 'var(--surface-card)', borderInlineEnd: '1px solid var(--border-subtle)', padding: 16, transform: navOpen ? 'translateX(0)' : 'translateX(-110%)', transition: 'transform var(--dur-base) var(--ease-out)', boxShadow: navOpen ? 'var(--shadow-xl)' : 'none' }
        : { height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-card)', borderInlineEnd: '1px solid var(--border-subtle)', padding: 16 }}>
        <button onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '6px 8px 18px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid var(--border-subtle)', marginBottom: 14 }}>
          <img src={window.WF_LOGO} width="34" height="34" alt="" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Wayfarer</span>
        </button>
        <div style={{ padding: '0 10px 10px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Manage</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {nav.map(([label, ic]) => {
            const on = section === label;
            return (
              <button key={label} onClick={() => setSection(label)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', minHeight: 44, borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', background: on ? 'var(--color-primary-soft)' : 'transparent', color: on ? 'var(--color-primary)' : 'var(--text-body)', fontWeight: on ? 700 : 500, fontSize: 15, textAlign: 'start' }}>
                <Icon name={ic} size={19} color={on ? 'var(--color-primary)' : 'var(--text-muted)'} />{label}
              </button>
            );
          })}
        </nav>
        <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 'auto', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {isNarrow && (
            <div style={{ display: 'flex', gap: 10, padding: '0 4px 8px' }}>
              <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ flex: 1, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', color: 'var(--text-body)', fontWeight: 600, fontSize: 14 }}><Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />{theme === 'dark' ? 'Light' : 'Dark'}</button>
              <button onClick={onToggleDir} aria-label="Toggle text direction" style={{ flex: 1, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', color: 'var(--text-body)', fontWeight: 600, fontSize: 14 }}>{dir === 'rtl' ? 'RTL' : 'LTR'}</button>
            </div>
          )}
          <button onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', minHeight: 44, borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', background: 'transparent', color: 'var(--text-body)', fontSize: 15, width: '100%', textAlign: 'start' }}><Icon name="LogOut" size={19} color="var(--text-muted)" />Sign out</button>
        </div>
      </aside>

      {/* Main column — fixed header + internally scrolling content */}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <header style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 28px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
            {isNarrow && <button onClick={() => setNavOpen(true)} aria-label="Menu" style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-strong)', flexShrink: 0 }}><Icon name="Menu" size={22} /></button>}
            <div style={{ minWidth: 0 }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.15, fontWeight: 600, color: 'var(--text-strong)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section}</h1>
              {!isNarrow && <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '2px 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Welcome back, Mara — here's what's happening.</p>}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
            {!isNarrow && <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-body)' }}><Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={19} /></button>}
            {!isNarrow && <button onClick={onToggleDir} aria-label="Toggle text direction" title={dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'} style={{ height: 42, padding: '0 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', color: 'var(--text-body)', fontWeight: 700, fontSize: 13 }}>{dir === 'rtl' ? 'RTL' : 'LTR'}</button>}
            {!isNarrow && <Button variant="primary" size="sm" iconLeft={<Icon name="Plus" size={16} color="#fff" />} onClick={() => setSection('Bookings')}>New booking</Button>}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingInlineStart: isNarrow ? 0 : 8, borderInlineStart: isNarrow ? 'none' : '1px solid var(--border-subtle)' }}>
              <Avatar name="Mara Okafor" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop" size="md" />
              {!isNarrow && (
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>Mara Okafor</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Admin</div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <main ref={mainRef} style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {section === 'Overview' && (
            <React.Fragment>
              <StatsRow />
              <Panel title="Recent bookings" action={<button onClick={() => setSection('Bookings')} style={{ background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>View all</button>}>
                <BookingsTable rows={bookings.slice(0, 5)} />
              </Panel>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <DeparturesPanel />
                <Panel title="Bookings by region">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, marginBottom: 5 }}><span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{region}</span><span className="u-mono" style={{ color: 'var(--text-muted)' }}>{pct}%</span></div>
                        <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-sunk)', overflow: 'hidden' }}><div style={{ width: pct + '%', height: '100%', background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})` }} /></div>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16 }}>
                <RevenueChart />
                <TasksPanel />
              </div>
              <TopTripsPanel />
            </React.Fragment>
          )}

          {section === 'Bookings' && (
            <React.Fragment>
              <StatsRow />
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['All', 'Confirmed', 'Pending', 'Cancelled'].map((f) => <Tag key={f} selected={bookFilter === f} onClick={() => setBookFilter(f)}>{f}</Tag>)}
                <div style={{ marginInlineStart: 'auto' }}><Button size="sm" variant="primary" iconLeft={<Icon name="Plus" size={15} color="#fff" />} onClick={() => setSection('Bookings')}>New booking</Button></div>
              </div>
              <Panel title={`All bookings · ${shownBookings.length}`}>
                <BookingsTable rows={shownBookings} />
              </Panel>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {[['Confirmed', '5', 'success', 'CircleCheck'], ['Pending', '2', 'warning', 'Clock'], ['Cancelled', '1', 'error', 'CircleX']].map(([l, v, tone, ic], i) => (
                  <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: `var(--${tone}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={21} color={`var(--${tone}-500)`} /></div>
                    <div><div className="u-mono" style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{l}</div></div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {section === 'Reports' && (
            <React.Fragment>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {[['DollarSign', '$412k', 'Revenue YTD'], ['TrendingUp', '+18%', 'vs last year'], ['Receipt', '$1,920', 'Avg. booking'], ['Star', '4.9', 'Avg. rating']].map(([ic, v, l], i) => (
                  <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={21} color="var(--color-primary)" /></div>
                    <div><div className="u-mono" style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{l}</div></div>
                  </div>
                ))}
              </div>
              <RevenueChart />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Panel title="Bookings by region">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[['Asia', 38, 'pine'], ['Europe', 27, 'marigold'], ['Americas', 21, 'clay'], ['Africa', 14, 'success']].map(([region, pct, tone], i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, marginBottom: 5 }}><span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{region}</span><span className="u-mono" style={{ color: 'var(--text-muted)' }}>{pct}%</span></div>
                        <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-sunk)', overflow: 'hidden' }}><div style={{ width: pct + '%', height: '100%', background: `var(--${tone === 'pine' ? 'pine-500' : tone === 'marigold' ? 'marigold-400' : tone === 'clay' ? 'clay-400' : 'success-500'})` }} /></div>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Booking channels">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {[['Website', '$248k', 60], ['Referral', '$103k', 25], ['Partners', '$41k', 10], ['Repeat guests', '$20k', 5]].map(([ch, rev, pct], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                        <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{ch}</span>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{pct}%</span>
                        <span className="u-mono" data-ltr style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', width: 56, textAlign: 'end' }}>{rev}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
              <TopTripsPanel />
            </React.Fragment>
          )}

          {section === 'Travelers' && (
            <React.Fragment>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {[['Users', '1,284', 'Total travelers'], ['UserPlus', '38', 'New this month'], ['Award', '312', 'Gold members'], ['Repeat', '46%', 'Repeat rate']].map(([ic, v, l], i) => (
                  <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={21} color="var(--color-primary)" /></div>
                    <div><div className="u-mono" style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{l}</div></div>
                  </div>
                ))}
              </div>
              <Panel title="Travelers" action={<button onClick={() => window.print()} style={{ background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Export CSV</button>}>
                {isNarrow ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {travelers.map((t, i) => (
                      <div key={i} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                          <Avatar name={t[0]} size="sm" />
                          <span style={{ flex: 1, fontWeight: 700, color: 'var(--text-strong)' }}>{t[0]}</span>
                          <Badge tone={t[5]}>{t[4]}</Badge>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 12.5, color: 'var(--text-muted)' }}>
                          <span>{t[1]}</span><span>{t[2]}</span><span className="u-mono">{t[3]} trips</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead><tr>{['Name', 'Email', 'Country', 'Trips', 'Tier'].map((h) => <th key={h} style={{ textAlign: 'start', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '12px 4px' }}>{h}</th>)}</tr></thead>
                    <tbody>
                      {travelers.map((t, i) => (
                        <tr key={i} style={{ borderTop: '1px solid var(--border-subtle)' }}>
                          <td style={{ padding: '14px 4px' }}><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Avatar name={t[0]} size="sm" /><span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{t[0]}</span></div></td>
                          <td style={{ padding: '14px 4px', color: 'var(--text-body)' }}>{t[1]}</td>
                          <td style={{ padding: '14px 4px', color: 'var(--text-body)' }}>{t[2]}</td>
                          <td className="u-mono" style={{ padding: '14px 4px', color: 'var(--text-body)' }}>{t[3]}</td>
                          <td style={{ padding: '14px 4px' }}><Badge tone={t[5]}>{t[4]}</Badge></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                )}
              </Panel>
              <TopTripsPanel />
            </React.Fragment>
          )}

          {section === 'Settings' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Panel title="Company profile">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[['Company', 'Wayfarer Travel Co.'], ['Support email', 'hello@wayfarer.travel'], ['Phone', '+351 21 000 0000'], ['Base currency', 'USD ($)'], ['Timezone', 'WET · Lisbon']].map(([l, v], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: i < 4 ? 12 : 0 }}>
                      <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{l}</span><span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel title="Booking settings">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Free cancellation window', '30 days'], ['Auto-confirm bookings', 'On'], ['Deposit required', 'No'], ['Max group size', '14 travelers'], ['Booking fee', '4%']].map(([l, v], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: 14, color: 'var(--text-strong)' }}>{l}</span><span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel title="Team">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Mara Okafor', 'Owner'], ['Liam Chen', 'Trip manager'], ['Sofia Reyes', 'Support'], ['Diego Marín', 'Partnerships']].map(([n, role], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <Avatar name={n} size="sm" />
                      <span style={{ flex: 1, fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' }}>{n}</span>
                      <Badge tone="neutral">{role}</Badge>
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel title="Notifications">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['New booking alerts', true], ['Cancellation alerts', true], ['Daily summary email', true], ['Low availability warnings', false], ['Marketing reports', false]].map(([l, on], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: 14, color: 'var(--text-strong)' }}>{l}</span>
                      <span style={{ width: 42, height: 24, borderRadius: 'var(--radius-pill)', background: on ? 'var(--color-primary)' : 'var(--border-default)', position: 'relative', flexShrink: 0 }}><span style={{ position: 'absolute', top: 3, insetInlineStart: on ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff' }} /></span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          )}

          </div>
        </main>
      </div>
    </div>
  );
}
window.DashboardScreen = DashboardScreen;


// Traveler (client) dashboard — manage bookings, itineraries, documents, updates.
// window.ClientDashboardScreen.

// Isolated countdown — only THIS component re-renders each second, so the rest
// of the dashboard (and its images) never blink.
function Countdown({ target }) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  const diff = Math.max(0, target - now);
  const cd = [[Math.floor(diff / 86400000), 'days'], [Math.floor(diff / 3600000) % 24, 'hrs'], [Math.floor(diff / 60000) % 60, 'min'], [Math.floor(diff / 1000) % 60, 'sec']];
  return (
    <React.Fragment>
      {cd.map(([v, l], i) => (
        <div key={i} style={{ minWidth: 62, textAlign: 'center', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)', borderRadius: 'var(--radius-md)', padding: '10px 8px' }}>
          <div className="u-mono" style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>{String(v).padStart(2, '0')}</div>
          <div style={{ fontSize: 11, color: 'var(--stone-200)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
        </div>
      ))}
    </React.Fragment>
  );
}

function ClientDashboardScreen({ onNav, onOpenTrip, theme, onToggleTheme, dir, onToggleDir }) {
  const { Badge, Avatar, Button, Rating, TripCard } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const trips = window.WF_TRIPS;
  const next = trips.find((t) => t.id === 'kyoto') || trips[0];
  const [section, setSection] = React.useState('Overview');
  const mainRef = React.useRef(null);
  React.useEffect(() => { if (mainRef.current) mainRef.current.scrollTop = 0; }, [section]);
  const [openDay, setOpenDay] = React.useState(0);
  const [docs, setDocs] = React.useState([
    { name: 'Passport.pdf', type: 'Passport', status: 'Verified', tone: 'success' },
    { name: 'Travel-insurance.pdf', type: 'Insurance', status: 'In review', tone: 'warning' },
    { name: null, type: 'Japan visa', status: 'Action needed', tone: 'error' },
    { name: 'Emergency-contact', type: 'Emergency contact', status: 'Complete', tone: 'success' },
  ]);
  const fileRef = React.useRef(null);
  const [pendingType, setPendingType] = React.useState(null);

  const nav = [['Overview', 'LayoutDashboard'], ['My trips', 'Luggage'], ['Itinerary', 'Map'], ['Documents', 'FileText'], ['Updates', 'Bell'], ['Profile', 'User']];

  const bookings = [
    { trip: next, date: 'Sep 14, 2026', status: 'Confirmed', tone: 'success', ref: 'WF-2K9X4', when: 'upcoming' },
    { trip: trips.find((t) => t.id === 'iceland') || trips[3], date: 'Oct 21, 2026', status: 'Payment due', tone: 'warning', ref: 'WF-7H3L2', when: 'upcoming' },
    { trip: trips.find((t) => t.id === 'amalfi') || trips[4], date: 'May 3, 2025', status: 'Completed', tone: 'neutral', ref: 'WF-1A0P8', when: 'past' },
  ];

  const updates = [
    ['UserCheck', 'pine', 'Your guide is confirmed', 'Mara Okafor will lead your Kyoto trip. She has 9 years of experience in the region.', '2 days ago'],
    ['Plane', 'marigold', 'Flight details received', 'We\u2019ve logged your arrival into Kansai (KIX) on Sep 13. Airport transfer is arranged.', '5 days ago'],
    ['ListChecks', 'pine', 'Pre-trip checklist ready', 'Your packing list and what-to-know guide for Kyoto are now available.', '1 week ago'],
    ['CloudSun', 'clay', 'Weather note for Kyoto', 'Expect mild 18\u201324\u00b0C days in September. Pack light layers and a rain shell.', '1 week ago'],
    ['Users', 'pine', 'Meet your travel group', 'You\u2019ll be travelling with 9 others from 4 countries. Say hello in the group chat.', '2 weeks ago'],
    ['CreditCard', 'marigold', 'Balance reminder', 'Your remaining balance is due 30 days before departure. No action needed yet.', '2 weeks ago'],
    ['BookOpen', 'pine', 'Kyoto reading list added', 'A short guide to temple etiquette, tea culture, and local phrases is in your docs.', '3 weeks ago'],
  ];

  // countdown to departure (demo: 56 days out) — isolated below so the page doesn't re-render each tick
  const target = React.useMemo(() => Date.now() + 1000 * 60 * 60 * 24 * 56, []);

  function pickFile(type) { setPendingType(type); fileRef.current && fileRef.current.click(); }
  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (f && pendingType) setDocs((d) => d.map((x) => x.type === pendingType ? { ...x, name: f.name, status: 'In review', tone: 'warning' } : x));
    setPendingType(null); e.target.value = '';
  }

  const docComplete = docs.filter((d) => d.tone === 'success').length;

  // --- reusable bits ---
  const Panel = ({ title, action, children }) => (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-strong)', margin: 0, flex: 1, minWidth: 160 }}>{title}</h2>
        {action && <div style={{ flexShrink: 0 }}>{action}</div>}
      </div>
      <div style={{ padding: 20 }}>{children}</div>
    </div>
  );

  const NextTripHero = () => (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: 240, display: 'flex', alignItems: 'flex-end', boxShadow: 'var(--shadow-md)' }}>
      <img src={next.image} alt={next.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,53,42,0.92) 0%, rgba(6,53,42,0.35) 60%, rgba(6,53,42,0.1) 100%)' }} />
      <div style={{ position: 'relative', padding: '28px 30px', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <Badge tone="marigold" variant="solid">Next departure</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: '#fff', margin: '12px 0 4px' }}>{next.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--stone-100)', fontSize: 15 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="MapPin" size={16} color="var(--marigold-300)" />{next.location}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="Calendar" size={16} color="var(--marigold-300)" />Sep 14, 2026</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Countdown target={target} />
        </div>
      </div>
    </div>
  );

  const BookingCard = ({ b }) => (
    <div style={{ display: 'flex', flexDirection: isNarrow ? 'column' : 'row', gap: isNarrow ? 14 : 16, alignItems: isNarrow ? 'stretch' : 'center', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 14 }}>
      <img src={b.trip.image} alt="" style={{ width: isNarrow ? '100%' : 84, height: isNarrow ? 150 : 84, borderRadius: 'var(--radius-md)', objectFit: 'cover', flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
          <Badge tone={b.tone}>{b.status}</Badge>
          <span className="u-mono" data-ltr style={{ fontSize: 12, color: 'var(--text-muted)' }}>{b.ref}</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>{b.trip.title}</div>
        <div style={{ fontSize: 13.5, color: 'var(--text-muted)', display: 'flex', gap: 8, marginTop: 3, flexWrap: 'wrap' }}>
          <span>{b.trip.location}</span><span>·</span><span>{b.date}</span><span>·</span><span>{b.trip.duration}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: isNarrow ? 'row' : 'column', gap: 8 }}>
        <Button size="sm" variant={b.when === 'past' ? 'secondary' : 'primary'} fullWidth={isNarrow} onClick={() => onOpenTrip(b.trip.id)}>{b.when === 'past' ? 'Rebook' : 'View trip'}</Button>
        {b.status === 'Payment due' && <Button size="sm" variant="accent" fullWidth={isNarrow} onClick={() => onNav('book')}>Pay now</Button>}
      </div>
    </div>
  );

  const DocRow = ({ d }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', padding: '14px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-md)', background: d.name ? 'var(--color-primary-soft)' : 'var(--surface-sunk)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={d.name ? 'FileCheck' : 'FilePlus'} size={20} color={d.name ? 'var(--color-primary)' : 'var(--text-muted)'} />
      </div>
      <div style={{ flex: 1, minWidth: 140 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-strong)' }}>{d.type}</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.name || 'Not uploaded yet'}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginInlineStart: isNarrow ? '56px' : 'auto', width: isNarrow ? 'calc(100% - 56px)' : 'auto' }}>
        <Badge tone={d.tone}>{d.status}</Badge>
        <Button size="sm" variant={d.name ? 'ghost' : 'secondary'} onClick={() => pickFile(d.type)} iconLeft={<Icon name={d.name ? 'RefreshCw' : 'Upload'} size={15} color="var(--color-primary)" />}>{d.name ? 'Replace' : 'Upload'}</Button>
      </div>
    </div>
  );

  const isNarrow = window.useMediaQuery('(max-width: 900px)');
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => { setNavOpen(false); }, [section]);
  return (
    <div style={{ background: 'var(--surface-canvas)', height: '100vh', display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '248px 1fr', overflow: 'hidden' }}>
      <input ref={fileRef} type="file" onChange={onFile} style={{ display: 'none' }} />
      {isNarrow && navOpen && <div onClick={() => setNavOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 79 }} />}
      {/* Sidebar — full height on desktop; off-canvas drawer on mobile/tablet */}
      <aside style={isNarrow
        ? { position: 'fixed', top: 0, insetInlineStart: 0, width: 280, height: '100vh', zIndex: 80, display: 'flex', flexDirection: 'column', background: 'var(--surface-card)', borderInlineEnd: '1px solid var(--border-subtle)', padding: 16, transform: navOpen ? 'translateX(0)' : 'translateX(-110%)', transition: 'transform var(--dur-base) var(--ease-out)', boxShadow: navOpen ? 'var(--shadow-xl)' : 'none' }
        : { height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-card)', borderInlineEnd: '1px solid var(--border-subtle)', padding: 16 }}>
        <button onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '6px 8px 18px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid var(--border-subtle)', marginBottom: 14 }}>
          <img src={window.WF_LOGO} width="34" height="34" alt="" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Wayfarer</span>
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {nav.map(([label, ic]) => {
            const on = section === label;
            return (
              <button key={label} onClick={() => setSection(label)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', minHeight: 44, borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', background: on ? 'var(--color-primary-soft)' : 'transparent', color: on ? 'var(--color-primary)' : 'var(--text-body)', fontWeight: on ? 700 : 500, fontSize: 14.5, textAlign: 'start' }}>
                <Icon name={ic} size={19} color={on ? 'var(--color-primary)' : 'var(--text-muted)'} />{label}
                {label === 'Updates' && <span style={{ marginInlineStart: 'auto', fontSize: 11, fontWeight: 700, color: '#fff', background: 'var(--clay-400)', borderRadius: 'var(--radius-pill)', minWidth: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px' }}>{updates.length}</span>}
              </button>
            );
          })}
        </nav>
        <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 'auto', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {isNarrow && (
            <div style={{ display: 'flex', gap: 10, padding: '0 4px 8px' }}>
              <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ flex: 1, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', color: 'var(--text-body)', fontWeight: 600, fontSize: 14 }}><Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />{theme === 'dark' ? 'Light' : 'Dark'}</button>
              <button onClick={onToggleDir} aria-label="Toggle text direction" style={{ flex: 1, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', color: 'var(--text-body)', fontWeight: 600, fontSize: 14 }}>{dir === 'rtl' ? 'RTL' : 'LTR'}</button>
            </div>
          )}
          <button onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', minHeight: 44, borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer', background: 'transparent', color: 'var(--text-body)', fontSize: 14.5, width: '100%', textAlign: 'start' }}><Icon name="LogOut" size={19} color="var(--text-muted)" />Sign out</button>
        </div>
      </aside>

      {/* Main column — fixed header + internally scrolling content */}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <header style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 28px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
            {isNarrow && <button onClick={() => setNavOpen(true)} aria-label="Menu" style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-strong)', flexShrink: 0 }}><Icon name="Menu" size={22} /></button>}
            <div style={{ minWidth: 0 }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.15, fontWeight: 600, color: 'var(--text-strong)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {section}
              </h1>
              {!isNarrow && <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: '2px 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {section === 'Overview' ? 'Your next adventure is just around the corner.' : 'Manage your ' + section.toLowerCase() + ' for upcoming trips.'}
              </p>}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
            {!isNarrow && <button onClick={onToggleTheme} aria-label="Toggle theme" style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-body)' }}><Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={19} /></button>}
            <button aria-label="Notifications" onClick={() => setSection('Updates')} style={{ position: 'relative', width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: isNarrow ? 'none' : 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-body)' }}><Icon name="Bell" size={19} /><span style={{ position: 'absolute', top: 8, insetInlineEnd: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--clay-400)' }} /></button>
            {!isNarrow && <button onClick={onToggleDir} aria-label="Toggle text direction" title={dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'} style={{ height: 42, padding: '0 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', cursor: 'pointer', color: 'var(--text-body)', fontWeight: 700, fontSize: 13 }}>{dir === 'rtl' ? 'RTL' : 'LTR'}</button>}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingInlineStart: isNarrow ? 0 : 6, borderInlineStart: isNarrow ? 'none' : '1px solid var(--border-subtle)' }}>
              <Avatar name="Jordan Rivera" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&q=70&auto=format&fit=crop" size="md" />
              {!isNarrow && (
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>Jordan Rivera</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Gold traveler</div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <main ref={mainRef} style={{ flex: 1, overflowY: 'auto', minWidth: 0, padding: '24px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {section === 'Overview' && (
            <React.Fragment>
              <NextTripHero />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {[['Luggage', '2', 'Upcoming trips', 'pine'], ['FileText', docComplete + '/4', 'Documents ready', 'marigold'], ['Award', '14', 'Countries visited', 'success']].map(([ic, v, l, tone], i) => (
                  <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={22} color="var(--color-primary)" /></div>
                    <div><div className="u-mono" style={{ fontSize: 26, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{l}</div></div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Panel title="Latest updates" action={<button onClick={() => setSection('Updates')} style={{ background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer' }}>See all</button>}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {updates.slice(0, 3).map((u, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: `var(--${u[1]}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={u[0]} size={18} color={`var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`} /></div>
                        <div><div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' }}>{u[2]}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{u[4]}</div></div>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Documents" action={<button onClick={() => setSection('Documents')} style={{ background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer' }}>Manage</button>}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {docs.map((d, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                        <Icon name={d.name ? 'FileCheck' : 'FilePlus'} size={17} color={d.name ? 'var(--color-primary)' : 'var(--text-muted)'} />
                        <span style={{ flex: 1, fontSize: 14, color: 'var(--text-strong)' }}>{d.type}</span>
                        <Badge tone={d.tone}>{d.status}</Badge>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
              <Panel title="Get ready for Kyoto" action={<span style={{ fontSize: 13, color: 'var(--text-muted)' }}>3 of 6 done</span>}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Booking confirmed', true], ['Passport uploaded', true], ['Travel insurance added', true], ['Visa documents', false], ['Pre-trip questionnaire', false], ['Join the group chat', false]].map(([label, done], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <span style={{ width: 24, height: 24, borderRadius: '50%', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: done ? 'var(--success-50)' : 'var(--surface-sunk)', border: done ? 'none' : '1.5px solid var(--border-default)' }}>{done && <Icon name="Check" size={14} color="var(--success-500)" strokeWidth={3} />}</span>
                      <span style={{ flex: 1, fontSize: 14.5, color: done ? 'var(--text-muted)' : 'var(--text-strong)', textDecoration: done ? 'line-through' : 'none' }}>{label}</span>
                      {!done && <Button size="sm" variant="ghost" onClick={() => setSection('Documents')}>Do it</Button>}
                    </div>
                  ))}
                </div>
              </Panel>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-strong)', margin: 0 }}>Recommended for you</h2>
                  <button onClick={() => onNav('services')} style={{ background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer' }}>Browse all</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {trips.filter((t) => t.id !== next.id).slice(0, 3).map((t) => (
                    <TripCard key={t.id} image={t.image} title={t.title} location={t.location} badge={t.badge} badgeTone={t.badgeTone} rating={t.rating} reviews={t.reviews} duration={t.duration} price={t.price} onClick={() => onOpenTrip(t.id)} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          )}

          {section === 'My trips' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {[['Plane', '14', 'Trips taken'], ['Globe2', '11', 'Countries'], ['Moon', '92', 'Nights away'], ['Footprints', '1,240', 'Miles trekked']].map(([ic, v, l], i) => (
                  <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={21} color="var(--color-primary)" /></div>
                    <div><div className="u-mono" style={{ fontSize: 24, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{l}</div></div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Upcoming</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{bookings.filter((b) => b.when === 'upcoming').map((b, i) => <BookingCard key={i} b={b} />)}</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Past trips</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{bookings.filter((b) => b.when === 'past').map((b, i) => <BookingCard key={i} b={b} />)}</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Saved for later</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {trips.filter((t) => ['santorini', 'safari', 'norway'].includes(t.id)).map((t) => (
                    <TripCard key={t.id} image={t.image} title={t.title} location={t.location} badge={t.badge} badgeTone={t.badgeTone} rating={t.rating} reviews={t.reviews} duration={t.duration} price={t.price} saved onClick={() => onOpenTrip(t.id)} />
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)', minHeight: 200, display: 'flex', alignItems: 'center' }}>
                <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=72&auto=format&fit=crop" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,53,42,0.88), rgba(6,53,42,0.5))' }} />
                <div style={{ position: 'relative', padding: '32px 36px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: '#fff', margin: '0 0 8px' }}>Ready for your next adventure?</h2>
                  <p style={{ fontSize: 16, color: 'var(--stone-100)', margin: '0 0 20px', maxWidth: 440 }}>You've visited 11 countries with us. There are 30+ more waiting.</p>
                  <Button variant="accent" size="lg" onClick={() => onNav('services')}>Browse new trips</Button>
                </div>
              </div>
            </div>
          )}

          {section === 'Itinerary' && (
            <React.Fragment>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 180, display: 'flex', alignItems: 'flex-end' }}>
                <img src={next.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
                <div style={{ position: 'relative', padding: '20px 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: '#fff' }}>{next.title}</div>
                    <div style={{ fontSize: 14, color: 'var(--stone-100)' }}>{next.location} · {next.duration} · {next.group}</div>
                  </div>
                  <Button size="sm" variant="inverse" onClick={() => onOpenTrip(next.id)}>View trip page</Button>
                </div>
              </div>
              <Panel title={`${next.title} · day by day`} action={<Button size="sm" variant="secondary" iconLeft={<Icon name="Download" size={15} color="var(--color-primary)" />} onClick={() => window.print()}>Download PDF</Button>}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {next.itinerary.map(([h, p], i) => {
                    const on = openDay === i;
                    return (
                      <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                        <button onClick={() => setOpenDay(on ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'start' }}>
                          <span style={{ width: 34, height: 34, borderRadius: '50%', background: on ? 'var(--color-primary)' : 'var(--surface-sunk)', color: on ? 'var(--text-on-primary)' : 'var(--text-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                          <span style={{ flex: 1, fontWeight: 700, fontSize: 15.5, color: 'var(--text-strong)' }}>Day {i + 1} · {h}</span>
                          <Icon name={on ? 'ChevronUp' : 'ChevronDown'} size={18} color="var(--text-muted)" />
                        </button>
                        {on && <p style={{ margin: '0 0 16px 48px', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{p}</p>}
                      </div>
                    );
                  })}
                </div>
              </Panel>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Panel title="What's included">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {['Local expert guide throughout', 'All accommodation', 'Listed activities & fees', 'Most breakfasts & welcome dinner', 'Airport transfers'].map((l, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="Check" size={16} color="var(--success-500)" strokeWidth={2.5} /><span style={{ fontSize: 14.5, color: 'var(--text-body)' }}>{l}</span></div>
                    ))}
                  </div>
                </Panel>
                <Panel title="What to pack">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {['Light layers', 'Rain shell', 'Walking shoes', 'Power adapter', 'Reusable bottle', 'Sun hat', 'Day pack', 'Camera'].map((t) => <Badge key={t} tone="neutral">{t}</Badge>)}
                  </div>
                </Panel>
              </div>
              <Panel title="Good to know">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Languages', 'Local language & currency', 'Japanese · Japanese yen (¥). English is limited outside cities.'], ['Plug', 'Power & connectivity', 'Type A/B sockets, 100V. Pocket Wi-Fi is provided for the group.'], ['HeartPulse', 'Health & safety', 'No vaccinations required. Your guide carries a first-aid kit throughout.'], ['Wallet', 'Spending money', 'Budget ~$40/day for lunches and extras. Cards widely accepted in Kyoto.']].map(([ic, h, p], i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={ic} size={19} color="var(--color-primary)" /></div>
                      <div><div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-strong)' }}>{h}</div><div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)', marginTop: 2 }}>{p}</div></div>
                    </div>
                  ))}
                </div>
              </Panel>
            </React.Fragment>
          )}

          {section === 'Documents' && (
            <React.Fragment>
              <div onClick={() => pickFile('Passport')} style={{ border: '2px dashed var(--border-default)', borderRadius: 'var(--radius-lg)', padding: '32px 24px', textAlign: 'center', cursor: 'pointer', background: 'var(--surface-card)' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--color-primary-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}><Icon name="UploadCloud" size={26} color="var(--color-primary)" /></div>
                <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>Drop files here or click to upload</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 4 }}>PDF, JPG or PNG · up to 10MB each. Encrypted &amp; private.</div>
              </div>
              <Panel title="Your travel documents">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12 }}>
                    <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{docComplete} of {docs.length} complete</span>
                    <div style={{ width: 160, height: 8, borderRadius: 4, background: 'var(--surface-sunk)', overflow: 'hidden' }}><div style={{ width: `${(docComplete / docs.length) * 100}%`, height: '100%', background: 'var(--color-primary)' }} /></div>
                  </div>
                  {docs.map((d, i) => <DocRow key={i} d={d} />)}
                </div>
              </Panel>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Panel title="Required for your trips">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[['Temples & Tea of Kyoto', 'Passport · Japan visa', 'clay'], ['Land of Fire & Ice', 'Passport only', 'success']].map(([trip, req, tone], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', padding: '12px 14px', background: 'var(--surface-sunk)', borderRadius: 'var(--radius-md)' }}>
                        <Icon name="Luggage" size={18} color="var(--color-primary)" />
                        <div style={{ flex: 1, minWidth: 120 }}><div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' }}>{trip}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{req}</div></div>
                        <Badge tone={tone}>{tone === 'clay' ? 'Action needed' : 'Ready'}</Badge>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Recent activity">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {[['Upload', 'Passport.pdf uploaded', '2 days ago'], ['ShieldCheck', 'Insurance received', '2 days ago'], ['Clock', 'Visa reminder sent', '4 days ago']].map(([ic, l, t], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                        <Icon name={ic} size={17} color="var(--text-muted)" />
                        <span style={{ flex: 1, fontSize: 14, color: 'var(--text-strong)' }}>{l}</span>
                        <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
              <Panel title="Need help with documents?">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Which documents do I need?', 'Requirements vary by destination — check each trip’s page, or your “Required for your trips” list above.'], ['Are my files secure?', 'Yes. All uploads are encrypted at rest and only visible to you and your trip coordinator.'], ['When are documents due?', 'Most are needed 30 days before departure; visa documents may be required earlier.']].map(([q, a], i) => (
                    <div key={i} style={{ padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-strong)', marginBottom: 4 }}>{q}</div>
                      <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>{a}</div>
                    </div>
                  ))}
                </div>
              </Panel>
            </React.Fragment>
          )}

          {section === 'Updates' && (
            <React.Fragment>
              <Panel title="Trip updates &amp; notifications">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {updates.map((u, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-md)', background: `var(--${u[1]}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={u[0]} size={20} color={`var(--${u[1] === 'pine' ? 'pine-600' : u[1] === 'marigold' ? 'marigold-600' : 'clay-500'})`} /></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                        <span style={{ fontWeight: 700, fontSize: 15.5, color: 'var(--text-strong)' }}>{u[2]}</span>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{u[4]}</span>
                      </div>
                      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: '4px 0 0' }}>{u[3]}</p>
                    </div>
                  </div>
                ))}
              </div>
              </Panel>
              <Panel title="Notification preferences">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Trip reminders & countdowns', true], ['Guide & itinerary changes', true], ['Document & visa alerts', true], ['Weather updates', false], ['Deals & new trips', false]].map(([label, on], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: 14.5, color: 'var(--text-strong)' }}>{label}</span>
                      <span style={{ width: 42, height: 24, borderRadius: 'var(--radius-pill)', background: on ? 'var(--color-primary)' : 'var(--border-default)', position: 'relative', flexShrink: 0 }}><span style={{ position: 'absolute', top: 3, insetInlineStart: on ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff' }} /></span>
                    </div>
                  ))}
                </div>
              </Panel>
            </React.Fragment>
          )}

          {section === 'Profile' && (
            <React.Fragment>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Panel title="Personal details">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[['Full name', 'Jordan Rivera'], ['Email', 'jordan@email.com'], ['Phone', '+1 (555) 014 2277'], ['Nationality', 'United States'], ['Date of birth', 'Mar 12, 1991']].map(([l, v], i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: i < 4 ? 12 : 0 }}>
                        <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{l}</span>
                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Travel preferences">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 18 }}>
                    {['Adventure', 'Culture', 'Food', 'Window seat', 'Vegetarian'].map((t) => <Badge key={t} tone="pine">{t}</Badge>)}
                  </div>
                  <Button variant="secondary" size="sm" fullWidth iconLeft={<Icon name="Settings" size={15} color="var(--color-primary)" />} onClick={() => onNav('contact')}>Edit preferences</Button>
                </Panel>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--surface-inverse)', padding: '26px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--marigold-300)' }}>Wayfarer rewards</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--stone-50)', margin: '6px 0 2px' }}>Gold traveler</div>
                  <div style={{ fontSize: 14, color: 'var(--stone-200)' }}>2,480 points · 520 to Platinum</div>
                </div>
                <div style={{ minWidth: 220 }}>
                  <div style={{ height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.18)', overflow: 'hidden' }}><div style={{ width: '82%', height: '100%', background: 'var(--marigold-400)' }} /></div>
                  <div style={{ fontSize: 12.5, color: 'var(--stone-200)', marginTop: 8, textAlign: 'end' }}>82% to next tier</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Panel title="Emergency contact">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {[['Name', 'Alex Rivera'], ['Relationship', 'Sibling'], ['Phone', '+1 (555) 660 1180']].map(([l, v], i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: i < 2 ? 12 : 0 }}>
                        <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{l}</span><span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Security">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[['Lock', 'Password', 'Updated 3 months ago'], ['Smartphone', 'Two-factor auth', 'Enabled'], ['Mail', 'Login alerts', 'On']].map(([ic, l, v], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                        <Icon name={ic} size={17} color="var(--color-primary)" />
                        <span style={{ flex: 1, fontSize: 14, color: 'var(--text-strong)' }}>{l}</span>
                        <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
              <Panel title="Travel history">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[['Amalfi Coast by Vespa', 'Italy', 'May 2025', '★ 5.0'], ['Cyclades Island Hopper', 'Greece', 'Sep 2024', '★ 4.8'], ['Atlas Mountains & Marrakech', 'Morocco', 'Apr 2024', '★ 4.9'], ['Vietnam: Hanoi to Halong', 'Vietnam', 'Nov 2023', '★ 4.7']].map(([trip, country, date, rating], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                      <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="MapPin" size={18} color="var(--color-primary)" /></div>
                      <div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-strong)' }}>{trip}</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{country} · {date}</div></div>
                      <span className="u-mono" style={{ fontSize: 13, color: 'var(--marigold-600)', fontWeight: 600 }}>{rating}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </React.Fragment>
          )}
          </div>
        </main>
      </div>
    </div>
  );
}
window.ClientDashboardScreen = ClientDashboardScreen;
