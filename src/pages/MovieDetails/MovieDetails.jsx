import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieDetails } from '../../services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(Number(movieId))
      .then(response => response.data)
      .then(result => {
        setMovie(result);
      });
  }, [movieId, setMovie]);

  // console.log(movie);
  if (!movie) {
    return null;
  }

  const { id, title, poster_path, vote_average, vote_count, overview, genres } =
    movie;

  return (
    <>
      <div>
        movieId {movieId} id {id}
      </div>

      <div>
        <div>
          <img src={poster_path} alt="poster should be here" />
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
        <p>Cast</p>
        <p>Reviews</p>
      </div>
    </>
  );
};

export default MovieDetails;
