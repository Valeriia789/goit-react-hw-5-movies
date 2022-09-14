import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services';

import {
  ListContainer,
  MoviesList,
  ListItem,
  MovieLink,
  NoImageAvlb,
  MovTitle,
} from '../commonStyles';

const Home = () => {
  const location = useLocation();
  const [trending, setTrending] = useState([]);
  const imageURL = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    fetchTrending().then(setTrending);
  }, []);

  return (
    <ListContainer>
      <h1>Trending</h1>
      <MoviesList>
        {trending &&
          trending.map(trendItem => (
            <ListItem key={trendItem.id}>
              <MovieLink
                to={`movies/${trendItem.id}`}
                state={{ from: location }}
              >
                {trendItem.poster_path ? (
                  <img src={imageURL + trendItem.poster_path} alt="Poster" />
                ) : (
                  <NoImageAvlb
                    src="https://bpgroup.lv/i/product_images/images/Z2000128443.jpg"
                    alt="No Poster Available"
                  />
                )}

                <MovTitle>{trendItem.name || trendItem.title}</MovTitle>
              </MovieLink>
            </ListItem>
          ))}
      </MoviesList>
    </ListContainer>
  );
};

export default Home;

// "backdrop_sizes": [
//   "w300",
//   "w780",
//   "w1280",
//   "original"
// ],
// "logo_sizes": [
//   "w45",
//   "w92",
//   "w154",
//   "w185",
//   "w300",
//   "w500",
//   "original"
// ],
// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ],
// "profile_sizes": [
//   "w45",
//   "w185",
//   "h632",
//   "original"
// ],
// "still_sizes": [
//   "w92",
//   "w185",
//   "w300",
//   "original"
// ]
