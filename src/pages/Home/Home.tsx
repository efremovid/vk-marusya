import { useEffect, useState } from "react";


import { getRandomFilm } from "./api";
import FilmInfo from "../../widgets/FilmInfo";
import type { FilmData } from "../../shared/types/filmData";
import Cards from "../../widgets/Cards";



const Home = () => {
  const [randomFilm, setRandomFilm] = useState<FilmData | null>(null);
  const [changeFilm, setChangeFilm] = useState(false);

  const handleChangeClick = () => setChangeFilm(!changeFilm);

 

  useEffect(() => {
    getRandomFilm().then((data: FilmData) => setRandomFilm(data));
  }, [changeFilm]);

 

  return (
    <div>


      {randomFilm && (
        <FilmInfo
          rating={randomFilm.tmdbRating}
          year={randomFilm.releaseYear}
          runTime={randomFilm.runtime}
          genre={randomFilm.genres[0]}
          title={randomFilm.title}
          subTitle={randomFilm.plot}
          imgUrl={randomFilm.backdropUrl}
          handleChangeClick={handleChangeClick}
        />
      )}
      <Cards />
    </div>
  );
};

export default Home;
