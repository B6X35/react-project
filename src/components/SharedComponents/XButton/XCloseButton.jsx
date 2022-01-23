import sprite from '../../../images/sprite/sprite.svg';
import s from './XCloseButton.module.css';

const XCloseButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={s.btn}>
      <svg className={s.iconClose}>
        <use href={sprite + '#icon-close'} />
      </svg>
    </button>
  );
};
export default XCloseButton;
