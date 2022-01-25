import Button from '../SharedComponents/Button';
import s from './DailyCalorieIntake.module.css';
import { useSelector } from 'react-redux';
import { getDailyRate, getForbiddenProducts } from '../../redux/dailyRate/dailyRateSelectors';

const DailyCalorieIntake = () => {
  const calories = Math.floor(useSelector(getDailyRate));
  const forbiddenProducts = useSelector(getForbiddenProducts);

  const forbiddenListToShow = forbiddenProducts.map((item, idx) => (
    <li className={s.forbiddenProductsItem} key={item}>
      {idx + 1 + '. '}
      {item}
    </li>
  ));

  return (
    <div className={s.calorieIntakeWrapper}>
      <p className={s.title}>Ваша рекомендуемая суточная норма калорий составляет</p>
      <p className={s.calories}>{calories} ккал</p>
      <p className={s.subTitle}>Продукты, которые вам не рекомендуется употреблять</p>
      <ul className={s.forbiddenProducts}>{forbiddenListToShow}</ul>
      <div className={s.btnWrp}>
        <Button text="Начать худеть" type="submit" />
      </div>
    </div>
  );
};

export default DailyCalorieIntake;
