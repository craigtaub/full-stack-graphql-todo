import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

const backendUrl = '192.168.99.100:4000';

const client = new ApolloClient({
  uri: `http://${backendUrl}/graphiql`
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
