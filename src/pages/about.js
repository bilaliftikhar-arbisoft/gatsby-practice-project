import React from 'react';

import Layout from '../components/layout';
import Providers from '../providers';

const AboutPage = () => <Providers
  layout={() => <Layout>
    <h1>About!</h1>
  </Layout>} />;

export default AboutPage;
