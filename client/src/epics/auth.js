import { START_SIGNUP, START_LOGIN, setUser } from '../ducks/user';
import { setPreloader } from '../ducks/preloader';
import { addError, hideError } from '../ducks/errors';

import { loginUrl } from '../helpers/api';

import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { map, catchError, mergeMap, delay } from 'rxjs/operators';

const loginSuccess = ({ response }) =>
  merge(
    of(setPreloader(false)),
    of(setUser(response.user))
  );

const signError = error => 
  merge(
    of(setPreloader(false)),
    of(addError('login', error.xhr.response.error)),
    of(hideError('login')).pipe(delay(3000))
  );

const loginRequest = (post, {email, password}) =>
  post(loginUrl, { email, password})
    .pipe(
      mergeMap(loginSuccess),
      catchError(signError)
    );

export function logInEpic(action$, _, { post }) {
  return action$
    .ofType(START_LOGIN)
    .pipe(
      map(action => action.payload),
      mergeMap(creds =>
        merge(
          of(setPreloader(true)),
          loginRequest(post, creds)
        )
      )
    );
}

export function signUpEpic(action$) {
  return action$
    .ofType(START_SIGNUP)
    .map(res => console.log(res));
}