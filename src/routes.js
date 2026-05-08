import Home from './pages/Home.jsx';
import Mari from './pages/Mari.jsx';
import Guestbook from './pages/Guestbook.jsx';
import About from './pages/About.jsx';
import Amandita from './pages/Amandita.jsx';
import NotFound from './pages/NotFound.jsx';

export const routes = [
  { paths: ['/', '/index.html'], Component: Home },
  { paths: ['/mari.html'], Component: Mari },
  { paths: ['/guestbook.html'], Component: Guestbook },
  { paths: ['/about.html'], Component: About },
  { paths: ['/amandita.html'], Component: Amandita },
  { paths: ['/not_found.html'], Component: NotFound },
];

export function getRoute(pathname) {
  return routes.find((route) => route.paths.includes(pathname)) ?? { Component: NotFound };
}
