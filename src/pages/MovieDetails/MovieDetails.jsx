import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieDetails } from '../../services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movie, setMovie } = useState(null);

  useEffect(() => {
    fetchMovieDetails(Number(movieId)).then(setMovie);
  }, [movieId, setMovie]);

  // if (!movie) {
  //   return null;
  // }

  // const {id, title} = movie
  console.log(movie);

  return (
    <>
      <div>{movieId} and again id</div>;
      <div>
        <div>
          <img src="" alt="poster should be here" />
        </div>

        <div>
          <h3>title coming soon</h3>
          <p>User Score: %</p>

          <h4>Overview</h4>
          <p>add info</p>

          <h4>Genres</h4>
          <p>map genres here</p>
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
