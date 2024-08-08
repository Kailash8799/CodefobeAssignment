import axios from 'axios';

const api = axios.create({
  baseURL: 'https://random-data-api.com/api',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default api;
