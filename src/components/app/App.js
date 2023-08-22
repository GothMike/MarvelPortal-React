import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <MainPage />
      </main>
    </div>
  );
};

export default App;
