const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf-8');

const target = `const go = (r) => { setRoute(r); window.scrollTo(0, 0); };\\n    const openTrip = (id) => { setTripId(id); go('trip'); };`;

const replacement = `React.useEffect(() => {
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

const targetEscaped = target.replace(/\n/g, '\\n');
const replacementEscaped = replacement.replace(/\n/g, '\\n');

if (content.includes(targetEscaped)) {
    const newContent = content.replace(targetEscaped, replacementEscaped);
    fs.writeFileSync('index.html', newContent, 'utf-8');
    console.log("SUCCESS");
} else {
    // Try matching with regex
    const regex = /const go = \(r\) => \{ setRoute\(r\); window\.scrollTo\(0, 0\); \};\\n.*?const openTrip = \(id\) => \{ setTripId\(id\); go\('trip'\); \};/;
    if (regex.test(content)) {
        const newContent = content.replace(regex, replacementEscaped);
        fs.writeFileSync('index.html', newContent, 'utf-8');
        console.log("SUCCESS via regex");
    } else {
        console.log("Target not found!");
    }
}
