import { useParams, Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchMovieDetails } from '../../services';

const MovieDetails = ( ) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(Number(movieId))
      .then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, vote_average, vote_count, overview, genres } =
    movie;
  const poster = `https://image.tmdb.org/t/p/w300${poster_path} `;
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <div>
        {/* <Link to="/movies">Back to movies</Link>
      в to можна передавати не рядки, а об'єкт місцезнаходження: */}
        <img src="https://img.icons8.com/nolan/32/return.png" alt="" />
        <Link to={backLinkHref}>Back to movies</Link>
      </div>

      <div>
        <div>
          {poster_path && <img src={poster} alt="poster should be here" />}
        </div>

        <div>
          <h3>{title}</h3>
          <p>Rating: {vote_average}</p>
          <p>Votes: {vote_count}</p>

          <h4>Overview</h4>
          <p>{overview}</p>

          <h4>Genres</h4>
          {genres.map(genre => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <NavLink to="cast" state={{ from: location.state.from }} >Cast</NavLink>
        <NavLink to="reviews" state={{ from: location.state.from }} >Reviews</NavLink>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
