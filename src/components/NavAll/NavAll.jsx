import React from 'react';
// import routes from '../../Routers/Routes';
import { useSelector } from 'react-redux';
import NavPrivate from './NavPrivate/NavPrivate';
import NavPublic from './NavPublic/NavPublic';
import { getIsAuth } from '../../redux/auth/authSelectors';
import s from './NavAll.module.css';

const NavAll = () => {
  const isLogin = useSelector(getIsAuth);
  return (

  <ul className={s.NavigateAll}>
    {isLogin ? (
    // <li className={s.NavPrivate}>
    <NavPrivate />)
    // </li>  
    // <li className={s.NavPublic}>
  : (  <NavPublic />) }
    {/* </li>*/}
  </ul>

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
