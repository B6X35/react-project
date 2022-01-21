import Section from '../../components/SharedComponents/Section';
import RegistrationForm from '../../components/RegistrationForm';

import s from '../../sharedStyles/RegistrationLoginPages.module.css';

const RegistrationPage = () => {
  return (
    <Section>
      <h1 className={s.title}>Регистрация</h1>
      <RegistrationForm />
    </Section>
  );
};
export default RegistrationPage;
