import { NavLink } from 'react-router-dom';

import s from './Button.module.css';
import PropTypes from 'prop-types';
// import reactRouterDom from 'react-router-dom';

const Button = ({ text = 'My text', isActive = true, type = 'button', pathName, onClick }) => {
  const element = isActive ? (
    <button className={s.btnActive} type={type} onClick={onClick}>
      {text}
    </button>
  ) : pathName ? (
    <NavLink className={s.btnPassive} exact to={pathName}>
      {text}
    </NavLink>
  ) : (
    <button className={s.btnPassive} type={type} onClick={onClick}>
      {text}
    </button>
  );

  return element;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};
