import React from 'react';
import s from './NavPublic.module.css';
import {NavLink} from "react-router-dom";

const NavPublic = () => {
  return (
    <>
          <li>
            <NavLink exact to="/login" className={s.login}>
              Вход
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/registration" className={s.register}>
              Регистрация
            </NavLink>
          </li>
        
    </>
  );
};

export default NavPublic;
