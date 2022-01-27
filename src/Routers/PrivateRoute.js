import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsAuth } from '../redux/auth/authSelectors';

const PrivateRoute = ({ path, exact, component, children }) => {
  const isLoginUser = useSelector(getIsAuth);
  return isLoginUser ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
   <>{isFetchCurrentUser ? <Redirect to="/main" /> : <Redirect to="/login" />}</>
  );
};

export default PrivateRoute;
