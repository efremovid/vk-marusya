import { useEffect, useState } from "react";
import { getGenres } from "./api/api";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data));
  }, []);

  console.log(genres)

  return (
    <div className={styles.container}>
      <h3>Жанры</h3>
      <div className={styles.films}>
        {genres.map((genre) => (
          <Link className={styles.link} to={`/movie?genre=${genre}`}>
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
