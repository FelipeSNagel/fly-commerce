import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Signin from '~/pages/Register';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import ProductCreate from '~/pages/Product/create';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signin" exact component={Signin} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/add-stock" component={ProductCreate} isPrivate />
      <Route path="/product" component={Product} isPrivate />
      <Route path="/cart" component={Cart} isPrivate />
    </Switch>
  );
}
