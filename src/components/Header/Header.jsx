import s from '../Header/Header.module.css';
import { Logo, LogoText } from './Logo/Logo';
import UserInfo from '../NavAll/UserInfo/UserInfo';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import MainPage from '../../pages/MainPage/MainPage';

// const HeaderNav = ({ isLoginUser }) => {
//   return <>{isLoginUser ? <LoginForm /> : <MainPage />}</>;
// };

function Header() {
  return (
    <div className={s.navWrap}>
      <Logo />
      <LogoText />
      <UserInfo />
      {/* <HeaderNav /> */}
    </div>
  );
}
export default Header;
