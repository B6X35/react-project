import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import debounce from 'debounce';

import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import RightSideBar from '../../components/RightSideBar';
import Container from '../../components/SharedComponents/Container';
import RoundButton from '../../components/SharedComponents/RoundButton';

import { getProduct } from '../../redux/product/productOperation';
import { getProductsSelector } from '../../redux/product/productSelectors';
import { getDayInfoSelector, getProductsDaySummary } from '../../redux/day/daySelectors';
import { getDayInfoOperation } from '../../redux/day/dayOperations';

import s from './DiaryPage.module.css';

const today = new Date();
const currentDate =
  today.getFullYear() +
  '-' +
  (today.getMonth() + 1).toString().padStart(2, '0') +
  '-' +
  today.getDate().toString().padStart(2, '0');

//props DiaryAddProductForm={ arr = [], onClick }
//props DiaryDateCalendar={ onClick }
//props RightSideBar=  {dateOn, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate, notAllowedProducts,
const initialValue = '';

const DiaryPage = () => {
  const dayInfo = useSelector(getDayInfoSelector);
  const daySummary = useSelector(getProductsDaySummary);
  console.log(daySummary);
  const products = useSelector(getProductsSelector);
  const [selectedDate, setDate] = useState(currentDate);
  const [filter, setFilter] = useState(initialValue);

  const dispatch = useDispatch();

  const handleClick = selectedDate => {
    selectedDate =
      selectedDate.getFullYear() +
      '-' +
      (selectedDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      selectedDate.getDate().toString().padStart(2, '0');
    setDate(selectedDate);
    setFilter(initialValue);
  };

  // const addProduct = product => {
  //   setProductsSet(prev => [...prev, product]);
  // };

  const handleChange = filter => {
    setFilter(filter);
    // debounce(dispatch(getProduct(filter)), 2000);
    dispatch(getProduct(filter));
  };

  useEffect(() => {
    dispatch(getDayInfoOperation(selectedDate));
  }, [dispatch, selectedDate]);

  function transformDate(date) {
    const newDate = date.slice(-2) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4);
    return newDate;
  }

  function transformNumber(number) {
    if (typeof number === 'number') {
      return Math.round(number.toFixed(2) * 100) / 100;
    }
    return 0;
  }

  return (
    <div className={s.background}>
      <Container>
        <div className={s.bigWrapper}>
          <div className={s.wrapper}>
            <div className={s.calendarWrap}>
              <DiaryDateCalendar onClick={handleClick} />
            </div>
            <div className={s.addProductFormWrapper}>
              <DiaryAddProductForm
                onChange={handleChange}
                filter={filter}
                arr={products}
                selectedDate={selectedDate}
              />
            </div>
            <div className={s.diaryProductsListWrapper}>
              <DiaryProductsList />
            </div>
            <div className={s.roundButtonwrapper}>
              <RoundButton />
            </div>
          </div>
          <RightSideBar
            dateOn={transformDate(selectedDate)}
            dailyRate={transformNumber(daySummary?.dailyRate)}
            kcalConsumed={transformNumber(daySummary?.kcalConsumed)}
            kcalLeft={transformNumber(daySummary?.kcalLeft)}
            percentsOfDailyRate={transformNumber(daySummary?.percentsOfDailyRate)}
          />
        </div>
      </Container>
    </div>
  );
};

export default DiaryPage;
