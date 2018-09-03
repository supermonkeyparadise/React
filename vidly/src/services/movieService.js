import httpService from './httpService';
import { apiUrl } from './../config/config.json';

const apiEedpoint = `${apiUrl}/movies`;

export function getMovies() {
  return httpService.get(apiEedpoint);
}

export function getMovie(movieId) {
  return httpService.get(`${apiEedpoint}/${movieId}`);
}

export function saveMovie(movie) {
  // update movie
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(`${apiEedpoint}/${movie._id}`, body);
  }

  // create movie
  return httpService.post(apiEedpoint, movie);
}

export function deleteMovie(movieId) {
  return httpService.delete(`${apiEedpoint}/${movieId}`);
}
