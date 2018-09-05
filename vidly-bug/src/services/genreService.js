import httpService from './httpService';
import { apiUrl } from './../config/config.json';

export function getGenres() {
  return httpService.get(`${apiUrl}/genres`);
}
