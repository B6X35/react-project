import DairyCaloriesForm from '../../components/DailyCaloriesForm';
import Section from '../../components/SharedComponents/Section';

import s from './MainPage.module.css';

const MainPage = () => {
  return (
    <Section title="Просчитай свою суточную норму калорий прямо сейчас">
      <DairyCaloriesForm />
    </Section>
  );
};
export default MainPage;
