import { useEffect, useState } from 'react';

const eggIds = ['alpha', 'beta', 'gamma'];

export default function useEasterEgg() {
  const [easterFound, setEasterFound] = useState(() => sessionStorage.getItem('easterFound') === 'true');

  useEffect(() => {
    if (easterFound) {
      sessionStorage.setItem('easterFound', 'true');
    }
  }, [easterFound]);

  function markEgg(id) {
    if (!eggIds.includes(id)) {
      return;
    }

    sessionStorage.setItem(id, 'true');
    const allFound = eggIds.every((eggId) => sessionStorage.getItem(eggId) === 'true');

    if (allFound && !easterFound) {
      const foundAudio = new Audio('https://cdn.discordapp.com/attachments/334598557145366528/1108203307433992232/chest_opening.mp3');
      foundAudio.play();
      setEasterFound(true);
      alert('Você encontrou!');
    }
  }

  return { easterFound, markEgg };
}
