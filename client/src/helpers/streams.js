import { merge, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { addError, hideError } from '../ducks/errors';
import { setPreloader } from '../ducks/preloader';

export const errorStream = (error, name) =>
  merge(
    of(setPreloader(false)),
    of(addError(name, error.xhr.response.error)),
    of(hideError(name)).pipe(delay(3000))
  );