import React from 'react';

import Layout from '../components/layout';
import Providers from '../providers';


const IndexPage = () =>
  <Providers layout={() =>
    <Layout>
      <h1>Hello! Welcome to the Gatsby</h1>
    </Layout>} />;

export default IndexPage;
