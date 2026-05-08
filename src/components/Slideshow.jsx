import { useState } from 'react';

export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  function changeImage(delta) {
    setIndex((current) => (current + delta + images.length) % images.length);
  }

  if (!images.length) {
    return null;
  }

  return (
    <div id="slide">
      <button id="prev" type="button" onClick={() => changeImage(-1)}>
        &#10094;
      </button>
      <span id="count">{index + 1} of {images.length}</span>
      <button id="next" type="button" onClick={() => changeImage(1)}>
        &#10095;
      </button>
      {images.map((src, imageIndex) => (
        <img
          key={src}
          src={src}
          alt="Mari slideshow"
          style={{ display: imageIndex === index ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
}
