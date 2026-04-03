import React from 'react';
import './Details.css';
function Details({ genre, status }) {
  return (
    <div className="character-details">
      <p><strong>Gender:</strong> {genre}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default Details;

