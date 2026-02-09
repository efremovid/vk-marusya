import { useState } from "react";
import { Button } from "../shared/ui/Button";
import Header from "../widgets/Header";
import Search from "../widgets/Search";
import Navigation from "./navigation";
import ReduxProvider from "./providers/ReduxProvider";
import RouterProvider from "./providers/RouterProvider";
import Modal from "../widgets/Modal";
import Auth from "../features/Auth/Auth";
import Registration from "../features/Registration";
import GenresPage from "../pages/GenresPage";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [sectionNmae, setSectionName] = useState("main");

  const handleCloseModal = () => setIsShowModal(false);
  const handleClick = () => setIsShowModal(!isShowModal);
  const handleChangeAuth = () => setIsAuth(!isAuth);

  return (
    <div className="content">
      <ReduxProvider>
        <RouterProvider>
          <Header handleCloseModal={handleCloseModal} isShowModal={isShowModal}>
            <Button theme="primary" onClick={handleClick}>
              ВОЙТИ
            </Button>
            <Button
              theme="menu"
              onClick={() => setSectionName("main")}
              isActive={sectionNmae === "main"}
            >
              Главная
            </Button>
            <Button
              theme="menu"
              onClick={() => setSectionName("genres")}
              isActive={sectionNmae === "genres"}
            >
              Жанры
            </Button>
            <Search />
            {isShowModal && (
              <Modal onClose={handleCloseModal}>
                {isAuth ? (
                  <Auth handleChangeAuth={handleChangeAuth} />
                ) : (
                  <Registration handleChangeAuth={handleChangeAuth} />
                )}
              </Modal>
            )}
          </Header>

          {sectionNmae === "main" ? <Navigation /> : <GenresPage />}
        </RouterProvider>
      </ReduxProvider>
    </div>
  );
};

export default App;
