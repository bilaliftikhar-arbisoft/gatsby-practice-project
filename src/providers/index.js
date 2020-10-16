import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { store } from '../store';
import { client } from '../apolloClient';

const Providers = ({ layout: Layout, ...rest }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store} >
        <Layout {...rest} />
      </Provider>
    </ApolloProvider>
  );
};

export default Providers;
