import Button from '../SharedComponents/Button';
import s from './DailyCalorieIntake.module.css';
import { useSelector } from 'react-redux';

const DailyCalorieIntake = () => {
  return (
    <div className={s.calorieIntakeWrapper}>
      <p className={s.calories}>1800 ккал</p>
      <p className={s.title}>Продукты, которые вам не рекомендуется употреблять</p>
      <ol className={s.forbiddenProducts}>
        <li className={s.forbiddenProductsItem}>Мучные продукты </li>
        <li className={s.forbiddenProductsItem}>Молоко</li>
        <li className={s.forbiddenProductsItem}>Красное мясо </li>
        <li className={s.forbiddenProductsItem}>Копчености</li>
      </ol>
      <div className={s.btnWrp}>
        <Button text="Начать худеть" type="submit" />
      </div>
    </div>
  );
};

export default DailyCalorieIntake;
