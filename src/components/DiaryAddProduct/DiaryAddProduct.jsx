import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addProduct } from '../../redux/product/productOperation';

const DiaryAddProduct = () => {
  const dispatch = useDispatch();
  const productSelector = useSelector(state => state.products.name);
  const state = useSelector(state);
  console.log(state)
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const isProduct = { product, weight };
    const isNameProduct = productSelector.some(
      name => name.toLowerCase() === product.toLowerCase(),
    );
    if (isNameProduct) {
      return alert(`${product} этот продукт уже есть`);
    }
    dispatch(addProduct(isProduct));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'product':
        setProduct(value);
        return;
      case 'weight':
        setWeight(value);
        return;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="product"
        type="text"
        value={product}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Введите название продукта"
      />
      <input
        name="weight"
        type="number"
        value={weight}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        placeholder="Граммы"
      />
      <button type="submit"></button>
    </form>
  );
};

export default DiaryAddProduct;
