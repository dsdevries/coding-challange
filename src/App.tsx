import { ConnectedRouter as Router } from 'connected-react-router';
import {History} from "history";
import React from 'react';
import { Provider } from 'react-redux';
import {Store} from "redux";

import Routes from './Routes';

import 'video-react/dist/video-react.css';
import './App.css';

type AppProps = {
    history: History,
    store: Store
}

function App({ history, store }: AppProps) {
  return (
    <div className="App">
      <Provider store={store}>
          <Router history={history}>
            <Routes />
          </Router>
      </Provider>
    </div>
  );
}

export default App;
