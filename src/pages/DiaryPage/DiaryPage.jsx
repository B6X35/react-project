import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProduct from '../../components/DiaryAddProduct';
import DiaryProductList from '../../components/DiaryProductsList';

// import s from './DiaryPage.module.css';

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
