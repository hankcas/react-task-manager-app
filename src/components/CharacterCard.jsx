import React from 'react';
import Title from "./titulo/Title";
import Image from "./Imagen/Image";
import Details from "./detalles/Details";
function CharacterCard({ name, image, genre, status }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
      width: "250px"
    }}>
      <Title title={name} />
      <Image url={image} />
      <Details genre={genre} status={status} />
    </div>
  );
}


