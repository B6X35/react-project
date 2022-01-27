// import Section from '../../components/SharedComponents/Section';
import RegistrationForm from '../../components/RegistrationForm';
import Container from '../../components/SharedComponents/Container';
import s from './RegistrationPage.module.css';
const RegistrationPage = () => {
  return (
    <div className={s.background}>
      <Container>
        <section className={s.wrapper}>
          <h1 className={s.title}>Регистрация</h1>
          <RegistrationForm />
        </section>
      </Container>
    </div>
  );
};
export default RegistrationPage;
