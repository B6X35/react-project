// import Section from '../../components/SharedComponents/Section';
import RegistrationForm from '../../components/RegistrationForm';
import s from './RegistrationPage.module.css';
const RegistrationPage = () => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Регистрация</h1>
      <RegistrationForm />
    </section>
  );
};
export default RegistrationPage;
