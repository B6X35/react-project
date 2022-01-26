import Input from '../SharedComponents/Input';
import RoundButton from '../SharedComponents/RoundButton';

import s from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ arr = [], onClick, onChange, filter }) => {
  console.log(onChange);
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={s.wrapperAll}>
      <div className={s.wrapper}>
        <div className={s.item}>
          <div className={s.productName}>
            <Input
              id="data1"
              type="search"
              list="data"
              name="productName"
              placeholder="Введите название продукта"
              value={filter}
              // onChange={() => onChange(filter)}
              onChange={handleChange}
            />

            <datalist id="data">
              {arr.map(item => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.productWeight}>
            <Input id="data2" type="text" name="weight" placeholder="Граммы" />
          </div>
        </div>
      </div>
      <div className={s.btn}>
        <RoundButton onClick={onClick} />
      </div>
    </div>
  );
};

export default DiaryAddProductForm;
