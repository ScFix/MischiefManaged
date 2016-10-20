import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store, { history } from './store';

import Main from './Component/Main';
import Comment from './Component/CommentBox/CommentBox'
import {TripsView, PostsView}  from "./Component/ViewAdapters/CollectionViewAdapters";
import SingleView from "./Component/SingleView/SingleView";

import './index.css';
import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={TripsView} />``
        <Route path="Trips/:code" component={PostsView} />
        <Route path="Story" component={Comment} />
        <Route path="Event" component={Comment} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))