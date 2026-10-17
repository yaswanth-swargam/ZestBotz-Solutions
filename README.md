# ZestBotz Solutions — Official Website & Production Audit

**Transforming workflows through AI-driven Automation and Analytics.**

The official web platform of **ZestBotz Solutions Pvt. Ltd.**, an IT services and consulting company focused on enterprise intelligent automation, Agentic AI systems, modern data engineering, healthcare RCM analytics, and custom software development.

---

## 🚀 Website Audit & Production Modernization Summary

This repository contains the results of an in-depth website audit, UI/UX optimization, and production-level security enhancement conducted on the branch `audit-improvements`. The original production branch (`main`) remains pristine and untouched.

### Key Audit Deliverables
- **Audit Report Document:** [`ZestBotz_Website_Audit_Report.docx`](./ZestBotz_Website_Audit_Report.docx) — Formal 10-section audit document with visual issue evidence and priority matrix.
- **Detailed File Changes:** [`CHANGES.md`](./CHANGES.md) — Comprehensive breakdown of all 16+ modified and created code files.
- **AI Tool Experiment Report:** [`AI_EXPERIMENT.md`](./AI_EXPERIMENT.md) — Detailed report on utilizing Google Antigravity for automated auditing, headless screenshot capture, and code refactoring.
- **Before & After Visual Proof:**
  - Before screenshots: [`/docs/screenshots/before/`](./docs/screenshots/before/) (24 files across Desktop, Tablet, Mobile)
  - After screenshots: [`/docs/screenshots/after/`](./docs/screenshots/after/) (24 files across Desktop, Tablet, Mobile)

---

## 🛠️ Summary of Files Modified & Features Implemented

| File Path | Nature of Change | Enhancements & Fixes |
| :--- | :--- | :--- |
| `Frontend/src/pages/Services.jsx` | **New Page** | Created dedicated Services Hub page with all 6 required core services + supplementary verticals. |
| `Frontend/src/pages/NotFound.jsx` | **New Page** | Created custom branded 404 Not Found page with return navigation pathways. |
| `Frontend/src/components/ScrollToTop.jsx` | **New Component** | Mounted scroll reset component to fix SPA scroll retention defect. |
| `Frontend/src/App.jsx` | **Routing Fix** | Added `/services` route, `*` 404 route, and backward-compatible `<Navigate replace />` redirects. |
| `Frontend/index.html` | **SEO & Metadata** | Added descriptive `<title>`, meta description, Open Graph, Twitter cards, and canonical URL. |
| `Frontend/src/data/company.js` | **Content / Data** | Added official email, phone, remote presence details, and comprehensive service descriptions. |
| `Frontend/src/components/Navbar.jsx` | **UI/UX & Mobile** | Added missing "Products" link to mobile menu, enlarged mobile Contact CTA to 48px+ touch target. |
| `Frontend/src/components/Footer.jsx` | **Navigation & Links** | Fixed broken `/zestbotz-services` route to `/services`, added clickable `mailto:` / `tel:` links, fixed logo margin. |
| `Frontend/src/pages/Home.jsx` | **Content & UX** | Fixed broken service URLs, replaced repeating "Explore service" CTAs with action-oriented buttons. |
| `Frontend/src/pages/About.jsx` | **Content & SEO** | Resolved duplicate H1 headline with Home page, updated service list and navigation links. |
| `Frontend/src/pages/Industries.jsx` | **Link Integrity** | Corrected broken service route paths to match active router paths. |
| `Frontend/src/pages/Products.jsx` | **Performance / SPA** | Replaced page reloads (`<a>`) with React Router `<Link>`, populated empty icon spans with arrows. |
| `Frontend/src/pages/Careers.jsx` | **UX & Stability** | Populated empty icon spans with directional glyphs, ensured safe API fallback. |
| `Frontend/src/pages/Contact.jsx` | **Bug Fix** | Added fallback for `VITE_API_URL` to prevent `undefined/api/contact` API failure. |
| `Backend/src/server.js` | **Security / CORS** | Configured multi-origin CORS whitelist supporting localhost, preview URLs (`*.vercel.app`), and Helmet CSP. |
| `Backend/src/config/mailer.js` | **Reliability** | Implemented graceful mock mailer fallback for unconfigured SMTP development/staging environments. |

---

## 💻 Tech Stack

- **Frontend:** React 18, React Router DOM, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, Helmet, Express-Rate-Limit, Nodemailer
- **Audit & Automation:** Google Antigravity Agent, Chromium Headless CLI, Python `python-docx`

---

## 🏃 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (v9 or higher)
- Git

### 2. Clone and Checkout Branch
```bash
git clone https://github.com/yaswanth-swargam/ZestBotz-Solutions.git
cd ZestBotz-Solutions
git checkout audit-improvements
```

### 3. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

To build and preview production:
```bash
npm run build
npm run preview
```

### 4. Backend Setup
```bash
cd ../Backend
npm install
npm start
```
Runs at `http://localhost:5000` with `/api/health`, `/api/contact`, and `/api/careers/apply`.

---

## 📊 Before & After Verification

To inspect visual changes across any device viewport, review the `/docs/screenshots/` directories:
- **Desktop (1440x900):** `docs/screenshots/before/desktop_home.png` vs `docs/screenshots/after/desktop_home.png`
- **Tablet (768x1024):** `docs/screenshots/before/tablet_services.png` vs `docs/screenshots/after/tablet_services.png`
- **Mobile (375x812):** `docs/screenshots/before/mobile_contact.png` vs `docs/screenshots/after/mobile_contact.png`

---

## 📄 License
This project is maintained for ZestBotz Solutions Pvt. Ltd. All rights reserved.
