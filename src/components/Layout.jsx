import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import GlitchTitle from './GlitchTitle.jsx';

export default function Layout({ title, glitchId, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main>
        {glitchId ? <GlitchTitle id={glitchId} title={title} /> : null}
        {children}
      </main>
    </>
  );
}
