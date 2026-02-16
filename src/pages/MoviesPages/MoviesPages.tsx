import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { getMovies } from "./api";

import Card from "../../widgets/Card";
import type { FilmData } from "../../shared/types/filmData";
import { Button } from "../../shared/ui/Button";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../entities/user/user-selectors";

const MoviesPages = () => {
  const [films, setFilms] = useState<FilmData[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("genre");

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/genres");
  };

  useEffect(() => {
    getMovies(query || "").then((data) => setFilms(data));
  }, [query]);

  return (
    <div className={styles.container}>
      <Button onClick={goBack} theme="primary">
        Назад
      </Button>
      <h3>Показаны фильмы по жанру: {query}</h3>
      <div className={styles.films}>
        {films.map((film) => (
          <Card imgLink={film.posterUrl} alt={film.title} id={film.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPages;
