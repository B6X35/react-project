import Input from '../SharedComponents/Input';
import s from './DiaryProductsListItem.module.css';
import image from '../../images/sprite/plus.svg';

const DiaryProductsListItem = ({ arr = [] }) => {
  return (
    <div className={s.wrapperAll}>
      <div className={s.wrapper}>
        <div className={s.item}>
          <Input id="data1" type="search" list="data" name="productName" />

          <datalist id="data">
            {arr.map(item => (
              <option key={item} value={item} />
            ))}
          </datalist>
        </div>
        <div className={s.item}>
          <Input id="data2" type="text" name="weight" />
        </div>
      </div>
      <button className={s.btn} type="button">
        <svg>
          <use href={image} className={s.vectorUse} />
        </svg>
      </button>
    </div>
  );
};

export default DiaryProductsListItem;
