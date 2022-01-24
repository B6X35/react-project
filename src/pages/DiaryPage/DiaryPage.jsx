import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <section className={s.diaryPage}>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </section>
  );
};

export default DiaryPage;
