import Section from '../../components/SharedComponents/Section';
import LoginForm from '../../components/LoginForm';

import s from '../../sharedStyles/RegistrationLoginPages.module.css';

const LoginPage = () => {
  return (
    <Section>
      <h1 className={s.title}>Вход</h1>
      <LoginForm />
    </Section>
  );
};
export default LoginPage;
