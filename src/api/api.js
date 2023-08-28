import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e3ec3e6b497e3ef8943e45c84058b3f3';
axios.defaults.params = { api_key: API_KEY };

export const fetchMoviesSearch = async query => {
    try {
      const response = await axios.get(`/search/movie?query=${query}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchTrendingMoovies = async () => {
    try {
      const response = await axios.get(`/trending/movie/day`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  export const fetchMovies = async movieId => {
    try {
      const response = await axios.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const fetchCast = async movieId => {
    try {
      const response = await axios.get(`/movie/${movieId}/credits`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const fetchReview = async movieId => {
    try {
      const response = await axios.get(`/movie/${movieId}/reviews`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };