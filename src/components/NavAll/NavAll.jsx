import React from 'react';
import { useSelector } from 'react-redux';

import NavPrivate from './NavPrivate/NavPrivate';
import NavPublic from './NavPublic/NavPublic';
import { getIsAuth } from '../../redux/auth/authSelectors';

const NavAll = () => {
  const isLogin = useSelector(getIsAuth);
  return (
  <>
  {isLogin ? <NavPrivate /> : <NavPublic />}
  </>
  );
};
// routes.map(route => {
//   const Component = route.component
//   return route.private ? (
//     <>
//       <PrivateRoute exact path={route.path} {...route}>
//         <NavPrivate exact path={route.path} {...route} />
//       </PrivateRoute>
//     </>
//   ) : (
//     <>
//       <PublicRoute isLoginUser={false} exact path={route.path} {...route}>
//         <NavPublic />
//         <Component />
//       </PublicRoute>
//     </>
//   );
// });

export default NavAll;
