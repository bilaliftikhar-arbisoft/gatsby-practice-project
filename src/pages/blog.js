import React from 'react';
import { Provider } from 'react-redux';

import Layout from '../components/layout';
import { store } from '../store';

const BlogPage = () => {
  return (
    <Provider store={store} >
      <Layout>
        <h1>Blog!</h1>
      </Layout>
    </Provider>
  );
};

export default BlogPage;
