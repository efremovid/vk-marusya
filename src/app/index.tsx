import Header from "../widgets/Header";
import Navigation from "./navigation";
import ReduxProvider from "./providers/ReduxProvider";
import RouterProvider from "./providers/RouterProvider";
import "./app.css";
import Footer from "../widgets/Footer/Footer";
import AuthProvider from "./providers/AuthProvider";

const App = () => {
  return (
    <div className="content">
      <ReduxProvider>
        <AuthProvider>
          <RouterProvider>
            <Header />
            <Navigation />
            <Footer />
          </RouterProvider>
        </AuthProvider>
      </ReduxProvider>
    </div>
  );
};

export default App;
