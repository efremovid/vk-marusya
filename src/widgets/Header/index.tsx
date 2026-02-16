import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import Search from "../Search";
import { useEffect, useReducer, useState } from "react";
import { Button } from "../../shared/ui/Button";
import Auth from "../../features/Auth/Auth";
import Modal from "../Modal";
import Registration from "../../features/Registration";
import { useSelector } from "react-redux";
import {
  selectIsAuth,
  selectUserData,
} from "../../entities/user/user-selectors";
import Logo from "../../shared/ui/Logo";

const Header = () => {
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);
  const [isShowRegModal, setIsShowRegModal] = useState(false);



  const userData = useSelector(selectUserData);
  const isAuth = useSelector(selectIsAuth);


  console.log(isAuth);

  const handleSwowModal = () => {
    setIsShowAuthModal(!isShowAuthModal);
  };

  const handleShowRegModal = () => {
    setIsShowRegModal(!isShowRegModal);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) =>
            `${styles.text} ${isActive ? styles.active : "text"}`
          }
          to={"/"}
          end
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${styles.text} ${isActive ? styles.active : "text"}`
          }
          to={"/genres"}
        >
          Жанры
        </NavLink>
      </div>
      <Search />

      {isAuth ? (
        <NavLink className={`${styles.profile}`} to={""}>
          {userData.name}
        </NavLink>
      ) : (
        <Button
          theme="primary"
          widthVariant="small"
          text="Вход"
          onClick={handleSwowModal}
        />
      )}

      {isShowAuthModal && (
        <Modal
          handleShowRegModal={handleShowRegModal}
          onClose={() => setIsShowAuthModal(false)}
        >
          {isShowRegModal ? (
            <Registration handleShowRegModal={handleShowRegModal} />
          ) : (
            <Auth handleShowRegModal={handleShowRegModal} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Header;
