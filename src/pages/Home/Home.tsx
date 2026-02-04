import { useEffect, useState } from "react";

import Modal from "../../widgets/Modal";
import { getRandomFilm } from "./api";
import FilmInfo from "../../widgets/FilmInfo";
import type { FilmData } from "../../shared/types/filmData";
import Cards from "../../widgets/Cards";
import Registration from "../../features/Registration";
import Auth from "../../features/Auth/Auth";

const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [randomFilm, setRandomFilm] = useState<FilmData | null>(null);
  const [changeFilm, setChangeFilm] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  const handleClick = () => setIsShowModal(!isShowModal);
  const handleChangeClick = () => setChangeFilm(!changeFilm);
  const handleCloseModal = () => setIsShowModal(false);
  const handleChangeAuth = () => setIsAuth(!isAuth);

  useEffect(() => {
    getRandomFilm().then((data: FilmData) => setRandomFilm(data));
  }, [changeFilm]);

  return (
    <div>
      <button onClick={handleClick}>ВОЙТИ</button>
      {isShowModal && (
        <Modal onClose={handleCloseModal}>
          {isAuth ? (
            <Auth handleChangeAuth={handleChangeAuth} />
          ) : (
            <Registration handleChangeAuth={handleChangeAuth} />
          )}
        </Modal>
      )}

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
