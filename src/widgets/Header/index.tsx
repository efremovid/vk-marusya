import styles from "./styles.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import Search from "../Search";
import { useState } from "react";
import { Button } from "../../shared/ui/Button";
import Auth from "../../features/Auth/Auth";
import Modal from "../Modal";
import Registration from "../../features/Registration";

const Header = () => {
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);
  const [isShowRegModal, setIsShowRegModal] = useState(false);

  const handleSwowModal = () => {
    setIsShowAuthModal(!isShowAuthModal);
  };

  const handleShowRegModal = () => {
    setIsShowRegModal(!isShowRegModal);
  };

  return (
    <div className={styles.container}>
      <Button
        theme="primary"
        widthVariant="small"
        text="Вход"
        onClick={handleSwowModal}
      />
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
