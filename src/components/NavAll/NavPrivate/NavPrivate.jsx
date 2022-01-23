import React from 'react';
//import PropTypes from 'prop-types';
import s from './NavPrivate.module.css';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import userSelectors from '../../redux/user/userSelectors.js';

const NavPrivate = () => {
  return (
    <>
  <ul className={s.links}>
    <li>
      <div exact to="/diary" className={s.linkDiary}>
        <span>ДНЕВНИК</span>
      </div>
    </li>
    <li>
      <div exact to="/calculator" className={s.linkCalc}>
        <span>КАЛЬКУЛЯТОР</span>
      </div>
    </li>
  </ul>
  </>
  )
  };
// const mapState = state => ({
//   dailyRate: userSelectors.getCalories(state),
//   userDataDailyRate: userSelectors.getUserDataDailyRate(state),
// });

export default NavPrivate;

