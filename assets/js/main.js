// Wayfarer — app bootstrap. Each page sets window.WF_PAGE before this loads.
window.WF_LOGO = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="16" fill="#0B5E4C"/><path d="M32 12 L39 32 L32 27 Z" fill="#F2A900"/><path d="M32 12 L25 32 L32 27 Z" fill="#FCE9B5"/><path d="M32 52 L25 32 L32 37 Z" fill="#F2A900"/><path d="M32 52 L39 32 L32 37 Z" fill="#D98E00"/><circle cx="32" cy="32" r="3.2" fill="#FAF7F2"/></svg>');

function App() {
  const [route, setRoute] = React.useState(window.WF_PAGE || 'home');
  const [tripId, setTripId] = React.useState('kyoto');
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('wf-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch (e) { return 'light'; }
  });
  const [dir, setDir] = React.useState('ltr');

  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); try { localStorage.setItem('wf-theme', theme); } catch (e) {} }, [theme]);
  React.useEffect(() => { document.documentElement.setAttribute('dir', dir); }, [dir]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    var m = document.querySelector('.wf-main') || document.querySelector('main');
    if (m) m.scrollTop = 0;
  }, [route, tripId]);

  const go = (r) => { setRoute(r); window.scrollTo(0, 0); };
  const openTrip = (id) => { setTripId(id); go('trip'); };
  const tT = () => setTheme((t) => t === 'dark' ? 'light' : 'dark');
  const tD = () => setDir((d) => d === 'rtl' ? 'ltr' : 'rtl');

  let screen;
  switch (route) {
    case 'home': screen = <window.HomeScreen onNav={go} onOpenTrip={openTrip} />; break;
    case 'home2': screen = <window.HomeTwoScreen onNav={go} onOpenTrip={openTrip} />; break;
    case 'services': screen = <window.ServicesScreen onOpenTrip={openTrip} onNav={go} />; break;
    case 'gallery': screen = <window.GalleryScreen onNav={go} />; break;
    case 'trip': screen = <window.TripScreen tripId={tripId} onOpenTrip={openTrip} onBook={(id) => { setTripId(id); go('book'); }} onNav={go} />; break;
    case 'book': screen = <window.BookNowScreen tripId={tripId} onNav={go} />; break;
    case 'about': screen = <window.AboutScreen onNav={go} />; break;
    case 'contact': screen = <window.ContactScreen />; break;
    case 'dashboard': return <window.DashboardScreen onNav={go} theme={theme} onToggleTheme={tT} dir={dir} onToggleDir={tD} />;
    case 'account': return <window.ClientDashboardScreen onNav={go} onOpenTrip={openTrip} theme={theme} onToggleTheme={tT} dir={dir} onToggleDir={tD} />;
    case 'soon': return <window.ComingSoonScreen onNav={go} />;
    case 'login': return <window.AuthScreen mode="login" onNav={go} theme={theme} onToggleTheme={tT} dir={dir} onToggleDir={tD} />;
    case 'signup': return <window.AuthScreen mode="signup" onNav={go} theme={theme} onToggleTheme={tT} dir={dir} onToggleDir={tD} />;
    case 'forgot': return <window.AuthScreen mode="forgot" onNav={go} theme={theme} onToggleTheme={tT} dir={dir} onToggleDir={tD} />;
    case '404': return <window.NotFoundScreen onNav={go} />;
    default: screen = <window.NotFoundScreen onNav={go} />;
  }
  return (
    <React.Fragment>
      <window.Header onNav={go} active={route} theme={theme} onToggleTheme={tT} dir={dir} onToggleDir={tD} />
      <main className="wf-main">{screen}</main>
      <window.Footer onNav={go} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
