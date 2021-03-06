import jwtDecode from 'jwt-decode';

import http from './httpService';

import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/auth';
const tokenKey = 'token';

// 當取得 jwt 後，才指派給 axios
http.setJwt(getJwt());

export async function login(email, password) {
  // jwt 存在 body 中
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  // jwt 存在 response header 中
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
