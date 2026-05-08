import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import GlitchTitle from './GlitchTitle.jsx';
import useEasterEgg from '../hooks/useEasterEgg.js';

export default function Layout({ title, glitchId, children }) {
  const { easterFound, markEgg } = useEasterEgg();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar showEasterItem={easterFound} />
      <main>
        {glitchId ? <GlitchTitle id={glitchId} title={title} onClick={() => markEgg(glitchId)} /> : null}
        {children}
      </main>
    </>
  );
}
