import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { getStaticPageByFile } from './static-pages.jsx';

export function renderPage(file) {
  const page = getStaticPageByFile(file);
  const Component = page.Component;

  return {
    title: page.title,
    html: renderToStaticMarkup(<Component />),
  };
}
