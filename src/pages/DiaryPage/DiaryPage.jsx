import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProduct from '../../components/DiaryAddProduct';
import DiaryProductsList from '../../components/DiaryProductsList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <section>
      <DiaryDateCalendar />
      <DiaryAddProduct />
      <DiaryProductsList />
    </section>
  );
};

export default DiaryPage;
