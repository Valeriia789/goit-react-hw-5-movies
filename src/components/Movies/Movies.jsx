import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../../services';
import Searchbar from '../Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [page, setPage] = useState(1);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParam === '') {
      return;
    }

    fetchSearchMovies({ query: filterParam })
      .then(response => response.data)
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(error => {
        console.log('New error in Movies:(');
      })
      .finally(() => {});
  }, [filterParam]);

  const visibleMovies = useMemo(() => {
    return movies.filter(
      movie =>
        movie.hasOwnProperty('title') &&
        movie.title.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [filterParam, movies]);

  // const visibleMovies = movies.filter(movie =>
  //   movie.title.toLowerCase().includes(filterParam.toLowerCase())
  // );

  return (
    <>
      <h2>Search</h2>

      <Searchbar value={filterParam} onChange={changeFilter} />
      {visibleMovies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
