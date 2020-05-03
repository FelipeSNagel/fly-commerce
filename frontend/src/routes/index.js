import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Signin from '~/pages/Register';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signin" exact component={Signin} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
