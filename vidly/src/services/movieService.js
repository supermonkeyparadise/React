import httpService from './httpService';

const apiEedpoint = 'http://localhost:3900/api/movies';
export function getMovies() {
  return httpService.get(apiEedpoint);
}

export function deleteMovie(movieId) {
  return httpService.delete(`${apiEedpoint}/${movieId}`);
}
