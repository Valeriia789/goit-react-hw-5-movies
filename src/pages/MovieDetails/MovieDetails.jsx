import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchMovieDetails } from '../../services';

import {
  MainContainer,
  LinkContainer,
  LinkButton,
  CardContainer,
  PosterContainer,
  InfoContainer,
  MovieTitle,
  StatTitle,
  StatInfo,
  MoreInfoContainer,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(Number(movieId)).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, vote_average, vote_count, overview, genres } =
    movie;
  const poster = `https://image.tmdb.org/t/p/w300${poster_path} `;
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <MainContainer>
      <LinkContainer>
        {/* <Link to="/movies">Back to movies</Link>
      в to можна передавати не рядки, а об'єкт місцезнаходження: */}

        <LinkButton to={backLinkHref}>
          <img src="https://img.icons8.com/nolan/32/return.png" alt="" />
          GO BACK
        </LinkButton>
      </LinkContainer>

      <CardContainer>
        <PosterContainer>
          {poster_path && <img src={poster} alt="poster should be here" />}
        </PosterContainer>

        <InfoContainer>
          <MovieTitle>{title}</MovieTitle>
          <StatTitle>
            Rating:
            <StatInfo> {vote_average} </StatInfo>{' '}
          </StatTitle>
          <StatTitle>
            Votes:
            <StatInfo> {vote_count} </StatInfo>
          </StatTitle>

          <StatTitle>Genres: </StatTitle>
          {genres.map(genre => (
            <StatInfo key={genre.id}> {genre.name}, </StatInfo>
          ))}
          <StatTitle>Overview: </StatTitle>
          <StatInfo>{overview}</StatInfo>

          <MoreInfoContainer>
            <StatTitle>More information:</StatTitle>
            <LinkContainer>
              <LinkButton to="cast" state={{ from: location.state.from }}>
                <img
                  src="https://img.icons8.com/nolan/32/theatre-mask.png"
                  alt=""
                />
                CAST
              </LinkButton>
              <LinkButton to="reviews" state={{ from: location.state.from }}>
                <img
                  src="https://img.icons8.com/nolan/32/video-message.png"
                  alt=""
                />
                REVIEWS
              </LinkButton>
            </LinkContainer>
          </MoreInfoContainer>
        </InfoContainer>
      </CardContainer>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default MovieDetails;
