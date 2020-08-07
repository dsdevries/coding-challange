import { ConnectedRouter as Router } from 'connected-react-router';
import {History} from "history";
import PropTypes from 'prop-types';
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

App.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
};

export default App;
