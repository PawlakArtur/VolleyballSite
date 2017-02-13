import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import teams from './data/teams';
import tournaments from './data/tournaments';
import messages from './data/messages';
import comments from './data/comments';

const defaultState = {
    teams,
    tournaments,
    messages,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;