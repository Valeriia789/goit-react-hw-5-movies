import { fetchCast } from '../../services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const imageURL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetchCast(Number(movieId)).then(setCastInfo);
  }, [movieId]);

  return (
    <div>
      {castInfo.length > 0 && (
        <ul>
          {castInfo.map(cast => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={imageURL + cast.profile_path}
                  alt={cast.original_name}
                />
              ) : (
                <img
                  src="https://static.toiimg.com/photo/imgsize-11375,msid-58105055/58105055.jpg"
                  alt={cast.original_name}
                />
              )}
              <p>{cast.name}</p>
              {cast.character && <p>Character: {cast.character}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
