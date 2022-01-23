import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({
  type = 'text',
  id,
  name,
  value,
  placeholder = 'Hello world',
  listId = 'somelistId',
  pattern,
}) => {
  return (
    <input
      id={id}
      list={listId}
      className={s.input}
      type={type}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  pattern: PropTypes.string,
  listId: PropTypes.string,
};
