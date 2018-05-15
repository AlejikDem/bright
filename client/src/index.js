import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import './reset.css';

import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './helpers/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
