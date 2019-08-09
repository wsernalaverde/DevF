import { ApolloClient } from 'apollo-client'; // Levanta el cliente para conectarnos con nuestro backend graphql(es por ejemplo un axios)
import { InMemoryCache } from 'apollo-cache-inmemory'; // Es para poder acceder a la cache del navegador y poder manejarlo
import { createUploadLink } from 'apollo-upload-client';  // Este nos permite soportar peticiona multipart para subir archivos
import { onError } from 'apollo-link-error'; // Este nos permite manejar los errores
import { ApolloLink } from 'apollo-link'; // Este nos permite poder conectarnos a un endpoint y hacer peticiones de tipo post a nuestro backend
// import { withClientState } from 'apollo-link-state'; // Un link para manejar el estado de cache

// import defaults from './defaults';
// import resolvers from './resolvers';

//para subscriptions
// import { WebSocketLink } from 'apollo-link-ws';
// import { split } from 'apollo-link';
// import { getMainDefinition } from 'apollo-utilities';

const HTTP_HOST = `https://api-graphql-dev.herokuapp.com/` // se puede poner localhost:4000
// const WS_HOST = 'wss://limitless-dusk-23035.herokuapp.com/graphql';

const httpLink = new createUploadLink({
  uri: HTTP_HOST
})

// const wsLink = new WebSocketLink({
//   uri: WS_HOST,
//   options: {
//     reconnect: true
//   }
// });

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

const AuthLink = (operation, next) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    operation.setContext(context => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: token,
      },
    }));
  }
  return next(operation);
};

const cache = new InMemoryCache();
// const stateLink = withClientState({
//   cache,
//   defaults,
//   resolvers,
// });

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        // eslint-disable-next-line
        graphQLErrors.map(({ message, locations, path, extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('jwt');
            client.resetStore()
          }
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }
    }),
    AuthLink,
    httpLink,
  ]),
  cache,
});

export default client;
