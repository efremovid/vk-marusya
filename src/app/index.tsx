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
          </RouterProvider>
        </AuthProvider>
        <Footer />
      </ReduxProvider>
    </div>
  );
};

export default App;
