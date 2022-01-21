import s from './BurgerCloseButton.module.css';
import { useState } from 'react';
import sprite from '../../../images/sprite/sprite.svg';

function BurgerCloseButton() {
  const [isActive, setButton] = useState(false);

  const openModal = () => {
    setButton(true);
  };

  const closeModal = () => {
    setButton(false);
  };

  return (
    <>
      {!isActive && (
        <button type="button" onClick={openModal} className={s.btn}>
          <svg className={s.iconClose}>
            <use href={sprite + '#icon-close'} />
          </svg>
        </button>
      )}
      {isActive && (
        <button type="button" onClick={closeModal} className={s.btn}>
          <svg className={s.iconClose}>
            <use href={sprite + '#icon-burger'} />
          </svg>
        </button>
      )}
    </>
  );
}
export default BurgerCloseButton;
