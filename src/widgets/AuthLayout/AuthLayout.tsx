import { Outlet, useNavigate } from "react-router-dom";
import Modal from "../../widgets/Modal";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate("/")}>
      <Outlet />
    </Modal>
  );
};

export default AuthLayout;
