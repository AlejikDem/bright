import { merge, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { START_INIT, finishInit, setLoggedIn } from '../ducks/auth';
import { setUser } from '../ducks/user';
import { setPreloader } from '../ducks/preloader';

import { getActiveUser } from '../helpers/api';
import { errorStream } from '../helpers/streams';

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
            catchError(e => errorStream(e, 'init'))
          );
      }),
    );
}

const initSuccess = res =>
  merge(
    of(setPreloader(false)),
    of(setUser(res.user)),
    of(setLoggedIn(true)),
    of(finishInit())
  );