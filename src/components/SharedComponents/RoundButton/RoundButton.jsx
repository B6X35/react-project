import s from './RoundButton.module.css';
import sprite from '../../../images/sprite/sprite.svg';

const RoundButton = ({ onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      <svg className={s.vectorSvg}>
        <use href={sprite + '#icon-plus'} />
      </svg>
    </button>
  );
};

export default RoundButton;
