import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LoadScreen from "./pages/LoadScreen";
import Music from "./pages/Music";
import Book from "./pages/Book";
import Movie from "./pages/Movie";
import Book2 from "./pages/Book2";

const App = () => {
  return (
      <Router>
        <Routes>
          {/* Redirect '/' sesuai login status */}
          <Route path={"/"} element={<LoadScreen />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/music"} element={<Music />} />
          <Route path={"/book"} element={<Book />} />
          <Route path={"/movie"} element={<Movie />} />
          <Route path={"/book2"} element={<Book2 />} />
          {/* Route untuk halaman 404 */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};


export default App;