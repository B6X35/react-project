// import Section from '../../components/SharedComponents/Section';
import LoginForm from '../../components/LoginForm';
import Container from '../../components/SharedComponents/Container';
import s from './LoginPage.module.css';
const LoginPage = () => {
  return (
    <div className={s.background}>
      <Container>
        <div className={s.wrapper}>
          <section className={s.section}>
            <h1 className={s.title}>Вход</h1>
            <LoginForm />
          </section>
        </div>
      </Container>
    </div>
  );
};
export default LoginPage;
