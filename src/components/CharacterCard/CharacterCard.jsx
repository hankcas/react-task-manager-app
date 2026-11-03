import styles from "./CharacterCard.module.css";

const STATUS_LABEL = { Alive: "Vivo", Dead: "Muerto", unknown: "Desconocido" };
const GENDER_LABEL = { Female: "Femenino", Male: "Masculino", Genderless: "Sin género", unknown: "Desconocido" };

function CharacterCard({ character }) {
  const { name, image, status, species, gender, location, episode } = character;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} loading="lazy" />
        <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}>
          <span className={styles.dot} />
          {STATUS_LABEL[status] ?? status}
        </span>
      </div>

      <div className={styles.body}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.meta}>
          {species} · {GENDER_LABEL[gender] ?? gender}
        </p>

        <dl className={styles.details}>
          <div>
            <dt>Última ubicación</dt>
            <dd>{location.name}</dd>
          </div>
          <div>
            <dt>Episodios</dt>
            <dd>{episode.length}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default CharacterCard;
