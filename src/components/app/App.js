import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <ComicsPage />
      </main>
    </div>
  );
};

export default App;
