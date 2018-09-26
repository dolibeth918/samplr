import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './Main';

ReactDOM.render(
  <Router>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('app')
);
