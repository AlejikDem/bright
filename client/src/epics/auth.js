import { merge, of } from 'rxjs';
import { map, catchError, mergeMap, delay } from 'rxjs/operators';

import { START_SIGNUP, START_LOGIN } from '../ducks/auth';
import { setUser } from '../ducks/user';
import { setPreloader } from '../ducks/preloader';
import { addError, hideError } from '../ducks/errors';

import { loginCall } from '../helpers/api';

const loginSuccess = ({ response }, storage) => {
  storage.setItem('token', response.token);

  return merge(
    of(setPreloader(false)),
    of(setUser(response.user))
  );
};

const signError = error => 
  merge(
    of(setPreloader(false)),
    of(addError('login', error.xhr.response.error)),
    of(hideError('login')).pipe(delay(3000))
  );

const loginRequest = (post, creds, storage) =>
  loginCall(post, creds)
    .pipe(
      mergeMap(res => loginSuccess(res, storage)),
      catchError(signError)
    );

export function logInEpic(action$, _, { post, storage }) {
  return action$
    .ofType(START_LOGIN)
    .pipe(
      map(action => action.payload),
      mergeMap(creds =>
        merge(
          of(setPreloader(true)),
          loginRequest(post, creds, storage)
        )
      )
    );
}

export function signUpEpic(action$) {
  return action$
    .ofType(START_SIGNUP)
    .map(res => console.log(res));
}