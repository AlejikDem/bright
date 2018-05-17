import { merge, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { START_SIGNUP, START_LOGIN } from '../ducks/auth';
import { setUser } from '../ducks/user';
import { setPreloader } from '../ducks/preloader';

import { loginCall, signUpCall } from '../helpers/api';
import { errorStream } from '../helpers/streams';

const authSuccess = ({ response }, storage) => {
  storage.setItem('token', response.token);

  return merge(
    of(setPreloader(false)),
    of(setUser(response.user))
  );
};

const loginRequest = (post, creds, storage) =>
  loginCall(post, creds)
    .pipe(
      mergeMap(res => authSuccess(res, storage)),
      catchError(e => errorStream(e, 'auth'))
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

const signUpRequest = (post, info, storage) =>
  signUpCall(post, info)
    .pipe(
      mergeMap(res => authSuccess(res, storage)),
      catchError(e => errorStream(e, 'auth'))
    );

export function signUpEpic(action$, _, { post, storage }) {
  return action$
    .ofType(START_SIGNUP)
    .pipe(
      map(action => action.payload),
      mergeMap(info =>
        merge(
          of(setPreloader(true)),
          signUpRequest(post, info, storage)
        )
      )
    );
}