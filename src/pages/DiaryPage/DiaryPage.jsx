import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import debounce from 'debounce';

import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import Container from '../../components/SharedComponents/Container';

import s from './DiaryPage.module.css';

const today = new Date();
const currentDate =
  today.getFullYear() +
  '-' +
  (today.getMonth() + 1).toString().padStart(2, '0') +
  '-' +
  today.getDate();

//props DiaryAddProductForm={ arr = [], onClick }
//props DiaryDateCalendar={ onClick }

const DiaryPage = () => {
  const [selectedDate, setDate] = useState(currentDate);
  const [productsSet, setProductsSet] = useState([]);
  const [filter, setFilter] = useState('');

  const handleClick = selectedDate => {
    selectedDate =
      selectedDate.getFullYear() +
      '-' +
      (selectedDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      selectedDate.getDate();
    setDate(selectedDate);
    alert(selectedDate);
  };

  // const addProduct = product => {
  //   setProductsSet(prev => [...prev, product]);
  // };

  const handleChange = filter => {
    setFilter(filter);
  };
  return (
    <div className={s.background}>
      <Container>
        <div className={s.bigWrapper}>
          <div className={s.wrapper}>
            <DiaryDateCalendar onClick={handleClick} />
            <DiaryAddProductForm
              arr={productsSet}
              onChange={() => handleChange(filter)}
              filter={filter}
            />
            <DiaryProductsList />
          </div>
          <RightSideBar />
        </div>
      </Container>
    </div>
  );
};

export default DiaryPage;
