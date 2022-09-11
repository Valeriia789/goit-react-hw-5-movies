import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services';

const Home = () => {
  const location = useLocation();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrending);
  }, []);

  return (
    <div>
      <h1>Trending</h1>
      <ul>
        {trending &&
          trending.map(trendItem => (
            <li key={trendItem.id}>
              <NavLink to={`movies/${trendItem.id}`} state={{ from: location }}>
                {trendItem.name || trendItem.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
