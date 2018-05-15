import { combineReducers } from 'redux';

import preloader from './preloader';
import user from './user';
import errors from './errors';
import auth from './auth';

export default combineReducers({
  preloader,
  user,
  errors,
  auth
});