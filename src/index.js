import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import createStore from "./state/createStore";
import App from './App';

import './index.css';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));

