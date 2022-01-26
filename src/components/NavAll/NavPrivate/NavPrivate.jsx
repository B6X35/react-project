import React from 'react';
//import PropTypes from 'prop-types';
import s from './NavPrivate.module.css';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import userSelectors from '../../redux/user/userSelectors.js';

const NavPrivate = () => {
  return (
    <>
      <ul className={s.navPrivateWrap}>
          <li >
            <NavLink exact to="/diary-page" className={s.diary}>
              ДНЕВНИК
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/calculator" className={s.calculator}>
              КАЛЬКУЛЯТОР
            </NavLink>
          </li>
          </ul>
    </>
  );
};

export default NavPrivate;
