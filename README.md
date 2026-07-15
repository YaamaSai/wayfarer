# Wayfarer — Travel Booking Template

A complete, responsive travel-booking website template (small-group adventure brand). Built with React + Babel (in-browser), styled with the Wayfarer design tokens. Dark mode, RTL, and full mobile/tablet responsiveness included.

## Quick start
## Quick start

**Easiest — just double-click `index.html` in this folder's root.** It is a fully self-contained build (all styles, scripts, and assets inlined) that works offline with no server.

The files in `pages/` are the editable per-page sources. Because they load `.jsx` via Babel over `<script src>`, browsers block that on `file://` — so to open them you must **serve the folder over HTTP** (e.g. `npx serve` then visit `/pages/index.html`, or use VS Code "Live Server"). Editing the root `index.html` directly is not recommended; edit the `pages/` + `assets/` sources and re-bundle.

## Structure
```
wayfarer-template/
├── assets/
│   ├── css/
│   │   ├── style.css       # tokens + base (fonts via Google Fonts @import)
│   │   ├── dark-mode.css   # [data-theme="dark"] overrides
│   │   ├── rtl.css         # [dir="rtl"] support
│   │   └── responsive.css  # mobile + tablet rules
│   ├── js/
│   │   ├── main.js         # app bootstrap (reads window.WF_PAGE)
│   │   ├── components.jsx  # Icon, Header, Footer, helpers
│   │   ├── screens.jsx     # all content screens
│   │   ├── dashboard.js    # admin + traveler dashboards
│   │   ├── data.js         # sample trips & reviews
│   │   ├── ds-bundle.js    # design-system component library
│   │   └── plugins/        # (CDN deps — see README)
│   ├── images/             # logos
│   └── fonts/              # (Google Fonts — see README)
├── pages/                  # one HTML per view (index, about, services, …)
├── documentation/
└── README.md
```

## Pages
Home · Home (editorial) · Services · Gallery · Trip detail · Book Now · About · Contact · Login · Sign up · Forgot password · Admin dashboard · Traveler dashboard · Coming soon · 404.

## Features
- **Dark / light mode** with system detection + persistence
- **RTL** support (LTR/RTL toggle)
- **Responsive** mobile, tablet, desktop
- Client-side **form validation**, **skeleton loading**, image **carousel**, **multi-step booking**
- **Lucide** icons; no external UI framework

## Notes
- Pages render via Babel in the browser for easy editing. For production, precompile the `.jsx` and vendor the CDN scripts in `assets/js/plugins/`.
- Photography is hot-linked from Unsplash for the demo — replace with licensed assets.
- Fonts are Google Fonts; self-host from `assets/fonts/` if needed.
