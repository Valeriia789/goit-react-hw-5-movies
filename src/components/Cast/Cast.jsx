import { fetchCast } from '../../services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  CastContainer,
  CastList,
  ListItem,
  ItemInfoContainer,
  CharacterContainer,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const imageURL = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    fetchCast(Number(movieId)).then(setCastInfo);
  }, [movieId]);

  return (
    <CastContainer>
      {castInfo.length === 0 && <p>No information</p>}
      {castInfo.length > 0 && (
        <CastList>
          {castInfo.map(cast => (
            <ListItem key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={imageURL + cast.profile_path}
                  alt={cast.original_name}
                />
              ) : (
                <img
                  src="data:image/png;base64,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"
                  alt={cast.original_name}
                />
              )}
              <ItemInfoContainer>
                <p>{cast.name}</p>
                {cast.character && (
                  <CharacterContainer>
                    Character: <p>{cast.character}</p>
                  </CharacterContainer>
                )}
              </ItemInfoContainer>
            </ListItem>
          ))}
        </CastList>
      )}
    </CastContainer>
  );
};

export default Cast;
