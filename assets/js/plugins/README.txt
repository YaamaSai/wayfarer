Third-party plugins load from CDN in each page:
- React 18.3.1 + ReactDOM (unpkg)
- Babel Standalone 7.29.0 (unpkg) — transpiles the .jsx files in-browser
- Lucide icons (unpkg)

For production, vendor these here and update the <script src> tags in pages/*.html.
