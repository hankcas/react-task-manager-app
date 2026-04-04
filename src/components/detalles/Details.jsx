import React from 'react';
import './Details.css';
function Details({ genre, status }) {
  return (
    <div>
      <p>Género: {genre || "Cargando..."}</p>
      <p>Estado: {status || "Cargando..."}</p>
    </div>
  );
}

export default Details;