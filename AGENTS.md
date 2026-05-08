# AGENTS.md

## Repo Shape
- Static HTML/CSS/JS site; production content lives under `public/`.
- `dist/` is ignored and not used by deploy workflows; do not edit it for site changes.
- Root `package.json` has no npm scripts. `htmlhint` is the only declared dev dependency.

## Commands
- Install deps: `npm install`.
- Check HTML: `npx htmlhint "public/**/*.html"`.
- Local preview: serve `public/` as the document root. VS Code Live Server is configured for port `5501`.

## Deploy
- Pushes to `main` deploy `public/` to both Neocities and GitHub Pages.
- Neocities workflow uses `bcomnes/deploy-to-neocities@v1` with `cleanup: true`; files removed from `public/` are removed from Neocities on deploy.
- Neocities deploy needs repository secret `NEOCITIES_API_TOKEN`.

## Site Conventions
- Pages repeat navbar/head markup instead of using a template or build step; update shared navigation manually across HTML files.
- Main styling enters through `public/css/style.css`, which imports `normalize.css`, `_navbar.css`, and `_glitch-logo.css`.
- Pages rely on hotlinked third-party assets/services: 98.css CDN, GoatCounter, HTML Comment Box, Catbox/Discord media, Spotify embeds.
- `public/js/main.js` expects an audio element with `id="bg"` on pages that load it, then sets volume and manages the navbar easter egg.
- `public/js/ageCalculator.js` expects `#age`; only include it on pages that render that element.
- `public/js/slideshow.js` expects `#slide`, `#count`, and child `img` elements; currently used by `mari.html`.
