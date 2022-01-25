import s from '../Header/Header.module.css';
import { Logo, LogoText } from './Logo/Logo';
import { useSelector } from 'react-redux';
import UserInfo from '../NavAll/UserInfo/UserInfo';
import NavAll from '../NavAll';
// import LoginForm from '../LoginForm/LoginForm';
// import RegistrationForm from '../RegistrationForm/RegistrationForm';
// import MainPage from '../../pages/MainPage/MainPage';

// const HeaderNav = ({ isLoginUser }) => {
//   return <>{isLoginUser ? <LoginForm /> : <MainPage />}</>;
// };


function Header() {
  const isLogin = useSelector((state) => state.auth.isLoginUser)
  return (
    <div className={s.navWrap}>
      <Logo />
      <LogoText />
      <NavAll />
      {isLogin && <UserInfo />}
    </div>
  );
}
export default Header;
