import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmById } from "./api";
import type { Movie } from "./types";
import FilmInfo from "../FilmInfo";

const MainFilm = () => {
  const [filmInfo, setFilmInfo] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setError("ID фильма не указан");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    getFilmById(id)
      .then((data) => {
        setFilmInfo(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`Ошибка при загрузке фильма: ${err.message}`);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!filmInfo) return <div>Фильм не найден</div>;

  return (
    <div>
      <FilmInfo
        genre={filmInfo.genres[0]}
        imgUrl={filmInfo.backdropUrl}
        runTime={filmInfo.runtime}
        subTitle={filmInfo.plot}
        title={filmInfo.title}
        rating={filmInfo.tmdbRating}
        year={filmInfo.releaseYear}
      />
    </div>
  );
};

export default MainFilm;
