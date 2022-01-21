import DairyCaloriesForm from '../../components/DailyCaloriesForm';
import Section from '../../components/Section';

const MainPage = () => {
  return (
    <Section title="Просчитай свою суточную норму калорий прямо сейчас">
      <DairyCaloriesForm />
    </Section>
  );
};
export default MainPage;
