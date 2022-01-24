import DateCalendar from '../../components/DiaryDateCalendar/DiaryDateCalendar';
import DiaryAddProduct from '../../components/DiaryAddProduct/DiaryAddProduct';
import DiaryProductsList from '../../components/DiaryProductsList/DiaryProductsList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <section>
      <DateCalendar />
      <DiaryAddProduct />
      <DiaryProductsList />
    </section>
  );
};

export default DiaryPage;
