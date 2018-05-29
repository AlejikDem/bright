import { combineEpics } from 'redux-observable';

import { logInEpic, signUpEpic } from './auth';
import { onInitEpic } from './init';
import { logoutEpic } from './logout';

export default combineEpics(
  logInEpic,
  onInitEpic,
  signUpEpic,
  logoutEpic
);