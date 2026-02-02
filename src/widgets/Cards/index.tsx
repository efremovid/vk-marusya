import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getTopFilms } from "./api";
import Card from "../Card";

interface ApiData {
  id: number;
  posterUrl: string;
}

const Cards = () => {
  const [data, setData] = useState<ApiData[]>([]);

  useEffect(() => {
    getTopFilms().then((data: []) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Топ 10 фильмов</h2>
      <div className={styles.films}>
        {data.length > 0 ? (
          data.map((film, index) => (
            <Card
              key={film.id}
              typeOfCard="film"
              imgLink={film.posterUrl}
              index={index + 1}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
