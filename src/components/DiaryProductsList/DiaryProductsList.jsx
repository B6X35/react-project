import XCloseButton from '../SharedComponents/XButton';

import s from './DiaryProductsList.module.css';

const DiaryProductsList = ({ arr = [] }) => {
  const items = arr.map(item => {
    const { id, productWeight, productTitle, calories } = item;
    return (
      <li key={id} className={s.listItem}>
        <p className={s.productName}>{productTitle}</p>
        <p className={s.productWeight}>{productWeight} г</p>
        <p className={s.productClories}>{(Number(productWeight) * Number(calories)) / 100} ккал</p>
        <XCloseButton />
      </li>
    );
  });

  return <div>{!!arr.length && <ul className={s.list}>{items}</ul>}</div>;
};

export default DiaryProductsList;
