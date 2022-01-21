import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { Link } from 'react-router-dom';
// import '../../App.module.css';
import styles from '../Header/Header.module.css';
// import { logOut } from '../../redux/authorization/auth-operations';
// import { getIsAuth } from '../../redux/authorization/auth-selectors';


import UserInfo from '../NavAll/UserInfo/UserInfo';



function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  return (
    <div className={styles.navWrap}>
      <UserInfo isAuth={isAuth} dispatch={dispatch} />
    </div>
  );
}
export default Header;