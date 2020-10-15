import React from 'react';
import { Provider } from 'react-redux';

import Layout from '../components/layout';
import { store } from '../store';


const IndexPage = () => (
  <Provider store={store} >
    <Layout>
      <h1>Hello! Welcome to the Gatsby</h1>
    </Layout>
  </Provider>
);

export default IndexPage;
