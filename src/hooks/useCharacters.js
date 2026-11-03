import { useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

/**
 * Consulta la API de Rick and Morty con filtros y paginación del lado del servidor.
 * Devuelve personajes, info de paginación y estados de carga/error.
 */
export function useCharacters({ name, status, gender, page }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ count: 0, pages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({ page: String(page) });
    if (name) params.set("name", name);
    if (status) params.set("status", status);
    if (gender) params.set("gender", gender);

    setLoading(true);
    setError(null);

    fetch(`${API_URL}?${params}`, { signal: controller.signal })
      .then((res) => {
        // La API responde 404 cuando no hay resultados para los filtros
        if (res.status === 404) return { results: [], info: { count: 0, pages: 0 } };
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError("No se pudieron cargar los personajes.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [name, status, gender, page]);

  return { characters, info, loading, error };
}
