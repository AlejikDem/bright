import { combineEpics } from 'redux-observable';

import logInEpic from './login';

export default combineEpics(
  logInEpic
);