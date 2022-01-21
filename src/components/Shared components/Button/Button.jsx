import s from './Button.module.css';

const Button = ({ text = 'My text', isActive = true, typeBtn = 'button' }) => {
  const element = isActive ? (
    <button className={s.btnActive} type={typeBtn} >
      {text}
    </button>
  ) : (
    <button className={s.btnPassive} type={typeBtn}>
      {text}
    </button>
  );

  return element;
};

export default Button;
