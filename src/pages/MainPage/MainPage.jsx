import DairyCaloriesForm from '../../components/DailyCaloriesForm';
import Section from '../../components/SharedComponents/Section';

import s from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={`${s.background} container`}>
      <div className={s.wrapper}>
        <Section title="Просчитай свою суточную норму калорий прямо сейчас">
          <DairyCaloriesForm />
        </Section>
      </div>
    </div>
  );
};
export default MainPage;
