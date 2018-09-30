import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Main, UserHome } from './Components';

let isLoggedIn = true;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/home" component={UserHome} />
    </Switch>
  );
};

export default withRouter(Routes);
