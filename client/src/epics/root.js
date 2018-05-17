import { combineEpics } from 'redux-observable';

import { logInEpic, signUpEpic } from './auth';
import { onInitEpic } from './init';

export default combineEpics(
  logInEpic,
  onInitEpic,
  signUpEpic
);