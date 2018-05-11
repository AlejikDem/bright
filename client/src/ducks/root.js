import { combineReducers } from 'redux';

import preloader from './preloader';
import user from './user';
import errors from './errors';

export default combineReducers({
  preloader,
  user,
  errors
});