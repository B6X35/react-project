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
  today.getDate();

//props DiaryAddProductForm={ arr = [], onClick }
//props DiaryDateCalendar={ onClick }
//props RightSideBar=  {dateOn, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate, notAllowedProducts,

const DiaryPage = () => {
  const dayInfo = useSelector(getDayInfoSelector);
  const daySummary = useSelector(getProductsDaySummary);
  const products = useSelector(getProductsSelector);
  const [selectedDate, setDate] = useState(currentDate);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const handleClick = selectedDate => {
    selectedDate =
      selectedDate.getFullYear() +
      '-' +
      (selectedDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      selectedDate.getDate();
    setDate(selectedDate);
    setFilter('');
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
              <div className={s.roundButtonwrapper}>
                <RoundButton />
              </div>
            </div>
          </div>
          <RightSideBar
            dateOn={transformDate(selectedDate)}
            dailyRate={Math.round(daySummary?.dailyRate.toFixed(2) * 100) / 100}
            kcalConsumed={Math.round(daySummary?.kcalConsumed.toFixed(2) * 100) / 100}
            kcalLeft={Math.round(daySummary?.kcalLeft.toFixed(2) * 100) / 100}
            percentsOfDailyRate={Math.round(daySummary?.percentsOfDailyRate.toFixed(2) * 100) / 100}
          />
        </div>
      </Container>
    </div>
  );
};

export default DiaryPage;
