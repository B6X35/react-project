import React from 'react';
import s from './Logo.module.css';
import imageMob from '../../../images/logo/mobile/logo@2x.png';
import imageDesc from '../../../images/logo/desktop/logo@2x.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <>
      <Link to="/main">
        <img src={imageMob} className={s.logoMobile} height={44} width={47}></img>
      </Link>
      <Link to="/main">
        <img src={imageDesc} className={s.logoDesctop} height={70} width={66}></img>
      </Link>
    </>
  );
};

export const LogoText = () => (
  <Link to="/main">
    <p className={s.logoText}>
      <span className={s.logoTextSlim}>Slim</span>
      <span className={s.logoTextMom}>Mom</span>
    </p>
  </Link>
);
