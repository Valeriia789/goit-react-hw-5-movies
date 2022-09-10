import { fetchReviews } from '../../services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetchReviews(Number(movieId))
      .then(response => response.data)
      .then(({ results }) => {
        setMovieReviews([...results]);
      });
  }, [movieId]);

  console.log(movieReviews);
  return (
    <div>
      {movieReviews.length === 0 && <p>No reviews</p>}
      {movieReviews.length > 0 && (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.created_at.slice(0, 10)}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
