import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './config/store';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';


import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); //configuring the store
const history = createBrowserHistory();

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
      <Switch>
         <Route exact path="/" component={App} />
         
      </Switch>
   </Router>
</Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
