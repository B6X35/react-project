import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ name, value, placeholder = 'Hello world', pattern }) => {
  return (
    <input
      className={s.input}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      pattern={pattern}
      required
    />
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string,
};
