import DiaryDateCalendare from '../../components/DiaryDateCalendar';
import DiaryAddProduct from '../../components/DiaryAddProduct';
import DiaryProductList from '../../components/DiaryProductList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <section>
      <DiaryDateCalendar />
      <DiaryAddProduct />
      <DiaryProductList />
    </section>
  );
};

export default DiaryPage;
