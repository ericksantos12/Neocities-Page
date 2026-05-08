import { describe, expect, it } from 'vitest';
import { getRoute, routes } from './routes.js';
import Home from './pages/Home.jsx';
import Mari from './pages/Mari.jsx';
import Guestbook from './pages/Guestbook.jsx';
import About from './pages/About.jsx';
import Amandita from './pages/Amandita.jsx';
import NotFound from './pages/NotFound.jsx';

describe('legacy routes', () => {
  it('maps legacy URLs to React pages', () => {
    expect(getRoute('/').Component).toBe(Home);
    expect(getRoute('/index.html').Component).toBe(Home);
    expect(getRoute('/mari.html').Component).toBe(Mari);
    expect(getRoute('/guestbook.html').Component).toBe(Guestbook);
    expect(getRoute('/about.html').Component).toBe(About);
    expect(getRoute('/amandita.html').Component).toBe(Amandita);
    expect(getRoute('/not_found.html').Component).toBe(NotFound);
  });

  it('falls back to NotFound for unknown paths', () => {
    expect(getRoute('/missing').Component).toBe(NotFound);
  });

  it('keeps all route paths unique', () => {
    const paths = routes.flatMap((route) => route.paths);
    expect(new Set(paths).size).toBe(paths.length);
  });
});
