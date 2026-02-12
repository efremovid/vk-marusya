import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import GenresPage from "../../pages/GenresPage";
import MoviesPages from "../../pages/MoviesPages/MoviesPages";
import MainFilm from "../../widgets/MainFim";

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/movie" element={<MoviesPages />} />
      <Route path="/movie/:id" element={<MainFilm />} />
    </Routes>
  );
};

export default Navigation;
