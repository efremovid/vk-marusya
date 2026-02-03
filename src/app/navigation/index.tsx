import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";

import Auth from "../../features/Auth/Auth";
import Registration from "../../features/Registration";
import Modal from "../../widgets/Modal";

const Navigation = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="auth" element={<Modal />}>
        <Route path="login" element={<Auth />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
