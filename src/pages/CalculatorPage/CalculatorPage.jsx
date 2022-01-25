import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Container from '../../components/Container';

import s from './CalculatorPage.module.css';

const CalculatorPage = () => {
  return (
    <div className={`${s.background} container`}>
      <Container title="Узнай свою суточную норму калорий" />
      <CalculatorCalorieForm />
      <Container />
    </div>
  );
};
export default CalculatorPage;
