import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Base from './Base';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});


ReactDOM.render(
  React.createElement(ApolloProvider,{client: client},
  React.createElement(Base, null),
  ),
  document.getElementById('root')
)
