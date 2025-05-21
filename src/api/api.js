import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your actual API URL
});

export default api;
