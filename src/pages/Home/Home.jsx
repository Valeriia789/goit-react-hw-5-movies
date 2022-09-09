import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrending } from '../../services';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(response => response.data)
      .then(({ results }) => {
        setTrending([...results]);
      })
      .catch(error => {
        console.log('New error:(');
      })
      .finally(() => {});
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
      <Outlet/>
    </div>
  );
};

export default Home;
