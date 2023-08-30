import AppHeader from "../appHeader/AppHeader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {
  MainPage,
  ComicsPage,
  SingleComicPage,
  Page404,
} from "../pages/index";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route
              path="/comics/:comicId"
              element={<SingleComicPage />}
            />
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
