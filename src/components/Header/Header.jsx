import s from '../Header/Header.module.css';
import { Logo, LogoText } from './Logo/Logo';
import { useSelector } from 'react-redux';
import UserInfo from '../NavAll/UserInfo/UserInfo';
import NavAll from '../NavAll/NavAll';

function Header() {
  const isLogin = useSelector(state => state.auth.isLoginUser);
  return (
    <div className={s.navAll}>
      <div className={s.navWrap}>
        <div className={s.navLogo}>
          <Logo />
          <LogoText />
        </div>
        <NavAll />
      </div>
      <div className={s.userInfoWrap}>{isLogin && <UserInfo />}</div>
    </div>
  );
}
export default Header;
