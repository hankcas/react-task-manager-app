import React from 'react';
import Title from './components./titulo./title';
import Image from './components./imagen./Image';
import Details from './components./detalles./Details';

function CharacterCard({ name, image, genre, status }) {
  return (
    <div className="character-card">
      <Title title={name} />
      <Image url={image} />
      <Details genre={genre} status={status} />
    </div>
  );
}

export default CharacterCard;
