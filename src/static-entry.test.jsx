import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { renderPage } from './static-entry.jsx';

describe('static page rendering', () => {
  it('renders page-specific HTML for each route file', () => {
    expect(renderPage('index.html').html).toContain('Hello! I&#x27;m Erick');
    expect(renderPage('mari.html').html).toContain('Mari slideshow');
    expect(renderPage('guestbook.html').html).toContain('Guestbook');
    expect(renderPage('about.html').html).toContain('My Setup');
    expect(renderPage('amandita.html').html).toContain('Gabi my beloved');
    expect(renderPage('not_found.html').html).toContain('ページが見つかりません');
  });

  it('falls back to not found page for unknown files', () => {
    expect(renderPage('missing.html').html).toContain('ページが見つかりません');
  });

  it('marks runtime enhancement hooks for file-safe classic JS', () => {
    expect(renderPage('index.html').html).toContain('data-age-birth="2003-04-08"');
    expect(renderPage('index.html').html).toContain('data-audio-volume="0.06"');
    expect(renderPage('index.html').html).toContain('data-egg-id="alpha"');
    expect(renderPage('mari.html').html).toContain('data-slideshow="true"');
  });

  it('renders local assets as file-safe relative refs', () => {
    const html = renderPage('index.html').html;

    expect(html).toContain('href="./assets/icons/home.png"');
    expect(html).toContain('src="./assets/icons/home.png"');
    expect(html).not.toContain('href="/assets/');
    expect(html).not.toContain('src="/assets/');
  });

  it('renders a file-safe relative background on final documents', async () => {
    const { readFileSync } = await import('node:fs');

    expect(readFileSync('scripts/postbuild.mjs', 'utf8')).toContain("background-image: url('./assets/bg/cool_background.gif')");
  });

  it('uses document navigation links in the navbar', () => {
    const html = renderPage('index.html').html;

    expect(html).toContain('href="index.html"');
    expect(html).toContain('href="mari.html"');
    expect(html).toContain('href="guestbook.html"');
    expect(html).toContain('href="about.html"');
    expect(html).not.toContain('href="./"');
  });

  it('does not keep a client-side router entry', () => {
    expect(existsSync('src/routes.js')).toBe(false);
    expect(existsSync('src/App.jsx')).toBe(false);
    expect(readFileSync('src/main.jsx', 'utf8')).toBe("import './styles/style.css';\n");
  });
});
