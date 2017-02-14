import React from 'react';
import { render } from 'react-dom';

require("./styles/style.scss");

import App from './components/App';
import Team from './components/Team';
import TeamsGrid from './components/TeamsGrid';
import MessageDetails from './components/MessageDetails';
import MessagesGrid from './components/MessagesGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MessagesGrid}></IndexRoute>
                <Route path="/view-message/:messageId" component={MessageDetails}></Route>
                <Route path="/teams" component={TeamsGrid}></Route>
                <Route path="/view-team/:teamId" component={Team}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));