import React from 'react';
//import PropTypes from 'prop-types';
import s from './NavPrivate.module.css';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import userSelectors from '../../redux/user/userSelectors.js';

const NavPrivate = () => {
  return (
    <>
      <nav className={s.container}>
        <ul className={s.links}>
          <li>
            <NavLink exact to="/diary-page" className={s.linkDiary}>
              ДНЕВНИК
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/calculator" className={s.linkCalc}>
              КАЛЬКУЛЯТОР
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavPrivate;
