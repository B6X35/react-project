import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text = 'My text', isActive = true, type = 'button', onClick }) => {
  const element = isActive ? (
    <button className={s.btnActive} type={type} onClick={onClick}>
      {text}
    </button>
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
