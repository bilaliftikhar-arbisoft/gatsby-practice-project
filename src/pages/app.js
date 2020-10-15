import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/layout';
import Login from '../components/login';
import { NotFound } from '../components/404.js';
import Profile from '../components/profile';
import PrivateRoute from '../routes';

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/login" component={Login} />
        <NotFound path="*" />
      </Router>
    </Layout>
  );
};

export default App;
