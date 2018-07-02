import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphiql'
});

client.query({
  query: gql`
    query TodoApp {
      allLinks {
        id
        url
        description
      }
    }
  `,
})
  .then(resp => console.log(resp.data.allLinks))
  .catch(error => console.error(error));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
