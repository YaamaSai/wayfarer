// Shared Lucide icon helper for the website UI kit. Exposes window.Icon.
function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && lucide[name]) {
      const el = lucide.createElement(lucide[name]);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke', color);
      el.setAttribute('stroke-width', strokeWidth);
      ref.current.innerHTML = el.outerHTML;
    }
  }, [name, size, color, strokeWidth]);
  return React.createElement('span', { ref, style: { display: 'inline-flex', alignItems: 'center', ...style } });
}
window.Icon = Icon;


// Loading-state utilities for the UI kit. Exposes window.Skeleton, window.TripCardSkeleton, window.useFakeLoad.
(function () {
  function useFakeLoad(ms) {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => { const t = setTimeout(() => setLoading(false), ms || 850); return () => clearTimeout(t); }, []);
    return loading;
  }
  function Skeleton({ w = '100%', h = 16, r = 'var(--radius-sm)', style = {} }) {
    return React.createElement('span', {
      'aria-hidden': true,
      style: {
        display: 'block', width: w, height: h, borderRadius: r,
        background: 'linear-gradient(90deg, var(--surface-sunk) 25%, var(--border-subtle) 37%, var(--surface-sunk) 63%)',
        backgroundSize: '400% 100%', animation: 'wf-shimmer 1.4s ease infinite', ...style,
      },
    });
  }
  function TripCardSkeleton() {
    return React.createElement('div', { style: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' } },
      React.createElement(Skeleton, { h: 0, style: { aspectRatio: '4 / 3', height: 'auto', borderRadius: 0 } }),
      React.createElement('div', { style: { padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10 } },
        React.createElement(Skeleton, { w: '40%', h: 12 }),
        React.createElement(Skeleton, { w: '80%', h: 20 }),
        React.createElement(Skeleton, { w: '55%', h: 14 }),
        React.createElement(Skeleton, { w: '35%', h: 22, style: { marginTop: 4 } }),
      ),
    );
  }
  // inject keyframes once
  if (!document.getElementById('wf-shimmer-kf')) {
    const s = document.createElement('style');
    s.id = 'wf-shimmer-kf';
    s.textContent = '@keyframes wf-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}';
    document.head.appendChild(s);
  }
  window.Skeleton = Skeleton;
  window.TripCardSkeleton = TripCardSkeleton;
  window.useFakeLoad = useFakeLoad;
})();


// Shared site header: mandatory booking menu, mobile hamburger, theme + RTL toggles.
// Exposes window.Header and window.useMediaQuery.
function useMediaQuery(query) {
  const [match, setMatch] = React.useState(() => window.matchMedia(query).matches);
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const fn = () => setMatch(m.matches);
    m.addEventListener('change', fn); fn();
    return () => m.removeEventListener('change', fn);
  }, [query]);
  return match;
}
window.useMediaQuery = useMediaQuery;

// Mandatory menu structure for a Booking/Reservation template.
// "Home" is rendered separately as a dropdown (Home 1 / Home 2).
const WF_NAV = [
  ['Services', 'services'],
  ['Gallery', 'gallery'], ['About', 'about'], ['Contact', 'contact'],
];
const WF_HOMES = [
  ['Home 1', 'home'],
  ['Home 2', 'home2'],
];
const WF_DASH = [
  ['Traveler', 'account'],
  ['Admin', 'dashboard'],
];

// Animated "Dashboards" dropdown (mirrors HomeMenu), placed after Contact.
function DashMenu({ onNav, active, isMobile }) {
  const Icon = window.Icon;
  const [open, setOpen] = React.useState(false);
  const isDash = active === 'account' || active === 'dashboard';
  const closeT = React.useRef(null);
  const openNow = () => { clearTimeout(closeT.current); setOpen(true); };
  const closeSoon = () => { closeT.current = setTimeout(() => setOpen(false), 120); };

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {WF_DASH.map(([label, dest]) => (
          <button key={dest} onClick={() => onNav(dest)} aria-current={active === dest ? 'page' : undefined}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '14px 8px', minHeight: 44, fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: active === dest ? 700 : 500, color: active === dest ? 'var(--color-primary)' : 'var(--text-body)', textAlign: 'start' }}>{label}</button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button onClick={() => setOpen((o) => !o)} aria-haspopup="true" aria-expanded={open} aria-current={isDash ? 'page' : undefined}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: open ? 'var(--surface-sunk)' : 'none', border: 'none', cursor: 'pointer', padding: '10px 13px', minHeight: 44, borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: isDash ? 700 : 500, color: isDash ? 'var(--color-primary)' : 'var(--text-body)' }}>
        Dashboards <Icon name="ChevronDown" size={16} color="currentColor" style={{ transition: 'transform var(--dur-fast) var(--ease-out)', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      <div role="menu" style={{ position: 'absolute', top: 'calc(100% + 8px)', insetInlineEnd: 0, minWidth: 168, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 8, display: 'flex', flexDirection: 'column', gap: 2, transformOrigin: 'top', opacity: open ? 1 : 0, transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)', pointerEvents: open ? 'auto' : 'none', transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)', zIndex: 60 }}>
        {WF_DASH.map(([label, dest]) => {
          const on = active === dest;
          return (
            <button key={dest} role="menuitem" onClick={() => { onNav(dest); setOpen(false); }}
              style={{ background: on ? 'var(--color-primary-soft)' : 'none', border: 'none', cursor: 'pointer', padding: '11px 14px', borderRadius: 'var(--radius-md)', textAlign: 'start', width: '100%', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: on ? 700 : 500, color: on ? 'var(--color-primary)' : 'var(--text-body)' }}
              onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'var(--surface-sunk)'; }}
              onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'none'; }}>{label}</button>
          );
        })}
      </div>
    </div>
  );
}

