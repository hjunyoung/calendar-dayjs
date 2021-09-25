import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './Home';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Redirect from="*" to="/" />
    </Router>
  );
};

export default RouterComponent;
