import React from 'react';
import { Provider, useDispatch } from 'react-redux';

import Layout from '../components/layout';
import { store } from '../store';
import { headerSet } from '../actions/header';


const AboutPage = () => {

  return (
    <Provider store={store} >
      <Layout>
        <h1>About!</h1>
      </Layout>
    </Provider>

  );
};

export default AboutPage;
