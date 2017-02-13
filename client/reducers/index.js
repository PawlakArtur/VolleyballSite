import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import teams from './teams';
import tournaments from './tournaments';
import messages from './messages';
import comments from './comments'

const rootReducer = combineReducers({ teams, tournaments, messages, comments, routing: routerReducer});

export default rootReducer;