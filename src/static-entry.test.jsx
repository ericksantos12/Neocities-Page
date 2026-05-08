import { describe, expect, it } from 'vitest';
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
});
