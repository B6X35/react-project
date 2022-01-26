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
  onChange,
}) => {
  const handleChangeInput = e => {
    onChange(e.target.value);
  };
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={id}>
        {placeholder}
      </label>
      <input
        className={s.input}
        id={id}
        list={listId}
        type={type}
        name={name}
        // placeholder={placeholder}
        value={value}
        pattern={pattern}
        onChange={handleChangeInput}
        required
        autoComplete={false}
      />
    </div>
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
