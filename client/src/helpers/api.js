const BASE_URL = 'http://localhost:8080';
const USERS_URL = `${BASE_URL}/users`;
const LOGIN_URL = `${BASE_URL}/login`;

export const loginCall = (post, { email, password }) =>
  post(LOGIN_URL, { email, password});

export const getActiveUser = (getJSON, token) =>
  getJSON(`${USERS_URL}/activeUser`, {
    'x-access-token': token
  });