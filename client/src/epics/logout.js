import { merge, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { START_LOGOUT, setLoggedIn } from '../ducks/auth';
import { setUser } from '../ducks/user';

export function logoutEpic(action$, _, { post, storage }) {
  return action$
    .ofType(START_LOGOUT)
    .pipe(
      mergeMap(() => {
        storage.removeItem('token');
        return merge(
          of(setUser({})),
          of(setLoggedIn(false))
        );
      }),
    );
}