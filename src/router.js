import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LoadScreen from "./pages/LoadScreen";
import Movie from "./pages/Movie";
import './index.css'
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./context/theme-context";
import Music from "./pages/Music";
import Book from "./pages/Book";

const App = () => {
  return (
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path={"/"} element={<LoadScreen />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/movie"} element={<Movie />} />
            <Route path={"/music"} element={<Music />} />
            <Route path={"/book"} element={<Book />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer/>
         </ThemeProvider>
      </Router>
  );
};


export default App;