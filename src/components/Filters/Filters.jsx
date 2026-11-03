import styles from "./Filters.module.css";

const STATUS_OPTIONS = [
  { value: "", label: "Todos los estados" },
  { value: "alive", label: "Vivo" },
  { value: "dead", label: "Muerto" },
  { value: "unknown", label: "Desconocido" },
];

const GENDER_OPTIONS = [
  { value: "", label: "Todos los géneros" },
  { value: "female", label: "Femenino" },
  { value: "male", label: "Masculino" },
  { value: "genderless", label: "Sin género" },
  { value: "unknown", label: "Desconocido" },
];

function Filters({ search, status, gender, onSearch, onStatus, onGender, onReset }) {
  const hasFilters = search || status || gender;

  return (
    <div className={styles.filters}>
      <input
        type="search"
        className={styles.search}
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Buscar personaje por nombre"
      />

      <select
        className={styles.select}
        value={status}
        onChange={(e) => onStatus(e.target.value)}
        aria-label="Filtrar por estado"
      >
        {STATUS_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <select
        className={styles.select}
        value={gender}
        onChange={(e) => onGender(e.target.value)}
        aria-label="Filtrar por género"
      >
        {GENDER_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      {hasFilters && (
        <button type="button" className={styles.reset} onClick={onReset}>
          Limpiar filtros
        </button>
      )}
    </div>
  );
}

export default Filters;
