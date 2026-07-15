const fs = require('fs');
const zlib = require('zlib');

let html = fs.readFileSync('index.html', 'utf-8');

const manifestRegex = /<script type="__bundler\/manifest">([\s\S]*?)<\/script>/;
const match = html.match(manifestRegex);

if (!match) {
  console.log("Could not find manifest script tag");
  process.exit(1);
}

const manifestStr = match[1];
const manifest = JSON.parse(manifestStr);

let patched = false;

for (const [uuid, entry] of Object.entries(manifest)) {
  if (entry.mime === 'application/javascript') {
    const binaryStr = Buffer.from(entry.data, 'base64');
    let contentStr;
    try {
      contentStr = entry.compressed ? zlib.gunzipSync(binaryStr).toString('utf-8') : binaryStr.toString('utf-8');
    } catch (e) {
      continue;
    }
    
    if (contentStr.includes('photo-1527004013197-933c4bcc61f4') || contentStr.includes('photo-1531794343787-71b1f351b9b9')) {
      console.log("Found target image in UUID:", uuid);
      contentStr = contentStr.replace(/photo-1527004013197-933c4bcc61f4/g, 'photo-1464822759023-fed622ff2c3b');
      contentStr = contentStr.replace(/photo-1531794343787-71b1f351b9b9/g, 'photo-1464822759023-fed622ff2c3b');
      
      const newBinary = entry.compressed ? zlib.gzipSync(Buffer.from(contentStr, 'utf-8')) : Buffer.from(contentStr, 'utf-8');
      entry.data = newBinary.toString('base64');
      patched = true;
    }
  }
}

if (patched) {
  const newManifestStr = JSON.stringify(manifest);
  html = html.replace(manifestStr, newManifestStr);
  fs.writeFileSync('index.html', html, 'utf-8');
  console.log("Successfully patched index.html with new valid image URL");
} else {
  console.log("Could not find the target image URL in any javascript bundle");
}
