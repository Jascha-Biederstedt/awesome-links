import { ApolloProvider } from '@apollo/client';

import Layout from '../components/Layout';
import { client } from '../lib/apollo';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
