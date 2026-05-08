# AGENTS.md

## Repo Shape
- Static HTML/CSS/JS site. Prod content under `public/`.
- `dist/` ignored, unused by deploy workflows. Do not edit for site changes.
- Root `package.json` has no npm scripts. `htmlhint` only dev dependency.

## Commands
- Install deps: `npm install`.
- Check HTML: `npx htmlhint "public/**/*.html"`.
- Local preview: serve `public/` as document root. VS Code Live Server port `5501`.

## Commits
- Always use `gitmoji-commits` skill when creating commits.
- Commit messages use gitmoji + Conventional Commits format.

## User Prompts
- When asking questions or offering choices, use OpenCode question/selection functions instead of plain-text options.

## Deploy
- Pushes to `main` deploy `public/` to Neocities + GitHub Pages.
- Neocities workflow uses `bcomnes/deploy-to-neocities@v1` with `cleanup: true`; files removed from `public/` removed from Neocities on deploy.
- Neocities deploy needs repository secret `NEOCITIES_API_TOKEN`.

## Site Conventions
- Pages repeat navbar/head markup; no template/build step. Update shared navigation manually across HTML files.
- Main styling enters through `public/css/style.css`; imports `normalize.css`, `_navbar.css`, `_glitch-logo.css`.
- Pages rely on hotlinked third-party assets/services: 98.css CDN, GoatCounter, HTML Comment Box, Catbox/Discord media, Spotify embeds.
- `public/js/main.js` expects audio element with `id="bg"` on pages that load it, then sets volume + manages navbar easter egg.
- `public/js/ageCalculator.js` expects `#age`; only include it on pages that render that element.
- `public/js/slideshow.js` expects `#slide`, `#count`, and child `img` elements; currently used by `mari.html`.