// Animated "Home" dropdown used in the navbar on every page.
function HomeMenu({ onNav, active, isMobile }) {
  const Icon = window.Icon;
  const [open, setOpen] = React.useState(false);
  const isHome = active === 'home' || active === 'home2';
  const closeT = React.useRef(null);
  const openNow = () => { clearTimeout(closeT.current); setOpen(true); };
  const closeSoon = () => { closeT.current = setTimeout(() => setOpen(false), 120); };

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {WF_HOMES.map(([label, dest]) => (
          <button key={dest} onClick={() => onNav(dest)} aria-current={active === dest ? 'page' : undefined}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '14px 8px', minHeight: 44, fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: active === dest ? 700 : 500, color: active === dest ? 'var(--color-primary)' : 'var(--text-body)', textAlign: 'start' }}>{label}</button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button onClick={() => setOpen((o) => !o)} aria-haspopup="true" aria-expanded={open} aria-current={isHome ? 'page' : undefined}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: open ? 'var(--surface-sunk)' : 'none', border: 'none', cursor: 'pointer', padding: '10px 13px', minHeight: 44, borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: isHome ? 700 : 500, color: isHome ? 'var(--color-primary)' : 'var(--text-body)' }}>
        Home <Icon name="ChevronDown" size={16} color="currentColor" style={{ transition: 'transform var(--dur-fast) var(--ease-out)', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      <div role="menu" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, minWidth: 168, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 8, display: 'flex', flexDirection: 'column', gap: 2, transformOrigin: 'top', opacity: open ? 1 : 0, transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)', pointerEvents: open ? 'auto' : 'none', transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)', zIndex: 60 }}>
        {WF_HOMES.map(([label, dest]) => {
          const on = active === dest;
          return (
            <button key={dest} role="menuitem" onClick={() => { onNav(dest); setOpen(false); }}
              style={{ background: on ? 'var(--color-primary-soft)' : 'none', border: 'none', cursor: 'pointer', padding: '11px 14px', borderRadius: 'var(--radius-md)', textAlign: 'start', width: '100%', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: on ? 700 : 500, color: on ? 'var(--color-primary)' : 'var(--text-body)' }}
              onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'var(--surface-sunk)'; }}
              onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'none'; }}>{label}</button>
          );
        })}
      </div>
    </div>
  );
}

