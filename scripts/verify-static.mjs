import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const staticHtmlFiles = ['index.html', 'mari.html', 'guestbook.html', 'about.html', 'amandita.html', 'not_found.html', '404.html'];

const scriptPath = fileURLToPath(import.meta.url);
const root = dirname(dirname(scriptPath));

function isExternalRef(ref) {
  return /^(https?:)?\/\//.test(ref) || ref.startsWith('data:') || ref.startsWith('mailto:') || ref.startsWith('#');
}

function cleanRef(ref) {
  return ref.replace(/^\.\//, '').split('#')[0].split('?')[0];
}

function findRootLocalRefs(content) {
  return Array.from(content.matchAll(/(?:href|src)=['"](\/(?:assets|css|js)\/[^'"]+)['"]/g), (match) => match[1]);
}

function findRootLocalCssRefs(content) {
  return Array.from(content.matchAll(/url\(['"]?(\/(?:assets|css|js)\/[^)'"]+)['"]?\)/g), (match) => match[1]);
}

export function verifyStaticBuild(distDir = join(root, 'dist')) {
  const errors = [];

  for (const file of staticHtmlFiles) {
    const filePath = join(distDir, file);

    if (!existsSync(filePath)) {
      errors.push(`${file} missing`);
      continue;
    }

    const html = readFileSync(filePath, 'utf8');

    if (/<script\b[^>]*type=["']module["'][^>]*src=/i.test(html)) {
      errors.push(`${file} has external module script`);
    }

    if (!html.includes('<div id="root">') || html.includes('<div id="root"></div>')) {
      errors.push(`${file} missing static root content`);
    }

    for (const ref of findRootLocalRefs(html)) {
      errors.push(`${file} uses root local ref ${ref}`);
    }

    for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
      const ref = match[1];

      if (isExternalRef(ref)) {
        continue;
      }

      const localPath = cleanRef(ref);
      if (!localPath || localPath === file) {
        continue;
      }

      if (!existsSync(join(distDir, localPath))) {
        errors.push(`${file} references missing ${ref}`);
      }
    }
  }

  for (const cssFile of findCssFiles(distDir)) {
    const css = readFileSync(join(distDir, cssFile), 'utf8');

    for (const ref of findRootLocalCssRefs(css)) {
      errors.push(`${cssFile} uses root local ref ${ref}`);
    }
  }

  return errors;
}

function findCssFiles(distDir) {
  const html = staticHtmlFiles
    .map((file) => (existsSync(join(distDir, file)) ? readFileSync(join(distDir, file), 'utf8') : ''))
    .join('\n');

  return [...new Set(Array.from(html.matchAll(/href=["']\.\/([^"']+\.css)["']/g), (match) => match[1]))];
}

if (process.argv[1] && scriptPath === process.argv[1]) {
  const errors = verifyStaticBuild();

  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
}
