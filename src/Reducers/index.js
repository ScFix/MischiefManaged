import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './Posts';
import comments from './Comments';
import trips from './Trips';

const rootReducer = combineReducers({ posts, comments, trips, routing: routerReducer });

export default rootReducer; 