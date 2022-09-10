import { fetchCast } from '../../services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const imageURL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetchCast(Number(movieId))
      .then(response => response.data.cast)
      .then(result => {
        setCastInfo(result);
      });
  }, [movieId]);

  console.log(castInfo);

  return (
    <div>
      {castInfo.length > 0 && (
        <ul>
          {castInfo.map(cast => (
            <li key={cast.id}>
              <img src={imageURL + cast.profile_path} alt="actorPicture" />
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
