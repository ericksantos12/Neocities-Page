# MIGRATION_AUDIT.md

## Pages To Components
| legacy file | route(s) | React page | shared components | notes |
|---|---|---|---|---|
| `public/index.html` | `/`, `/index.html` | `Home` | `Layout`, `Navbar`, `GlitchTitle`, `AudioPlayer`, `Age` | GoatCounter, audio, `#alpha`, inline status script |
| `public/mari.html` | `/mari.html` | `Mari` | `Layout`, `Navbar`, `GlitchTitle`, `AudioPlayer`, `Slideshow` | GoatCounter, loop audio, `#alpha`, slideshow |
| `public/guestbook.html` | `/guestbook.html` | `Guestbook` | `Layout`, `Navbar`, `GlitchTitle`, `AudioPlayer`, `HtmlCommentBox` | GoatCounter, HTML Comment Box, `#beta` |
| `public/about.html` | `/about.html` | `About` | `Layout`, `Navbar`, `GlitchTitle`, `AudioPlayer`, `Age` | GoatCounter, audio, `#gamma`, inline status script |
| `public/amandita.html` | `/amandita.html` | `Amandita` | `Layout`, `Navbar`, `AudioPlayer` | hidden nav item after easter egg |
| `public/not_found.html` | `/not_found.html`, fallback | `NotFound` | `AudioPlayer` | no current navbar; spec requires navbar on migrated pages |

## Legacy Script Mapping
| legacy script | React target | invariant |
|---|---|---|
| `public/js/main.js` audio volume | `AudioPlayer` | V8 |
| `public/js/main.js` easter egg/nav unlock | `useEasterEgg`, `Navbar` | V3,V8 |
| `public/js/ageCalculator.js` | `Age` | V9 |
| `public/js/slideshow.js` | `Slideshow` | V10 |

## Route Rules
- `/` and `/index.html` render same `Home` page.
- Legacy `.html` URLs stay valid.
- Unknown path renders `NotFound` and can share `/not_found.html` content.
- Navbar link shape preserves legacy hrefs: `./`, `mari.html`, `guestbook.html`, `about.html`, `amandita.html` after unlock.
