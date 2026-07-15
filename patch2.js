const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

const badCode = `React.useEffect(() => {
      const handleHash = () => {
        const hash = window.location.hash.replace('#', '');
        if (!hash) { setRoute('home'); return; }
        if (hash.startsWith('trip=')) { setTripId(hash.split('=')[1]); setRoute('trip'); }
        else if (hash.startsWith('book=')) { setTripId(hash.split('=')[1]); setRoute('book'); }
        else { setRoute(hash); }
      };
      window.addEventListener('hashchange', handleHash);
      if (window.location.hash) handleHash();
      return () => window.removeEventListener('hashchange', handleHash);
    }, []);
    const go = (r) => {
      const hash = (r === 'book' || r === 'trip') ? r + '=' + tripId : r;
      if (window.location.hash.replace('#', '') !== hash) window.location.hash = hash;
      else { setRoute(r); window.scrollTo(0, 0); }
    };
    const openTrip = (id) => { setTripId(id); go('trip'); };`;

const goodCode = `React.useEffect(() => {
      const handleHash = () => {
        const hash = window.location.hash.replace('#', '');
        if (!hash) { setRoute('home'); return; }
        if (hash.startsWith('trip=')) { setTripId(hash.split('=')[1]); setRoute('trip'); }
        else if (hash.startsWith('book=')) { setTripId(hash.split('=')[1]); setRoute('book'); }
        else { setRoute(hash); }
      };
      window.addEventListener('hashchange', handleHash);
      if (window.location.hash) handleHash();
      return () => window.removeEventListener('hashchange', handleHash);
    }, []);
    const go = (r) => {
      const hash = (r === 'book' || r === 'trip') ? r + '=' + tripId : r;
      if (window.location.hash.replace('#', '') !== hash) window.location.hash = hash;
      else { setRoute(r); window.scrollTo(0, 0); }
    };
    const openTrip = (id) => { window.location.hash = 'trip=' + id; };`;

const badEscaped = badCode.replace(/\n/g, '\\n');
const goodEscaped = goodCode.replace(/\n/g, '\\n');

let patched = false;
if (content.includes(badEscaped)) {
    content = content.replace(badEscaped, goodEscaped);
    patched = true;
    console.log("SUCCESSfully patched openTrip");
} else {
    console.log("openTrip target not found!");
}

const badOnBook = `onBook={(id) => { setTripId(id); go('book'); }}`;
const goodOnBook = `onBook={(id) => { window.location.hash = 'book=' + id; }}`;

const badOnBookEscaped = badOnBook.replace(/\n/g, '\\n');
const goodOnBookEscaped = goodOnBook.replace(/\n/g, '\\n');

if (content.includes(badOnBookEscaped)) {
    content = content.replace(badOnBookEscaped, goodOnBookEscaped);
    patched = true;
    console.log("SUCCESSfully patched onBook");
} else {
    console.log("onBook target not found!");
}

if (patched) {
    fs.writeFileSync('index.html', content, 'utf-8');
}
