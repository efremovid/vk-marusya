import Header from "../widgets/Header";
import Navigation from "./navigation";
import ReduxProvider from "./providers/ReduxProvider";
import RouterProvider from "./providers/RouterProvider";
import './app.css'
import Footer from "../widgets/Footer/Footer";

const App = () => {
  return (
    <div className="content">
      <ReduxProvider>
        <RouterProvider>
          <Header />
          <Navigation />
          <Footer/>
        </RouterProvider>
      </ReduxProvider>
    </div>
  );
};

export default App;
