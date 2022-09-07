import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../../services';
import Searchbar from '../Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    fetchSearchMovies()
      .then(response => response.data)
      .then(results => {
        setMovies([results]);
        console.log([results]);
      })
      .catch(error => {
        console.log('New error in Movies:(');
      })
      .finally(() => {});
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );
  
  // const visibleMovies = movies.filter(movie =>
  //   movie.title.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <h2>Search</h2>
      <button type="submit">
        <span>Search</span>
      </button>

      <Searchbar onChange={changeFilter} />
      {visibleMovies.length > 0 && (
        <ul>
          {visibleMovies.map(movie => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
