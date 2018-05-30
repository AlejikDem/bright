import { merge, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { startLogout, finishInit } from '../ducks/auth';
import { addError, hideError } from '../ducks/errors';
import { setPreloader } from '../ducks/preloader';

const JWT_EXPIRED = 'jwt expired';

export const errorStream = (error, name) => {
  const message = error.xhr.response.error;

  if (message === JWT_EXPIRED) {
    return merge(
      of(setPreloader(false)),
      of(startLogout()),
      of(finishInit())
    );
  }

  return merge(
    of(setPreloader(false)),
    of(addError(name, message)),
    of(hideError(name)).pipe(delay(3000))
  );
};