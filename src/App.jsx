import { getRoute } from './routes.js';

export default function App() {
  const { Component } = getRoute(window.location.pathname);

  return <Component />;
}
