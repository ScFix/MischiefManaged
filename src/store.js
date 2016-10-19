import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './Reducers/index';

//import the static data
import trips from './Data/Trips';
import comments from './Data/Comments';
import posts from './Data/Posts';
//create an object for the default data
const defaultState = {
    trips,
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);
console.log(trips);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;