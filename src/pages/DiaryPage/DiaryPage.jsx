import DiaryDateCalendar from '../../components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';

import s from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <div className={`${s.background} container`}>
      <div className={s.wrapper}>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </div>
    </div>
  );
};

export default DiaryPage;
