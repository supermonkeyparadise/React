import httpService from './httpService';
import { apiUrl } from './../config/config.json';

const apiEedpoint = `${apiUrl}/movies`;

export function getMovies() {
  return httpService.get(apiEedpoint);
}

export function deleteMovie(movieId) {
  return httpService.delete(`${apiEedpoint}/${movieId}`);
}
