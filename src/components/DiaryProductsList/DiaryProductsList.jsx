import { useSelector } from 'react-redux';

import XCloseButton from '../SharedComponents/XButton';

import { getEatenProducts } from '../../redux/day/daySelectors';

import s from './DiaryProductsList.module.css';

const DiaryProductsList = () => {
  const eatenProducts = useSelector(getEatenProducts);

  console.log(eatenProducts);

  const items = eatenProducts?.map(item => {
    const { id, weight, title, kcal } = item;
    return (
      <li key={id} className={s.listItem}>
        <p className={s.productName}>{title}</p>
        <p className={s.productWeight}>{weight} г</p>
        <p className={s.productClories}>
          {Math.round(kcal.toFixed(2) * 100) / 100}
          <span className={s.dimension}> ккал</span>
        </p>
        <XCloseButton />
      </li>
    );
  });

  return !!eatenProducts?.length && <ul className={s.list}>{items}</ul>;
};

export default DiaryProductsList;
