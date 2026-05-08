import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const manifestPath = join(distDir, '.vite', 'manifest.json');
const rendererPath = join(ssrDir, 'static-entry.mjs');
const pages = ['index.html', 'mari.html', 'guestbook.html', 'about.html', 'amandita.html', 'not_found.html', '404.html'];

if (!existsSync(join(distDir, 'index.html'))) {
  throw new Error('dist/index.html missing');
}

if (!existsSync(manifestPath)) {
  throw new Error('dist/.vite/manifest.json missing');
}

if (!existsSync(rendererPath)) {
  throw new Error('dist-ssr/static-entry.mjs missing');
}

const { renderPage } = await import(pathToFileURL(rendererPath));
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const cssFiles = [...new Set(Object.values(manifest).flatMap((entry) => entry.css ?? []))];
const criticalImages = [
  './assets/icons/home.png',
  './assets/icons/mari.png',
  './assets/icons/guestbook.png',
  './assets/icons/about.png',
  './assets/icons/amandita.png',
];

function getPageImages(file) {
  if (file === 'not_found.html' || file === '404.html') {
    return ['./assets/majin.png'];
  }

  return ['./assets/bg/cool_background.gif', ...criticalImages];
}

function getBodyStyle(file) {
  if (file === 'not_found.html' || file === '404.html') {
    return '';
  }

  return "background-image: url('./assets/bg/cool_background.gif')";
}

function renderDocument(file) {
  const page = renderPage(file);
  const styles = cssFiles.map((cssFile) => `    <link rel="stylesheet" href="./${cssFile}" />`).join('\n');
  const html = page.html.replace(/<link rel="preload" as="image" href="[^"]+"\/>/g, '');
  const imagePreloads = getPageImages(file)
    .map((image) => `    <link rel="preload" as="image" href="${image}" fetchpriority="high" />`)
    .join('\n');
  const bodyStyle = getBodyStyle(file);

  return `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
${imagePreloads}
    <link rel="stylesheet" href="https://unpkg.com/98.css" />
    <link rel="shortcut icon" href="./assets/favicon.ico" type="image/x-icon" />
${styles}
    <script data-goatcounter="https://ericksantos12.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    <script src="./js/site.js" defer></script>
    <title>${page.title} - Erick Santos</title>
  </head>
  <body${bodyStyle ? ` style="${bodyStyle}"` : ''}>
    <div id="root">${html}</div>
  </body>
</html>
`;
}

for (const page of pages) {
  writeFileSync(join(distDir, page), renderDocument(page));
}

rmSync(ssrDir, { recursive: true, force: true });
