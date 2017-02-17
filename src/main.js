import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import Products from './containers/Products.jsx';
import SignUp from './containers/SignUp.jsx';

import store from './store';

import 'normalize.css';
import './assets/main.css';

const routes = (
    <Route component={App}>
        <Route path="/" component={Products} />
        <Route path="/user/signup" component={SignUp} />
    </Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
