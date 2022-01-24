import React from 'react';
import routes from '../../Routers/Routes';

import NavPrivate from './NavPrivate/NavPrivate';
import NavPublic from './NavPublic/NavPublic';

import PrivateRoute from '../../Routers/PrivateRoute';
import PublicRoute from '../../Routers/PublicRoute';

const NavAll = () =>
  routes.map(route => {
    return route.private ? (
      <>
        <PrivateRoute />
        <NavPrivate key={route.path} {...route} />
      </>
    ) : (
      <>
        <NavPublic />
        <PublicRoute key={route.path} {...route} />
      </>
    );
  });

export default NavAll;
