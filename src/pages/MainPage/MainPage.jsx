import DairyCaloriesForm from '../../components/DailyCaloriesForm';
import Container from '../../components/SharedComponents/Container';
import Section from '../../components/SharedComponents/Section';

import s from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={s.background}>
      <Container>
        <div className={s.wrapper}>
          <Section title="Просчитай свою суточную норму калорий прямо сейчас">
            <DairyCaloriesForm />
          </Section>
        </div>
      </Container>
    </div>
  );
};
export default MainPage;
