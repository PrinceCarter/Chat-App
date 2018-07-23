import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setUpSocket from './sockets';
import handleNewMessage from './sagas';
import reducers from './reducers';

const sagaMiddleware=createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
let username = '';

const unsubscribe = store.subscribe(() => {
  username = store.getState().user.user;
  const socket = setUpSocket(store.dispatch, username);
  sagaMiddleware.run(handleNewMessage, {socket, username});
  unsubscribe();
});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
