import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e3ec3e6b497e3ef8943e45c84058b3f3';
axios.defaults.params = { api_key: API_KEY };