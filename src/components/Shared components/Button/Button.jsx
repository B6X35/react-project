import s from './Button.module.css';

const Button = ({ text = 'My text', isActive = true }) => {
  const element = isActive ? (
    <button className={s.btnActive}> {text} </button>
  ) : (
    <button className={s.btnPassive}>{text} </button>
  );

  return element;
};

export default Button;
