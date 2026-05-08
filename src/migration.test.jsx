import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import Navbar from './components/Navbar.jsx';
import Guestbook from './pages/Guestbook.jsx';
import Home from './pages/Home.jsx';

describe('migration validation', () => {
  it('renders navbar links including unlocked Amandita link', () => {
    render(<Navbar showEasterItem />);

    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', './');
    expect(screen.getByRole('link', { name: /Mari/i })).toHaveAttribute('href', 'mari.html');
    expect(screen.getByRole('link', { name: /Guestbook/i })).toHaveAttribute('href', 'guestbook.html');
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', 'about.html');
    expect(screen.getByRole('link', { name: /Amandita/i })).toHaveAttribute('href', 'amandita.html');
  });

  it('keeps local assets used by migrated pages', () => {
    [
      'public/assets/favicon.ico',
      'public/assets/icons/home.png',
      'public/assets/icons/mari.png',
      'public/assets/icons/guestbook.png',
      'public/assets/icons/about.png',
      'public/assets/icons/amandita.png',
      'public/assets/titles/welcome.gif',
      'public/assets/titles/Tribute_to_G_.gif',
      'public/assets/88x31/clooko.png',
      'public/assets/majin.png',
    ].forEach((path) => expect(existsSync(path)).toBe(true));
  });

  it('keeps GoatCounter and external embeds reachable from React markup', () => {
    render(<Home />);

    expect(document.querySelector('script[data-goatcounter="https://ericksantos12.goatcounter.com/count"]')).toBeInTheDocument();
    expect(screen.getByTitle('Bicke pet')).toHaveAttribute('src', expect.stringContaining('gifypet.neocities.org'));
    expect(screen.getByAltText('Spotify History Embed')).toHaveAttribute('src', expect.stringContaining('embed.minzkraut.com'));
  });

  it('keeps HTML Comment Box surface', () => {
    render(<Guestbook />);

    expect(document.getElementById('HCB_comment_box')).toBeInTheDocument();
    expect(document.getElementById('hcb')).toHaveAttribute('src', expect.stringContaining('htmlcommentbox.com/jread'));
  });

  it('deploy workflows publish dist', () => {
    const neocities = readFileSync('.github/workflows/neocities.yml', 'utf8');
    const pages = readFileSync('.github/workflows/github-pages.yml', 'utf8');

    expect(neocities).toContain('npm run build');
    expect(neocities).toContain('dist_dir: dist');
    expect(pages).toContain('npm run build');
    expect(pages).toContain("path: 'dist'");
  });
});
