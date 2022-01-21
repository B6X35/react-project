import s from './Input.module.css';
const Input = ({ type = 'text', name, value, placeholder = 'Hello world', pattern }) => {
  return (
    <input
      className={s.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required="true"
      pattern={pattern}
      required
      value={value}
    />
  );
};

export default Input;
