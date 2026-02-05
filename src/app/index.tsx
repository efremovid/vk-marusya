import { useState } from "react";
import { Button } from "../shared/ui/Button";
import Header from "../widgets/Header";
import Search from "../widgets/Search";
import Navigation from "./navigation";
import ReduxProvider from "./providers/ReduxProvider";
import RouterProvider from "./providers/RouterProvider";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleCloseModal = () => setIsShowModal(false);
  const handleClick = () => setIsShowModal(!isShowModal);

  return (
    <div className="content">
      <ReduxProvider>
        <RouterProvider>
          <Header handleCloseModal={handleCloseModal} isShowModal={isShowModal}>
            <Button theme="primary" onClick={handleClick}>
              ВОЙТИ
            </Button>

            <Search />
          </Header>
          <Navigation />
        </RouterProvider>
      </ReduxProvider>
    </div>
  );
};

export default App;
