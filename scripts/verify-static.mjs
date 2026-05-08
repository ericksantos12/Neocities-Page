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

  return errors;
}

if (process.argv[1] && scriptPath === process.argv[1]) {
  const errors = verifyStaticBuild();

  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
}
