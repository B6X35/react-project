import React from "react"
import s from "./Logo.module.css"

export const Logo = () => {
    return (
        <img src="../../../images/logo/desctop/logo.png" className={s.logo}></img>
    )
  }

export const LogoText = (props) => (
    <p className={s.logoText}>
      <span className={s.logoTextSlim}>Slim</span>
      <span className={s.logoTextMom}>Mom</span>
    </p>
  )