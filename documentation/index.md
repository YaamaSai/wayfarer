# Wayfarer Template — Documentation

## Routing
Each page in `pages/` sets `window.WF_PAGE` (e.g. `'home'`, `'about'`) before loading `main.js`. `main.js` mounts the React `App` with that initial route. In-app navigation (nav links, buttons) switches routes client-side without a full reload.

## Customizing
- **Colors / type / spacing:** edit CSS variables in `assets/css/style.css`.
- **Dark theme:** `assets/css/dark-mode.css` (overrides semantic tokens under `[data-theme="dark"]`).
- **Content / data:** `assets/js/data.js` (trips, reviews).
- **Screens:** `assets/js/screens.jsx`; **dashboards:** `assets/js/dashboard.js`; **chrome:** `assets/js/components.jsx`.

## Integrations (placeholder-ready)
- Newsletter form → tag `data-newsletter` (wire to Mailchimp)
- Contact form → tag `data-form` (wire to Formspree)
- Map → tag `data-map` (wire to Google Maps)
- Payment/social-login buttons are demo stubs.

## Breakpoints
- Tablet: ≤1023px · Mobile: ≤640px · Small phones: ≤570px / ≤360px · Dashboard drawer: ≤900px.
