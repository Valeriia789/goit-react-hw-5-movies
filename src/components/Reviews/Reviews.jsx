import { fetchReviews } from '../../services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  RewContainer,
  RewList,
  ListItem,
  RewAuthor,
  RewDate,
  RewInfo,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetchReviews(Number(movieId)).then(setMovieReviews);
  }, [movieId]);

  return (
    <RewContainer>
      {movieReviews.length === 0 && <p>No reviews</p>}
      {movieReviews.length > 0 && (
        <RewList>
          {movieReviews.map(review => (
            <ListItem key={review.id}>
              <RewAuthor>{review.author}</RewAuthor>
              <RewDate>{review.created_at.slice(0, 10)}</RewDate>
              <RewInfo>{review.content}</RewInfo>
            </ListItem>
          ))}
        </RewList>
      )}
    </RewContainer>
  );
};

export default Reviews;
