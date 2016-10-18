import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store, { history } from './store';

import App from './App';
import Comment from './Component/CommentBox/CommentBox'
import CollectionView from "./Component/CollectionView/CollectionView"

import './index.css';
import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CollectionView} />``
      <Route path="comment" component={Comment} />
        <Route path="Story" component={Comment} />
        <Route path="Event" component={Comment} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))