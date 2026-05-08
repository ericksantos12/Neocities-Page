import { useEffect } from 'react';

export default function AudioPlayer({ src, loop = false }) {
  useEffect(() => {
    const audio = document.getElementById('bg');
    if (audio) {
      audio.volume = 0.06;
    }
  }, [src]);

  if (!src) {
    return null;
  }

  return (
    <audio autoPlay loop={loop} id="bg" src={src} type="audio/mpeg" data-audio-volume="0.06">
      your browser doesn't support audio :(
    </audio>
  );
}
