import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './wretched_relics.svg';
import Grid from '@material-ui/core/Grid';
import ProductPane from './productPane';
import Header from './Header';
import Base from './Base';

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

class Root extends React.Component {
  render() {
    return (
      <div>
      <Base></Base>
      <MainSection></MainSection>
      </div>
    )
  }
}

class MainSection extends React.Component {
  render() {
    return (
      <div className="main">
        <ProductPane></ProductPane>
      </div>
        )
  }
}

// class FilterPane extends React.Component {
//   render() {
//     return (
//       <div className="filter-pane">
//         Filters go here.
//         <ul>
//           <li>Website</li>
//           <li>Tags</li>
//           <li>Etc...</li>
//         </ul>
//       </div>
//     )
//   }
// }




ReactDOM.render(
  React.createElement(Root, null),
  document.getElementById('root')
)
