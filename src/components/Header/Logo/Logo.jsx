import React from "react"
import s from "./Logo.module.css"
import imageMob from "../../../images/logo/mobile/logo@2x.png";
import imageDesc from "../../../images/logo/desktop/logo@2x.png";
// import { NavLink } from 'react-router-dom';


export const Logo = () => {
    return (
      <>
        <img to="/home" src={imageMob} className={s.logoMobile} height={44} width={47}></img>
        <img to="/home" src={imageDesc} className={s.logoDesctop} height={70} width={66}></img>
      </>
    )
  }

export const LogoText = () => (
    <p className={s.logoText}>
      <span className={s.logoTextSlim}>Slim</span>
      <span className={s.logoTextMom}>Mom</span>
    </p>
  )