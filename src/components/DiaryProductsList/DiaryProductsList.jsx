import { useSelector, useDispatch } from 'react-redux';

import XCloseButton from '../SharedComponents/XButton';

import { getEatenProducts, getDateId } from '../../redux/day/daySelectors';
import { deleteProductOperation } from '../../redux/day/dayOperations';

import s from './DiaryProductsList.module.css';

const DiaryProductsList = () => {
  const eatenProducts = useSelector(getEatenProducts);
  const dateId = useSelector(getDateId);
  console.log(dateId);
  console.log(eatenProducts);
  const dispatch = useDispatch();

  console.log(dateId);

  const items = eatenProducts?.map(item => {
    const { id, weight, title, kcal } = item;
    console.log(id)
    return (
      <li key={id} className={s.listItem}>
        <p className={s.productName}>{title}</p>
        <p className={s.productWeight}>{weight} г</p>
        <p className={s.productClories}>
          {Math.round(kcal.toFixed(2) * 100) / 100}
          <span className={s.dimension}> ккал</span>
        </p>
        <XCloseButton
          onClick={() => dispatch(deleteProductOperation({ dayId: dateId, eatenProductId: id }))}
        />
      </li>
    );
  });

  return !!eatenProducts?.length && <ul className={s.list}>{items}</ul>;
};

export default DiaryProductsList;