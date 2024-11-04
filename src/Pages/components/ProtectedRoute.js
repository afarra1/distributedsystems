import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, session, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      session ? <Component {...props} /> : ''
    }
  />
);

export default ProtectedRoute;
