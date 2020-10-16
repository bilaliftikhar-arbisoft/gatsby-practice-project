import React from 'react';
import { Router } from '@reach/router';

import { UserList } from '../components/user';
import { NotFound } from '../components/404.js';
import Profile from '../components/profile';
import Layout from '../components/layout';
import Login from '../components/login';
import PrivateRoute from '../routes';
import Providers from '../providers';


const App = () => {
  return (
    <Providers layout={
      () =>
        <Layout>
          <Router basepath="/app">
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/profile/:id" component={Profile} />
            <PrivateRoute path="/login" component={Login} />
            <PrivateRoute path="/users" component={UserList} />
            <NotFound path="*" />
          </Router>
        </Layout>
    } />
  );
};

export default App;
