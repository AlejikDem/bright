import { combineEpics } from 'redux-observable';

import { logInEpic, onInitEpic } from './auth';

export default combineEpics(
  logInEpic,
  onInitEpic
);