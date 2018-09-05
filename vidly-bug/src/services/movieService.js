import httpService from './httpService';
import { apiUrl } from './../config/config.json';

const apiEedpoint = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${apiEedpoint}/${id}`;
}

export function getMovies() {
  return httpService.get(apiEedpoint);
}

export function getMovie(movieId) {
  return httpService.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  // update movie
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(movieUrl(movie._id), body);
  }

  // create movie
  return httpService.post(apiEedpoint, movie);
}

export function deleteMovie(movieId) {
  return httpService.delete(movieUrl(movieId));
}
