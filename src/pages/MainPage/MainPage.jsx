import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import DairyCaloriesForm from '../../components/DailyCaloriesForm';
import Container from '../../components/SharedComponents/Container';
import Section from '../../components/SharedComponents/Section';
import Modal from '../../components/Modal';
import { getDailyRateCalories } from '../../redux/dailyRate/dailyRateSelectors';

import s from './MainPage.module.css';

const MainPage = () => {
  const isDailyRate = Boolean(useSelector(getDailyRateCalories));
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onModalOpen = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (isDailyRate) {
      onModalOpen();
    }
  }, [isDailyRate]);
  return (
    <div className={s.background}>
      <Container>
        <div className={s.wrapper}>
          <Section title="Просчитай свою суточную норму калорий прямо сейчас">
            <DairyCaloriesForm onModalOpen={onModalOpen} />
          </Section>
        </div>
      </Container>
      {isOpen && <Modal isOpen={isOpen} onClose={onClose} />}
    </div>
  );
};
export default MainPage;
