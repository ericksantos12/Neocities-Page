# SPEC.md

## §G
Migrar site `public/` para React + Vite gerando HTML estático multi-page, compatível com Neocities e `file://`, mantendo visual, conteúdo, URLs públicas e deploy.

## §C
- Não implementar agora; spec apenas.
- Projeto alvo usa React + Vite.
- React obrigatório como stack de autoria/build.
- Build final deve ser site estático multi-page, não SPA dependente de router client-side.
- Build final deve abrir via Neocities/GitHub Pages HTTP e via duplo-clique `file://`.
- Runtime final não deve depender de `<script type="module" src="...">` externo para renderizar conteúdo principal.
- Conteúdo prod segue deployável para Neocities + GitHub Pages.
- Preservar estética atual 98.css/retro/glitch.
- Preservar páginas existentes: `index.html`, `mari.html`, `guestbook.html`, `about.html`, `amandita.html`, `not_found.html`.
- Preservar assets e hotlinks existentes salvo quebra real.
- Preservar rotas públicas antigas, inclusive links `.html`, ou criar fallback equivalente.
- `dist/` continua artefato de build, não fonte editável.
- Deploy Neocities com `cleanup: true` não pode apagar assets necessários.
- Navbar Home aponta para `index.html`, não para diretório `./`.
- Scripts específicos mantêm pré-condições: audio `#bg`, age `#age`, slideshow `#slide`/`#count`.

## §I
- I.web: páginas públicas servidas por browser.
- I.routes: `/`, `/index.html`, `/mari.html`, `/guestbook.html`, `/about.html`, `/amandita.html`, `/not_found.html`.
- I.assets: `public/assets/**`, ícones, gifs, favicon, mídia local.
- I.css: 98.css CDN, `src/styles/style.css`, `src/styles/navbar.css`, `src/styles/glitch-logo.css`, `public/css/normalize.css`.
- I.js: React behavior in `src/components/AudioPlayer.jsx`, `src/components/Age.jsx`, `src/components/Slideshow.jsx`, `src/hooks/useEasterEgg.js`.
- I.analytics: GoatCounter script `//gc.zgo.at/count.js`.
- I.comments: HTML Comment Box em guestbook.
- I.embeds: Spotify embeds, Catbox/Discord media, demais hotlinks.
- I.deploy: GitHub Actions para Neocities + GitHub Pages.
- I.cli: `npm install`, build Vite, preview local, checks.
- I.static: arquivos reais em `dist/`: `index.html`, `mari.html`, `guestbook.html`, `about.html`, `amandita.html`, `not_found.html`, `404.html`.
- I.runtime: JS clássico/inline ou progressive enhancement compatível com `file://` para audio, age, slideshow, easter egg.

## §V
- V1. Build Vite gera site estático completo em `dist/` sem erro.
- V2. Cada rota em I.routes renderiza conteúdo equivalente ao HTML atual.
- V3. Navbar aparece em todas páginas migradas e links mantêm navegação esperada.
- V4. CSS global preserva visual retro, 98.css, glitch logo, layout desktop/mobile.
- V5. Assets referenciados por componentes existem em build final ou permanecem URLs externas válidas.
- V6. GoatCounter permanece carregado nas páginas equivalentes que já usam analytics.
- V7. Guestbook mantém HTML Comment Box funcional.
- V8. Audio background mantém comportamento existente sem quebrar páginas sem `#bg`.
- V9. Age calculator vira componente/logic React e só roda onde `#age` equivalente existe.
- V10. Slideshow de `mari.html` vira componente React e só roda com dados de slides válidos.
- V11. Deploy workflows publicam `dist/` ou output Vite correto, não `public/` cru.
- V12. `npx htmlhint "public/**/*.html"` deixa de ser check principal ou fica limitado a HTML remanescente; novo check cobre React/Vite.
- V13. Cada rota pública em I.routes tem HTML próprio em `dist/`, não só fallback SPA único.
- V14. Abrir `dist/index.html` e demais páginas por `file://` renderiza conteúdo principal sem erro de module/CORS.
- V15. Navbar usa navegação documental para arquivos `.html`; Home aponta para `index.html`.
- V16. React permanece fonte de autoria/build, mas HTML final não depende de client router para escolher página.
- V17. Interações runtime usam JS clássico/inline ou degradam sem quebrar renderização principal em `file://`.

## §T
| id | status | task | cites |
|---|---|---|---|
| T1 | x | Auditar HTML/CSS/JS atual e mapear páginas para componentes React | V2,V3,I.web,I.routes |
| T2 | x | Criar projeto Vite React sem perder assets existentes | V1,V5,I.assets,I.cli |
| T3 | x | Definir roteamento para URLs antigas e fallback 404 | V2,I.routes |
| T4 | x | Migrar layout base, navbar e head/meta comuns | V3,V4,I.web,I.css |
| T5 | x | Migrar estilos globais e imports CSS para pipeline Vite | V4,I.css |
| T6 | x | Migrar Home para componente React equivalente | V2,V6,V8,V9,I.analytics,I.js |
| T7 | x | Migrar Mari e slideshow para componente React | V2,V10,I.js,I.assets |
| T8 | x | Migrar Guestbook mantendo HTML Comment Box | V2,V7,I.comments |
| T9 | x | Migrar About, Amandita e Not Found | V2,I.routes,I.assets |
| T10 | x | Migrar ou substituir scripts legados por hooks/componentes React | V8,V9,V10,I.js |
| T11 | x | Configurar scripts `dev`, `build`, `preview` e checks | V1,V12,I.cli |
| T12 | x | Atualizar workflows deploy para output Vite | V11,I.deploy |
| T13 | x | Validar build, rotas, assets, embeds, mobile e links externos | V1,V2,V4,V5,V6,V7,I.embeds |
| T14 | x | Remover HTML/JS legado só após equivalência validada | V2,V5,V8,V9,V10 |
| T15 | x | Trocar arquitetura SPA copy-router por build multi-page real | V13,V16,I.routes,I.static |
| T16 | x | Gerar HTML estático por página a partir de React obrigatório | V1,V2,V13,V16,I.static,I.cli |
| T17 | . | Converter runtime necessário para JS clássico/inline ou progressive enhancement file-safe | V8,V9,V10,V14,V17,I.runtime |
| T18 | . | Corrigir navbar para links `.html` documentais, incluindo Home `index.html` | V3,V15,I.routes |
| T19 | . | Atualizar checks para validar Neocities HTTP e `file://` sobre `dist/*.html` | V1,V5,V11,V14,I.deploy,I.cli |
| T20 | . | Remover dependência de router client-side para seleção de página no build final | V13,V16,I.static |

## §B
| id | date | cause | fix |
|---|---|---|---|
