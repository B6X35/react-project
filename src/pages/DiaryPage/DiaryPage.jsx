import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProduct';
import DiaryProductList from '../../components/DiaryProductsList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <section>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductList />
    </section>
  );
};

export default DiaryPage;
