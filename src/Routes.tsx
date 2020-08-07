import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

export const RoutePaths = {
  HOME: '/:videoSelected?',
};

const Routes = () => (
  <Switch>
    <Route exact path={RoutePaths.HOME} component={HomePage} />
    <Redirect to={RoutePaths.HOME} />
  </Switch>
);

export default Routes;
