import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Diary from './Diary';
import NewDiary from './NewDiary';
import Login from './Login';
import CreateAccount from './CreateAccount';
import EditAccount from './EditAccount';
import UserProfile from './UserProfile';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/diary" component={Diary} exact />
        <Route path="/diary/new" component={NewDiary} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/accounts/new" component={CreateAccount} exact />
        <Route path="/accounts/edit" component={EditAccount} exact />
        <Route path="/:username" component={UserProfile} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
