import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services';
import Pagination from 'components/Pagination/Pagination';

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
  const [page, setPage] = useState(1);
  
  const imageURL = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    fetchTrending(page).then(setTrending);
  }, [page]);

  console.log(page);

  return (
    <ListContainer>
      <h1>Trending</h1>
      <MoviesList>
        {trending.map(trendItem => (
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
      <Pagination
          total={Number(200)}
          limit={Number(20)}
          page={page}
          setPage={setPage}
        />
    </ListContainer>
  );
};

export default Home;