import React from 'react';
import { Provider } from 'react-redux';

import Layout from '../components/layout';
import { store } from '../store';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Provider store={store} >
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </Provider>
);

export default NotFoundPage;
