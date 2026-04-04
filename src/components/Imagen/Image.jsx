import React from 'react';
import './Image.css';
function Image({ url }) {
  if (!url) return <p>Cargando imagen...</p>;

  return (
    <img 
      src={url} 
      alt="character" 
      className="character-image"
    />
  );
}

export default Image;
