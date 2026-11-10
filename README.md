# Rick & Morty Explorer

Explorador de personajes de la serie *Rick and Morty* construido con **React** y **Vite**, que consume la [API pública de Rick and Morty](https://rickandmortyapi.com).

## Funcionalidades

- Búsqueda de personajes por nombre (con *debounce* para no saturar la API)
- Filtros por estado (vivo, muerto, desconocido) y por género
- Paginación del lado del servidor sobre los más de 800 personajes
- Tarjetas con estado, especie, última ubicación y número de episodios
- Estados de carga (*skeletons*), error y "sin resultados"
- Diseño oscuro y responsive

## Tecnologías

- React 18 (hooks: `useState`, `useEffect` y hooks personalizados)
- Vite
- CSS Modules
- Fetch API con `AbortController` para cancelar peticiones obsoletas

## Estructura

```
src/
├── components/
│   ├── CharacterCard/   # Tarjeta de un personaje
│   ├── Filters/         # Buscador y filtros
│   └── Pagination/      # Controles de página
├── hooks/
│   ├── useCharacters.js # Consulta a la API con filtros y paginación
│   └── useDebounce.js   # Retraso de la búsqueda
├── App.jsx
└── main.jsx
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Autor

**Leonardo Castro** — Ingeniero Mecatrónico y desarrollador Full Stack
[GitHub](https://github.com/hankcas)

Desarrollado con apoyo de Claude (Anthropic) como asistente de programación.
