import { useSelector } from 'react-redux';

import s from './RightSideBar.module.css';

const today = new Date();
const currentDate =
  today.getDate() +
  '.' +
  (today.getMonth() + 1).toString().padStart(2, '0') +
  '.' +
  today.getFullYear();

const RightSideBar = ({
  dateOn = currentDate,
  kcalLeft = 0,
  kcalConsumed = 0,
  dailyRate = 0,
  percentsOfDailyRate = 0,
  notAllowedProducts = ['Здесь будет отображаться Ваш рацион'],
}) => {
  notAllowedProducts = useSelector(state => state?.dailyRateReducers?.notAllowedProducts) || [
    'Здесь будет отображаться Ваш рацион',
  ];

  return (
    <div className={s.wrapper}>
      <section className={s.section}>
        <h2 className={s.title}>{`Сводка за ${dateOn}`}</h2>
        <ul className={s.list}>
          <li className={s.listItem}>
            <p>Осталось</p>
            <p>{kcalLeft} ккал</p>
          </li>
          <li className={s.listItem}>
            <p>Употреблено</p>
            <p>{kcalConsumed} ккал</p>
          </li>
          <li className={s.listItem}>
            <p>Дневная норма</p>
            <p>{dailyRate} ккал</p>
          </li>
          <li className={s.listItem}>
            <p>n% от нормы</p>
            <p>{percentsOfDailyRate} ккал</p>
          </li>
        </ul>
      </section>
      <section className={s.section}>
        <h2 className={s.title}>{'Нерекомендуемые продукты'}</h2>
        <p className={s.allowedProducts}>{notAllowedProducts.join(', ')}</p>
      </section>
    </div>
  );
};

export default RightSideBar;
