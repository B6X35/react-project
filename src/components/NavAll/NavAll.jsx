import React from 'react';
import routes from '../../Routers/Routes';

import NavPrivate from './NavPrivate/NavPrivate';
import NavPublic from './NavPublic/NavPublic';

import PrivateRoute from '../../Routers/PrivateRoute';
import PublicRoute from '../../Routers/PublicRoute';

const NavAll = () =>
  routes.map(route => {
    const Component = route.component
    return route.private ? (
      <>
        <PrivateRoute exact path={route.path} {...route}>
          <NavPrivate exact path={route.path} {...route} />
        </PrivateRoute>
      </>
    ) : (
      <>
        <PublicRoute isLoginUser={false} exact path={route.path} {...route}>
          <NavPublic />
          <Component />
        </PublicRoute>
      </>
    );
  });

export default NavAll;
