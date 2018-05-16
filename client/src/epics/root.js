import { combineEpics } from 'redux-observable';

import { logInEpic } from './auth';
import { onInitEpic } from './init';

export default combineEpics(
  logInEpic,
  onInitEpic
);