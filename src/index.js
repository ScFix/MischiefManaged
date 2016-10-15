import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Comment from './CommentBox/CommentBox'

import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="comment" component={Comment} />
      <Route path="Story" component={Comment} />
      <Route path="Event" component={Comment} />
    </Route>
  </Router>
), document.getElementById('root'))