import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Base from './components/Base';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from './components/Header/Header.js';
import SideBar from './components/Sidebar/Sidebar.js';
import routes from './routes.js';
import logo from './wretched_relics.svg';
import App from './App.js';
import "./assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#ffffff',
    },
    secondary: {
      main: '#000000'
    }
  }, text: {
    primary: '#ffffff'
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const hist = createBrowserHistory();



// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Router history={hist}>
//       {/* <Header color="dark"></Header> */}
//       <SideBar routes={routes} bgColor="white" logo={logo} logoText="Wretched Relics"></SideBar>
//     </Router>
//   </ApolloProvider>
//   ,
//   document.getElementById('root')
// );
