import React from 'react';
import ReactDOM from 'react-dom';
import {ThunkAction} from "redux-thunk";
import {Action} from 'redux-actions';
import { createBrowserHistory } from 'history';

import createStore from "./state/createStore";
import App from './App';

import './index.css';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<R, RootState, unknown, Action<any>>;