import Home from './pages/Home.jsx';
import Mari from './pages/Mari.jsx';
import Guestbook from './pages/Guestbook.jsx';
import About from './pages/About.jsx';
import Amandita from './pages/Amandita.jsx';
import NotFound from './pages/NotFound.jsx';

export const staticPages = [
  { path: '/', file: 'index.html', title: 'Home', Component: Home },
  { path: '/index.html', file: 'index.html', title: 'Home', Component: Home },
  { path: '/mari.html', file: 'mari.html', title: 'Mari', Component: Mari },
  { path: '/guestbook.html', file: 'guestbook.html', title: 'Guestbook', Component: Guestbook },
  { path: '/about.html', file: 'about.html', title: 'About', Component: About },
  { path: '/amandita.html', file: 'amandita.html', title: 'Amandita', Component: Amandita },
  { path: '/not_found.html', file: 'not_found.html', title: 'Not Found', Component: NotFound },
  { path: '/404.html', file: '404.html', title: 'Not Found', Component: NotFound },
];

export const staticFiles = [...new Set(staticPages.map((page) => page.file))];

export function getStaticPageByFile(file) {
  return staticPages.find((page) => page.file === file) ?? staticPages.find((page) => page.file === 'not_found.html');
}
