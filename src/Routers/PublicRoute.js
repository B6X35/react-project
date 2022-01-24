import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ path, exact, component, isLoginUser, isRestricted }) => {
  const dailyRate = useSelector(state => state.auth.currentUser.isLoginUser);
  
  return isLoginUser && isRestricted ? (
    dailyRate ? (
      <Redirect to="/daily-page" />
    ) : (
      <Redirect to="/calculator" />
    )
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;