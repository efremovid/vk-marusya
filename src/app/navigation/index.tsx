import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import GenresPage from "../../pages/GenresPage";
import MoviesPages from "../../pages/MoviesPages/MoviesPages";

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/movie" element={<MoviesPages />} />
    </Routes>
  );
};

export default Navigation;
