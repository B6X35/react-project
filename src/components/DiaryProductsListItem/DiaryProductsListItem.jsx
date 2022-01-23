import Input from '../SharedComponents/Input';
import RoundButton from '../SharedComponents/RoundButton';

import s from './DiaryProductsListItem.module.css';

const DiaryProductsListItem = ({ arr = [], onClick }) => {
  return (
    <div className={s.wrapperAll}>
      <div className={s.wrapper}>
        <div className={s.item}>
          <div className={s.productName}>
            <Input id="data1" type="search" list="data" name="productName" />

            <datalist id="data">
              {arr.map(item => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.productWeight}>
            <Input id="data2" type="text" name="weight" />
          </div>
        </div>
      </div>
      <RoundButton onClick={onClick} />
    </div>
  );
};

export default DiaryProductsListItem;
