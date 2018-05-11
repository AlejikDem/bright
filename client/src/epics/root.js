import { combineEpics } from 'redux-observable';

import { logInEpic } from './auth';

export default combineEpics(
  logInEpic
);