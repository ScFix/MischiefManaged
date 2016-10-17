import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Comment from './Component/CommentBox/CommentBox'
import MischiefList from "./Component/MischiefList/MischiefList"

import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MischiefList} />``
      <Route path="comment" component={Comment} />
      <Route path="Story" component={Comment} />
      <Route path="Event" component={Comment} />
    </Route>
  </Router>
), document.getElementById('root'))