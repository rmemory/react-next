import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          // Cookies come along with each request
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

/* withApollo is a high order component. It exposes the Apollo
   client as a prop. The client is called in the pages/_app.js */
export default withApollo(createClient);
