import styles from "./Pagination.module.css";

function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Paginación">
      <button
        type="button"
        className={styles.button}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        ← Anterior
      </button>

      <span className={styles.info}>
        Página <strong>{page}</strong> de {pages}
      </span>

      <button
        type="button"
        className={styles.button}
        onClick={() => onChange(page + 1)}
        disabled={page === pages}
      >
        Siguiente →
      </button>
    </nav>
  );
}

export default Pagination;
