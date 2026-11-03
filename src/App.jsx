import { useState } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import { useCharacters } from "./hooks/useCharacters";
import { useDebounce } from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search);
  const { characters, info, loading, error } = useCharacters({
    name: debouncedSearch,
    status,
    gender,
    page,
  });

  // Cualquier cambio de filtro vuelve a la página 1
  const withReset = (setter) => (value) => {
    setter(value);
    setPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setStatus("");
    setGender("");
    setPage(1);
  };

  const changePage = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">
          Rick <span>&</span> Morty Explorer
        </h1>
        <p className="subtitle">
          Explora los personajes de la serie usando la API pública de Rick and Morty.
        </p>
      </header>

      <Filters
        search={search}
        status={status}
        gender={gender}
        onSearch={withReset(setSearch)}
        onStatus={withReset(setStatus)}
        onGender={withReset(setGender)}
        onReset={resetFilters}
      />

      <main>
        {!loading && !error && (
          <p className="count">{info.count} personajes encontrados</p>
        )}

        {error && <p className="message error">{error}</p>}

        {loading && (
          <div className="grid" aria-busy="true">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="skeleton" />
            ))}
          </div>
        )}

        {!loading && !error && characters.length === 0 && (
          <p className="message">No hay personajes que coincidan con tu búsqueda.</p>
        )}

        {!loading && !error && characters.length > 0 && (
          <div className="grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}

        {!error && <Pagination page={page} pages={info.pages} onChange={changePage} />}
      </main>

      <footer className="footer">
        Datos de <a href="https://rickandmortyapi.com" target="_blank" rel="noreferrer">rickandmortyapi.com</a>
        {" · "}Hecho por{" "}
        <a href="https://github.com/hankcas" target="_blank" rel="noreferrer">Leonardo Castro</a>
      </footer>
    </div>
  );
}

export default App;
