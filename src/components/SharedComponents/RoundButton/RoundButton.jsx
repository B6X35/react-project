import s from './RoundButton.module.css';
import sprite from '../../../images/sprite/sprite.svg';

const RoundButton = ({ type, onClick }) => {
  return (
    <button className={s.btn} type={type}>
      <svg className={s.vectorSvg}>
        <use href={sprite + '#icon-plus'} />
      </svg>
    </button>
  );
};

export default RoundButton;
