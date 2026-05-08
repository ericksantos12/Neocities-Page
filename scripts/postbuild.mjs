import { copyFileSync, existsSync } from 'node:fs';

const routes = ['index.html', 'mari.html', 'guestbook.html', 'about.html', 'amandita.html', 'not_found.html', '404.html'];

if (!existsSync('dist/index.html')) {
  throw new Error('dist/index.html missing');
}

for (const route of routes) {
  copyFileSync('dist/index.html', `dist/${route}`);
}
