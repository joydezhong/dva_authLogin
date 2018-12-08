import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PrivateRoute from './common/privateRoute';

// import { Route, Redirect, withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types';

import Login from './routes/Login';
import IndexPage from './routes/IndexPage';
import PublicPage from './routes/PublicPage';
import RoutePage from './routes/AuthRoutePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/PublicPage" exact component={PublicPage} />
        <PrivateRoute path="/RoutePage" component={RoutePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
