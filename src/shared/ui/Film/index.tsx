import type { FilmData } from "../../types/filmData";
import Rating from "../rating";
import styles from "./styles.module.scss";

interface FilmInfoProps {
  film: FilmData;
}

const Film = ({ film }: FilmInfoProps) => {
  const rating = film.tmdbRating;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={film.backdropUrl} alt={film.title} />
      <div className={styles.container_item}>
        <div className={styles.filmInfo}>
          {rating && <Rating rating={rating} />}
          <p>{film.releaseYear}</p>
          <p>{film.genres[0]}</p>
          <p>{film.runtime} min</p>
        </div>
        <div>
          <h4>{film.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Film;
