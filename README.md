# Samira Salah — Portfolio (GitHub Pages)

Professional one-page portfolio for sharing with clients and recruiters.

## Preview locally

```bash
cd portfolio
# Python 3
python3 -m http.server 8080
# Open http://localhost:8080
```

Or open `index.html` in a browser (CSS path must stay `css/style.css`).

## Deploy to GitHub Pages

### Option A — User site (`samirasalah.github.io`)

1. Create a public repo named **`samirasalah.github.io`** on GitHub.
2. Copy the contents of this `portfolio` folder into the repo root:
   - `index.html`
   - `css/style.css`
   - (optional) add `Samira-Salah-CV.pdf` in `assets/` and link it from the hero.
3. On GitHub: **Settings → Pages → Source**: Deploy from branch **`main`**, folder **`/ (root)`**.
4. Site URL: **https://samirasalah.github.io/**

### Option B — Project site (`username.github.io/portfolio`)

1. Push this folder to any repo (e.g. `portfolio`).
2. Enable Pages from `/docs` or root branch.
3. URL: `https://samirasalah.github.io/portfolio/` — update `css/style.css` path if needed.

## Customize

- Replace Play Store links if package IDs change.
- Add `assets/cv.pdf` and a download button in `index.html` hero section.
- Add a professional photo: `assets/photo.jpg` and an `<img>` in the hero.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-page portfolio |
| `css/style.css` | Layout and theme |
| `README.md` | This guide |
