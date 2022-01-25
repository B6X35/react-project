import { lazy } from 'react';

const routes = [
  {
    path: '/diary-page',
    label: 'Diary',
    exact: true,
    component: lazy(() => import('../pages/DiaryPage/DiaryPage')),
    private: true,
    isRestricted: false,
  },
//   {
//     path: '/calculator',
//     label: 'Calculator',
//     exact: true,
//     component: lazy(() => import('../pages/')),
//     private: true,
//     isRestricted: false,
//   },
  {
    path: '/main',
    exact: true,
    isRestricted: true,
    private: false,
    component: lazy(() => import('../pages/MainPage/MainPage')),
    title: 'MAIN',
  },
  {
    path: '/login',
    exact: true,
    isRestricted: true,
    private: false,
    component: lazy(() => import('../pages/LoginPage/LoginPage')),
    title: 'LOGIN',
  },
  {
    path: '/registration',
    exact: true,
    isRestricted: true,
    private: false,
    component: lazy(() => import('../pages/RegistrationPage/RegistrationPage')),
    title: 'REGISTRATION',
  },
];

export default routes;
