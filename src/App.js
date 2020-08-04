import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

import Routes from './Routes';

import './App.css';
import 'video-react/dist/video-react.css';

function App({ history, store }) {
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
