import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import rootReducer from '../ducks/root';
import rootEpic from '../epics/root';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    storage: window.localStorage,
    getJSON: ajax.getJSON,
    post: ajax.post
  }
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(deps = {}) {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  return store;
};