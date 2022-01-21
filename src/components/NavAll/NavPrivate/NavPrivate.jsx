import React from 'react';
//import PropTypes from 'prop-types';
import styles from './AuthNavigations.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import userSelectors from '../../redux/user/userSelectors.js';

const AuthNavigations = ({ dailyRate, userDataDailyRate }) => (
  <ul className={styles.authnav}>
    <li>
      <NavLink exact to="/diary" className={styles.link}>
        <span>ДНЕВНИК</span>
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/calculator" className={styles.link}>
        <span>КАЛЬКУЛЯТОР</span>
      </NavLink>
    </li>
  </ul>
);
const mapState = state => ({
  dailyRate: userSelectors.getCalories(state),
  userDataDailyRate: userSelectors.getUserDataDailyRate(state),
});

export default connect(mapState)(AuthNavigations);

