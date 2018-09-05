import httpService from './httpService';
import { apiUrl } from './../config/config.json';

const apiEndpoint = `${apiUrl}/users`;

export function register(user) {
  httpService.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name
  });
}
