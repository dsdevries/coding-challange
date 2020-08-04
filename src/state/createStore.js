import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './modules';

export default history => {
  const middleware = [
    routerMiddleware(history),
    thunk,
  ];

  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};