// import PropTypes from 'prop-types'
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bc2fa6fd786f6a0d750b3d3cba486c9b';

const fetchTrending = async () => {
  const trendingRes = await axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data);

  return trendingRes.results;
};

const fetchSearchMovies = async ({ query, page }) => {
  const searchRes = await axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    )
    .then(response => response.data);

  return searchRes.results;
};

const fetchMovieDetails = async movieId => {
  const detailsRes = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return detailsRes.data;
};

const fetchCast = async movieId => {
  const castRes = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return castRes.data.cast;
};

const fetchReviews = async movieId => {
  const reviewsRes = await axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data);

  return reviewsRes.results;
};

export {
  fetchTrending,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
};
