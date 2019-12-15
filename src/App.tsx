import React from 'react';
import Routes from './route'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri:"http://192.168.0.142:8000/graphql"
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
