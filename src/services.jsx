
// import PropTypes from 'prop-types'
import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'bc2fa6fd786f6a0d750b3d3cba486c9b'

const fetchTrending = () => {
  return axios
    .get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    )
}

const fetchSearchMovies = ( ) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=home&page=1&include_adult=false`
    )
}

export {fetchTrending, fetchSearchMovies}