import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { fetchSearchMovies } from '../../services';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
    console.log(searchQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('Введіть пошуковий запит');
      return;
    }

    setSearchQuery('');
    setPage(1);
  };

  useEffect(() => {
    fetchSearchMovies({ query: searchQuery, page })
      .then(response => response.data)
      .then(results => {
        console.log(results);
      })
      .catch(error => {
        console.log('New error in Movies:(');
      })
      .finally(() => {});
  }, [page, searchQuery]);

  return (
    <>
      <h2>Search</h2>
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            name="searchQuery"
            value={searchQuery}
            onChange={handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </header>

      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default Movies;