function Header({ onNav, active, theme, onToggleTheme, dir, onToggleDir }) {
  const { Button } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const isMobile = window.useMediaQuery('(max-width: 1023px)');
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { setOpen(false); }, [active]);

  const navBtn = (label, dest) => (
    <button key={dest + label} onClick={() => onNav(dest)} aria-current={active === dest ? 'page' : undefined}
      style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: isMobile ? '14px 8px' : '10px 13px',
        minHeight: 44, borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 15,
        fontWeight: active === dest ? 700 : 500, color: active === dest ? 'var(--color-primary)' : 'var(--text-body)',
        textAlign: 'start', width: isMobile ? '100%' : 'auto',
      }}
      onMouseEnter={(e) => { if (active !== dest) e.currentTarget.style.background = 'var(--surface-sunk)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}>{label}</button>
  );

  const toggles = (
    <React.Fragment>
      <button onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title="Toggle theme"
        style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-body)' }}>
        <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={19} />
      </button>
      <button onClick={onToggleDir} aria-label="Toggle text direction" title={dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL (Arabic/Hebrew)'}
        style={{ height: 44, padding: '0 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer', color: 'var(--text-body)', fontWeight: 700, fontSize: 13 }}>
        {dir === 'rtl' ? 'RTL' : 'LTR'}
      </button>
    </React.Fragment>
  );

  const accountMenu = null;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'color-mix(in srgb, var(--surface-canvas) 86%, transparent)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', gap: 22 }}>
        <button onClick={() => onNav('home')} aria-label="Wayfarer home" style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <img src={window.WF_LOGO} width="38" height="38" alt="" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Wayfarer</span>
        </button>

        {!isMobile && <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}><HomeMenu onNav={onNav} active={active} isMobile={false} />{WF_NAV.map(([l, d]) => navBtn(l, d))}<DashMenu onNav={onNav} active={active} isMobile={false} /></nav>}

        <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          {!isMobile && toggles}
          {!isMobile && <Button variant="accent" size="sm" onClick={() => onNav('login')} style={{ height: 44, borderRadius: 'var(--radius-md)', padding: '0 20px' }}>Login</Button>}
          {accountMenu}
          {isMobile && (
            <button onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}
              style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-strong)' }}>
              <Icon name={open ? 'X' : 'Menu'} size={22} />
            </button>
          )}
        </div>
      </div>

      {isMobile && open && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-canvas)', padding: '10px 20px 18px', maxHeight: 'calc(100vh - 72px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <nav aria-label="Primary mobile" style={{ display: 'flex', flexDirection: 'column' }}><HomeMenu onNav={onNav} active={active} isMobile={true} />{WF_NAV.map(([l, d]) => navBtn(l, d))}</nav>
          <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 8, paddingTop: 12, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '0 8px 4px' }}>Dashboards</span>
            <DashMenu onNav={onNav} active={active} isMobile={true} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>{toggles}
            <div style={{ marginInlineStart: 'auto' }}><Button variant="accent" size="sm" onClick={() => onNav('login')}>Login</Button></div>
          </div>
        </div>
      )}
    </header>
  );
}
window.Header = Header;


// Site footer with newsletter signup + social. Exposes window.Footer.
function Footer({ onNav }) {
  const { Button, Input } = window.DesignSystem_b5472a;
  const Icon = window.Icon;
  const cols = [
    ['Explore', [['Home — Editorial', 'home2'], ['Book Now', 'book'], ['Services', 'services'], ['Gallery', 'gallery']]],
    ['Company', [['About', 'about'], ['Contact', 'contact'], ['Dashboard', 'dashboard']]],
    ['Support', [['Help center', 'contact'], ['Dashboard', 'dashboard'], ['Coming soon', 'soon'], ['404 page', '404']]],
  ];
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: 'var(--stone-200)' }}>
      {/* Newsletter band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="footer-newsletter-row" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '36px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: 'var(--stone-50)' }}>Get trip inspiration</div>
            <div style={{ fontSize: 14, color: 'var(--stone-300)', marginTop: 4 }}>New journeys and seasonal offers, once a month. No spam.</div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 10, alignItems: 'stretch', minWidth: 320 }} className="footer-newsletter-form" data-newsletter="mailchimp">
            <div style={{ flex: 1, height: 46 }}><Input placeholder="you@email.com" iconLeft={<Icon name="Mail" size={18} />} style={{ height: '100%' }} /></div>
            <Button variant="accent" type="submit" style={{ height: 46, flexShrink: 0 }}>Subscribe</Button>
          </form>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 32px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 36 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
            <img src={window.WF_LOGO} width="38" height="38" alt="" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--stone-50)' }}>Wayfarer</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--stone-300)', maxWidth: 260, margin: '0 0 16px' }}>Small-group adventures led by local guides, in 40+ countries. Go further.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              ['Instagram', 'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.95-11.4a1.58 1.58 0 1 1-1.58-1.58 1.58 1.58 0 0 1 1.58 1.58Z'],
              ['Facebook', 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z'],
              ['Twitter', 'M18.9 2.5h3.3l-7.2 8.24L23.5 21.5h-6.6l-5.18-6.77-5.92 6.77H2.5l7.7-8.8L1.5 2.5h6.77l4.68 6.19L18.9 2.5Zm-1.16 17h1.83L7.34 4.4H5.38L17.74 19.5Z'],
              ['Youtube', 'M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z'],
            ].map(([label, d]) => (
              <a key={label} href="#" onClick={(e) => e.preventDefault()} aria-label={label} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--stone-200)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
        {cols.map(([head, items], i) => (
          <div key={i}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--marigold-300)', marginBottom: 16 }}>{head}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {items.map(([label, dest], j) => <button key={j} onClick={() => onNav(dest)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'start', padding: 0, fontSize: 14, color: 'var(--stone-200)', fontFamily: 'var(--font-sans)' }}>{label}</button>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 13, color: 'var(--stone-400)' }}>
          <span>© 2026 Wayfarer Travel Co.</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
