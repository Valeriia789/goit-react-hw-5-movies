import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import NotFound from "path/to/pages/NotFound";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default App;
