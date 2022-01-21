import React from 'react';
import s from './NavPublic.module.css';
// import {NavLink} from "react-router-dom";

const NavPublic = () => {
  return (
    <>
      <nav className={s.container}>
        <ul className={s.navContainer}>
          <li>
            <div exact to="/login" className={s.login}>
              <span>Вход</span>
            </div>
          </li>
          <li>
            <div exact to="/register" className={s.login}>
              <span>Регистрация</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavPublic;
