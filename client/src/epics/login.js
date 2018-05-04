import { SET_PRELOADER } from '../ducks/preloader';
import 'rxjs/add/operator/map';

export default function logInEpic(action$) {
  return action$
    .ofType(SET_PRELOADER)
    .map(res => console.log(res));
}