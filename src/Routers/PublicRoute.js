import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsAuth } from '../redux/auth/authSelectors';

const PublicRoute = ({ path, exact, component, isRestricted, children }) => {
  const isLoginUser = useSelector(getIsAuth);

  console.log('isLoginUser && isRestricted', isLoginUser && isRestricted);

  return isLoginUser && isRestricted ? (
    isLoginUser ? (
      <Redirect to="/diary-page" />
    ) : (
      <Redirect to="/calculator" />
    )
  ) : (
    <>
    {console.log("first")}
    <Route path={path} exact={exact}>
      {children}
    </Route>
    </>
  );
};

export default PublicRoute;
