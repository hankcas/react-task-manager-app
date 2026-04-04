import React, { useState, useEffect } from 'react';
import CharacterCard from "./components/CharacterCard";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 1; // Cambia este ID para probar con otros personajes

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
      .then((response) => response.json())
      .then((result) => {
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender); // Corregí 'genre' a 'gender' ya que la API usa este término
        setStatus(result.status);
      })
      .catch((error) => console.error('Error fetching character:', error));
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <CharacterCard name={name} image={image} genre={genre} status={status} />
    </div>
  );
}

export default App;
