import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import GenresPage from "../../pages/GenresPage";
import MoviesPages from "../../pages/MoviesPages/MoviesPages";
import Auth from "../../features/Auth/Auth";
import Registration from "../../features/Registration";
import AuthLayout from "../../widgets/AuthLayout/AuthLayout";

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/movie" element={<MoviesPages />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
