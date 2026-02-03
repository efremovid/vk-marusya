import { useEffect, useState } from "react";
import Modal from "../../widgets/Modal";
import { data } from "./data";

import Cards from "../../widgets/Cards";
import { getRandomFilm } from "./api";
import FilmInfo from "../../widgets/FilmInfo";
import type { FilmData } from "../../shared/types/filmData";
import Auth from "../../features/Auth/Auth";

const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [changeFilm, setIsChangeFilm] = useState(false)
  const [randomFilm, setRandomFilm] = useState<FilmData | null>(null);

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleChangeClick = () => {
    setIsChangeFilm(!changeFilm)
  }

  useEffect(() => {
    getRandomFilm().then((data: FilmData) => setRandomFilm(data));
  }, [changeFilm]);

  return (
    <div>
      <button onClick={handleClick}>ВОЙТИ</button>
      {isShowModal &&  
      
      <Modal onClose={handleCloseModal}>
  
      </Modal>
      
      }
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
