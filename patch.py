import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = r"const go = (r) => { setRoute(r); window.scrollTo(0, 0); };\n    const openTrip = (id) => { setTripId(id); go('trip'); };"

replacement = r"""React.useEffect(() => {
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
    const openTrip = (id) => { setTripId(id); go('trip'); };"""

# We need to replace the exact escaped version since it's inside a JSON string
target_escaped = target.replace('\n', '\\n')
replacement_escaped = replacement.replace('\n', '\\n')

if target_escaped in content:
    content = content.replace(target_escaped, replacement_escaped)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS")
else:
    print("Target not found. Trying flexible match...")
    import re
    # Try to find the const go... line
    match = re.search(r'const go = \(r\) =\\u003e \{ setRoute\(r\); window\.scrollTo\(0, 0\); \};\\n.*?const openTrip', content)
    if match:
        print("Found with regex!")
    else:
        print("Could not find target at all.")
