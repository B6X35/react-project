import { useDispatch, useSelector } from 'react-redux';
import Input from '../SharedComponents/Input';
import RoundButton from '../SharedComponents/RoundButton';

import { addProductOperation } from '../../redux/day/dayOperations';
import { getProductsSelector } from '../../redux/product/productSelectors';

import s from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ arr = [], onChange, filter, selectedDate }) => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);

  // console.log(products);

  const handleSubmit = event => {
    event.preventDefault();
    const product = {
      data: selectedDate,
      productId: products[0]._id,
      weight: event.target.elements[1].value,
    };

    dispatch(addProductOperation(product));
  };

  return (
    <form className={s.wrapperAll} onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <div className={s.item}>
          <div className={s.productName}>
            <Input
              id="data1"
              type="search"
              listId="data"
              name="productName"
              placeholder="Введите название продукта"
              value={filter}
              onChange={onChange}
              // onChange={handleChange}
            />

            <datalist id="data">
              {arr.map(item => (
                <option id={item?._id} key={item?._id} value={item?.title?.ru} />
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
        <RoundButton type="submit" />
      </div>
    </form>
  );
};

export default DiaryAddProductForm;
