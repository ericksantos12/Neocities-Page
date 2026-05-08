import { useEffect, useState } from 'react';
import { getSessionValue, setSessionValue } from '../utils/storage.js';

const eggIds = ['alpha', 'beta', 'gamma'];

export default function useEasterEgg() {
  const [easterFound, setEasterFound] = useState(() => getSessionValue('easterFound') === 'true');

  useEffect(() => {
    if (easterFound) {
      setSessionValue('easterFound', 'true');
    }
  }, [easterFound]);

  function markEgg(id) {
    if (!eggIds.includes(id)) {
      return;
    }

    setSessionValue(id, 'true');
    const allFound = eggIds.every((eggId) => getSessionValue(eggId) === 'true');

    if (allFound && !easterFound) {
      const foundAudio = new Audio('https://cdn.discordapp.com/attachments/334598557145366528/1108203307433992232/chest_opening.mp3');
      foundAudio.play();
      setEasterFound(true);
      alert('Você encontrou!');
    }
  }

  return { easterFound, markEgg };
}
