import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../../services';
import Searchbar from '../Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    fetchSearchMovies()
      .then(response => [response.data])
      .then(results => {
        setMovies([...results]);
      })
      .catch(error => {
        console.log('New error in Movies:(');
      })
      .finally(() => {});
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleMovies = useMemo(() => {
    console.log(movies);
    return movies.filter(movie => movie.hasOwnProperty('title') && 
      movie.title.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [filterParam, movies]);

  // const visibleMovies = movies.filter(movie =>
  //   movie.title.toLowerCase().includes(filterParam.toLowerCase())
  // );

  // console.log(visibleMovies);

  return (
    <>
      <h2>Search</h2>
      <button type="submit">
        <span>Search</span>
      </button>

      <Searchbar value={filterParam} onChange={changeFilter} />
      {visibleMovies.length > 0 && (
        <ul>
          {visibleMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
