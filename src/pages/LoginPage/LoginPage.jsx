// import Section from '../../components/SharedComponents/Section';
import LoginForm from '../../components/LoginForm';
import s from './LoginPage.module.css';
const LoginPage = () => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>Вход</h1>
      <LoginForm />
    </section>
  );
};
export default LoginPage;
