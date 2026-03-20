import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://tech-test-backend.dwsbrazil.io',
});