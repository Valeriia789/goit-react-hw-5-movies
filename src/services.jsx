// import PropTypes from 'prop-types'
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bc2fa6fd786f6a0d750b3d3cba486c9b';

const fetchTrending = () => {
  return axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

const fetchSearchMovies = ({ query }) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

const fetchMovieDetails = async movieId => {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};

const fetchCast = (movieId) => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  )
}

const fetchReviews = (movieId) => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
}

export { fetchTrending, fetchSearchMovies, fetchMovieDetails, fetchCast, fetchReviews };
