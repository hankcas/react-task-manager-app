import React from 'react';
import './title.css';
function Title({ title }) {
  if (!title) return <p>Cargando título...</p>;

  return <h2 className="character-title">{title}</h2>;
}

export default Title;
