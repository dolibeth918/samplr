import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main';

ReactDOM.render(
  <Router>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('app')
);
