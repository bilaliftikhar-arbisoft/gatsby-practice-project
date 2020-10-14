import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { UserList } from '../components/user';
import { NotFound } from '../components/404.js';
import Profile from '../components/profile';
import Layout from '../components/layout';
import Login from '../components/login';
import PrivateRoute from '../routes';
import { store } from '../store';

const App = () => {
  return (
    <Provider store={store} >
      <Layout>
        <Router basepath="/app">
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/profile/:id" component={Profile} />
          <PrivateRoute path="/login" component={Login} />
          <PrivateRoute path="/users" component={UserList} />
          <NotFound path="*" />
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
