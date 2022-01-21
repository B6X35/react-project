import React from "react";                      
import s from "./NavAll.module.css";
import {NavLink} from "react-router-dom"; 

const NavPublic = () => {
    return (
        <>
        <nav className={s.container}>
        <ul className={s.navContainer}>
            <li>
            <NavLink 
              activeClassName={s.active} exact to="/login" className={s.login}><span>ВХОД</span>
            </NavLink>
            </li>
            <li>
            <NavLink activeClassName={s.active} exact to="/register">
            <span>РЕГИСТРАЦИЯ</span>
            </NavLink>
            </li>
  
            </ul>
        </nav>
      </>
    )
}

export default NavPublic;