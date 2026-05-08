import { describe, expect, it } from 'vitest';
import { getStaticPageByFile, staticFiles, staticPages } from './static-pages.jsx';
import Home from './pages/Home.jsx';
import Mari from './pages/Mari.jsx';
import Guestbook from './pages/Guestbook.jsx';
import About from './pages/About.jsx';
import Amandita from './pages/Amandita.jsx';
import NotFound from './pages/NotFound.jsx';

describe('static pages', () => {
  it('maps legacy URLs to static page files', () => {
    expect(staticPages.find((page) => page.path === '/')?.Component).toBe(Home);
    expect(staticPages.find((page) => page.path === '/index.html')?.Component).toBe(Home);
    expect(staticPages.find((page) => page.path === '/mari.html')?.Component).toBe(Mari);
    expect(staticPages.find((page) => page.path === '/guestbook.html')?.Component).toBe(Guestbook);
    expect(staticPages.find((page) => page.path === '/about.html')?.Component).toBe(About);
    expect(staticPages.find((page) => page.path === '/amandita.html')?.Component).toBe(Amandita);
    expect(staticPages.find((page) => page.path === '/not_found.html')?.Component).toBe(NotFound);
    expect(staticPages.find((page) => page.path === '/404.html')?.Component).toBe(NotFound);
  });

  it('has one real HTML file per static output', () => {
    expect(staticFiles).toEqual([
      'index.html',
      'mari.html',
      'guestbook.html',
      'about.html',
      'amandita.html',
      'not_found.html',
      '404.html',
    ]);
  });

  it('keeps all route paths unique', () => {
    const paths = staticPages.map((page) => page.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('finds pages by output file', () => {
    expect(getStaticPageByFile('index.html').Component).toBe(Home);
    expect(getStaticPageByFile('missing.html').Component).toBe(NotFound);
  });
});
