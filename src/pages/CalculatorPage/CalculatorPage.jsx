import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/SharedComponents/Container';
import Selection from '../../components/SharedComponents/Section';

import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
  return (
    <div className={s.background}>
      <Container>
        <CalculatorCalorieForm />
      </Container>
    </div>
  );
};
export default CalculatorPage;
