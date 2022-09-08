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

const fetchMovieDetails = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data)
    .then(result => {
      console.log(result);
      return result;
    });
};

export { fetchTrending, fetchSearchMovies, fetchMovieDetails };
