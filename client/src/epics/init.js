import { merge, of } from 'rxjs';
import { catchError, mergeMap, delay } from 'rxjs/operators';

import { START_INIT, finishInit } from '../ducks/auth';
import { setUser } from '../ducks/user';
import { setPreloader } from '../ducks/preloader';
import { addError, hideError } from '../ducks/errors';

import { getActiveUser } from '../helpers/api';

export function onInitEpic(action$, _, { getJSON, storage, fetch }) {
  const token = storage.getItem('token');

  return action$
    .ofType(START_INIT)
    .pipe(
      mergeMap(() => {
        if (!token) return of(finishInit());
        return getActiveUser(getJSON, token)
          .pipe(
            mergeMap(initSuccess),
            catchError(initError)
          );
      }),
    );
}

const initError = error =>
  merge(
    of(setPreloader(false)),
    of(addError('init', error)),
    of(hideError('init')).pipe(delay(3000))
  );

const initSuccess = (res) => {
  return merge(
    of(setPreloader(false)),
    of(setUser(res.user)),
    of(finishInit())
  );
};