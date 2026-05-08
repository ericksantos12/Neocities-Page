import { useEffect } from 'react';

export default function GoatCounter() {
  useEffect(() => {
    if (document.querySelector('script[data-goatcounter]')) {
      return;
    }

    const script = document.createElement('script');
    script.dataset.goatcounter = 'https://ericksantos12.goatcounter.com/count';
    script.async = true;
    script.src = '//gc.zgo.at/count.js';
    document.head.appendChild(script);
  }, []);

  return null;
}
