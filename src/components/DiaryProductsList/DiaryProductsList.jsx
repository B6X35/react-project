import { useSelector, useDispatch } from 'react-redux';

import XCloseButton from '../SharedComponents/XButton';

import { getEatenProducts, getDateId, getDate } from '../../redux/day/daySelectors';
import { deleteProductOperation, getDayInfoOperation } from '../../redux/day/dayOperations';

import s from './DiaryProductsList.module.css';

const DiaryProductsList = () => {
  const eatenProducts = useSelector(getEatenProducts);
  const dateId = useSelector(getDateId);
  const dateRequested = useSelector(getDate);

  const dispatch = useDispatch();
  console.log('dateId-', dateId);
  console.log('eatenProducts-', eatenProducts);
  console.log('dateRequested-', dateRequested);

  const handleClick = (dayId, eatenProductId) => {
    dispatch(deleteProductOperation({ dayId, eatenProductId }));
    // dispatch(getDayInfoOperation(dateRequested));
  };

  const items = eatenProducts?.map(item => {
    const { id, weight, title, kcal } = item;
    console.log(id);
    return (
      <li key={id} className={s.listItem}>
        <div className={s.itemWrapper}>
          <p className={s.productName}>{title}</p>
          <p className={s.productWeight}>{weight} г</p>
          <p className={s.productClories}>
            {Math.round(kcal.toFixed(2) * 100) / 100}
            <span className={s.dimension}> ккал</span>
          </p>
        </div>

        <XCloseButton
          // onClick={() => dispatch(deleteProductOperation({ dayId: dateId, eatenProductId: id }))}
          onClick={() => handleClick(dateId, id)}
        />
      </li>
    );
  });

  return !!eatenProducts?.length && <ul className={s.list}>{items}</ul>;
};

export default DiaryProductsList;
