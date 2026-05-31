# Samira Salah — Portfolio (GitHub Pages)

Professional one-page portfolio — EN / FR / DE, AI positioning, case work, CV.

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
| `assets/cv.html` + `assets/cv.css` | CV (two-page template — open in browser; Print → PDF if needed) |
| `assets/CV-GUIDE.md` | CV architecture, theme tokens, i18n & PDF export guide |
| `images/samira-salah.jpeg` | Profile photo |
| `robots.txt` / `sitemap.xml` | SEO |
| `scripts/wire-i18n.py` | Helper to wire new project cards |

## Customize

- **CV:** Edit `assets/cv.html` and `assets/cv.css`. See **`assets/CV-GUIDE.md`** for architecture, theme tokens, i18n, and PDF spacing. Open `assets/cv.html?lang=fr&preview=print`; use Print → Save as PDF.
- **Calendly:** Add a booking URL next to “Book a call” in the hero if you use Calendly.
- **Play Store links:** Update package IDs in project cards when needed.
