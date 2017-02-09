import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

require("./styles/style.scss");

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>
);


render(router, document.getElementById('root'));

