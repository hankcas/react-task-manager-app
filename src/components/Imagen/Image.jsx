import React from 'react';
import './Image.css';
function Image({ url }) {
  return (
    <img src={url} alt="Character" className="character-image" />
  );
}

export default Image;
