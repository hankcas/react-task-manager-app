import React from 'react';
import Title from "./titulo/Title";
import Image from "./Imagen/Image";
import Details from "./detalles/Details";
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
