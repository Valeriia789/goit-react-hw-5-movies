import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';

import { SharedLayout } from '../components/SharedLayout/SharedLayout';
// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';

// import NotFound from "path/to/pages/NotFound";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

// const createAsyncComponent = path => lazy(() => import(path))
// const Home = createAsyncComponent('../pages/Home/Home')
// const Movies = createAsyncComponent('../pages/Movies/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails/MovieDetails');
// const Cast = createAsyncComponent('../components/Cast/Cast');
// const Reviews = createAsyncComponent('../components/Reviews/Reviews');

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default App;
