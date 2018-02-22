import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import todoApp from './reducers';
import App from './pages/app';

let store = createStore(todoApp, applyMiddleware(logger, thunkMiddleware));

render(
    <Provider store={store}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>,
    document.getElementById('app')
)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./pages/app', () => { render(App) })
}