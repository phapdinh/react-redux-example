import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import todoApp from './reducers';
import App from './pages/app';

let store = createStore(todoApp, applyMiddleware(logger, thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)