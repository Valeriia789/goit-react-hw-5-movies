import { useEffect, useState } from 'react';
import { fetchTrending } from '../../services';

const Home = () => {
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
            <li key={trendItem.id}>{trendItem.name || trendItem.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
