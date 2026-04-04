import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <input
  type="text"
  placeholder="Buscar personaje..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{ padding: "10px", marginBottom: "20px" }}
/>

      <div className="container">
        {characters
  .filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((char) => (
          <div
            key={char.id}
            style={{
              background: "white",
              color: "black",
              padding: "10px",
              borderRadius: "10px",
              width: "200px"
            }}
          >
            <h3>{char.name}</h3>
            <img src={char.image} width="100%" />
            <p>{char.gender}</p>
            <p>{char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
