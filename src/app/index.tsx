import { Button } from "../shared/ui/Button";
import Header from "../widgets/Header";
import Search from "../widgets/Search";
import Navigation from "./navigation";
import ReduxProvider from "./providers/ReduxProvider";
import RouterProvider from "./providers/RouterProvider";
import { Link, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="content">
      <ReduxProvider>
        <RouterProvider>
          <Header>
            <Link to="/auth/login">
              <Button theme="primary">ВОЙТИ</Button>
            </Link>
            <NavLink to={"/"} end>
              Главная
            </NavLink>
            <NavLink to={"/genres"}>Жанры</NavLink>
            <Search />
          </Header>
          <Navigation />
        </RouterProvider>
      </ReduxProvider>
    </div>
  );
};

export default App;
