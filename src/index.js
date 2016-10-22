import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store, { history } from './store';

import Main from './Component/Main';
import Comment from './Component/CommentBox/CommentBox'
import { TripsView, PostsView } from "./Component/ViewAdapters/CollectionViewAdapters";
import SingleView from "./Component/SingleView/SingleView";
import About from './Component/About/About';

import './index.css';
import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={TripsView} />
        <Route path="Trips/:code" >
          <IndexRoute component={PostsView} />
          <Route path=":picCode" component={SingleView} />
        </Route>
        <Route path="About" component={About} />
        <Route path="Event" component={Comment} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))