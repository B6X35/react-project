import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductList from '../../components/DiaryProductsList';
import Header from '../../components/Header';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <>
      <div className={`${s.background} containerNeo`}>
        <div className={s.wrapper}>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
          <DiaryProductList />
        </div>
      </div>
    </>
  );
};

export default DiaryPage;
