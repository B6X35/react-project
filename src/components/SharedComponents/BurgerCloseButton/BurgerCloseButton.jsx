import s from './BurgerCloseButton.module.css';
import sprite from '../../../images/sprite/sprite.svg';

function BurgerCloseButton({ isActive, onClick }) {
  return (
    <>
      {isActive ? (
        <button type="button" onClick={onClick} className={s.btn}>
          <svg className={s.iconMenu}>
            <use href={sprite + '#icon-close'} />
          </svg>
        </button>
      ) : (
        <button type="button" onClick={onClick} className={s.btn}>
          <svg className={s.iconMenu}>
            <use href={sprite + '#icon-burger'} />
          </svg>
        </button>
      )}
    </>
  );
}
export default BurgerCloseButton;
