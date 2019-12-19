import React from 'react';
import Routes from './route'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

let uri1 = "http://192.168.0.142:8000/graphql"
let uri2 = "http://localhost:8000/graphql"

const client = new ApolloClient({
  uri:uri2
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Routes/>
      </div>
    </ApolloProvider>
  );
}

export default App;
