import {History} from "history";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './createRootReducer';

export default (history:History, initialState = {}) => {
  const middleware = [
    routerMiddleware(history),
    thunk,
  ];

  return createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};
