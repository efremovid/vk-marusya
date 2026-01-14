import Navigation from "./navigation";
import ReduxProvider from "./providers/ReduxProvider";
import RouterProvider from "./providers/RouterProvider";

const App = () => {
  return (
    <div className="content">
      <ReduxProvider>
        <RouterProvider>
          <Navigation />
        </RouterProvider>
      </ReduxProvider>
    </div>
  );
};

export default App;
