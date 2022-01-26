import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/SharedComponents/Container';

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
