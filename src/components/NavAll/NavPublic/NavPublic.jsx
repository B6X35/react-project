import React from 'react';
import s from './NavPublic.module.css';
import {NavLink} from "react-router-dom";

const NavPublic = () => {
  return (
    <>
      <nav className={s.container}>
        <ul className={s.navContainer}>
          <li>
            <NavLink exact to="/login" className={s.login}>
              Вход
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/register" className={s.login}>
              Регистрация
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavPublic;
