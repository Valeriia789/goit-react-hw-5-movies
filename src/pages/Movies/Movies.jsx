import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../../services';
import Searchbar from '../../components/Searchbar/Searchbar';

import {
  ListContainer,
  MoviesList,
  ListItem,
  MovieLink,
  NoImageAvlb,
  MovTitle,
} from '../commonStyles';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [page, setPage] = useState(1);
  const imageURL = 'https://image.tmdb.org/t/p/w185';

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      setMovies([]);
      return;
    }

    fetchSearchMovies({ query: filterParam }).then(setMovies);
  }, [filterParam]);

  const visibleMovies = useMemo(() => {
    return movies.filter(
      movie =>
        movie.hasOwnProperty('title') &&
        movie.title.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [filterParam, movies]);

  console.log(visibleMovies);

  return (
    <ListContainer>
      <h2>Search</h2>

      <Searchbar value={filterParam} onChange={changeFilter} />
      {visibleMovies.length > 0 && (
        <MoviesList>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <MovieLink to={`${movie.id}`} state={{ from: location }}>
                {movie.poster_path ? (
                  <img src={imageURL + movie.poster_path} alt="Poster" />
                ) : (
                  <NoImageAvlb
                    src="https://bpgroup.lv/i/product_images/images/Z2000128443.jpg"
                    alt="No Poster Available"
                  />
                )}

                <MovTitle>{movie.title}</MovTitle>
              </MovieLink>
            </ListItem>
          ))}
        </MoviesList>
      )}
    </ListContainer>
  );
};

export default Movies;
