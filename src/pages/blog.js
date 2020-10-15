import React from 'react';

import Layout from '../components/layout';
import Providers from '../providers';


const BlogPage = () =>
  <Providers layout={() =>
    <Layout>
      <h1>Blog!</h1>
    </Layout>
  } />;

export default BlogPage;
