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
    <div id="slide" data-slideshow="true">
      <button id="prev" type="button" data-slide-prev="true" onClick={() => changeImage(-1)}>
        &#10094;
      </button>
      <span id="count" data-slide-count="true">{index + 1} of {images.length}</span>
      <button id="next" type="button" data-slide-next="true" onClick={() => changeImage(1)}>
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
