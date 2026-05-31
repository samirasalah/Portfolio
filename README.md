# Samira Salah — Portfolio (GitHub Pages)

Professional one-page portfolio — EN / FR / DE, AI positioning, case work, CV download.

**Live URL:** https://samirasalah.github.io/

## Preview locally

```bash
cd portfolio
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy to GitHub Pages (one command)

```bash
cd portfolio
chmod +x deploy-github-pages.sh
./deploy-github-pages.sh
```

This clones `samirasalah.github.io`, syncs this folder, commits, and pushes to `main`.

## Contents

| Path | Purpose |
|------|---------|
| `index.html` | Single-page site |
| `css/style.css` | Layout & theme |
| `js/i18n.js` | UI translations (EN/FR/DE) |
| `js/projects-i18n.js` | Project card translations |
| `assets/Samira-Salah-CV.pdf` | Downloadable CV (generated from `assets/cv.html`) |
| `assets/cv.html` | Source CV for edits / print to PDF |
| `scripts/generate-cv-pdf.sh` | Regenerate PDF via Chrome headless (optional) |
| `images/samira-salah.jpeg` | Profile photo |
| `robots.txt` / `sitemap.xml` | SEO |
| `scripts/wire-i18n.py` | Helper to wire new project cards |

## Customize

- **CV:** Replace `assets/Samira-Salah-CV.pdf` with your latest PDF (keep the filename or update links in `index.html`).
- **Calendly:** Add a booking URL next to “Book a call” in the hero if you use Calendly.
- **Play Store links:** Update package IDs in project cards when needed.
