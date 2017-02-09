import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({ items, receipts, routing: routerReducer});

export default rootReducer;