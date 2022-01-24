import React from "react";
import { TailSpin } from "react-loader-spinner";
import s from "./LoaderTailSpin.module.css";

const LoaderTailSpin = () => {
  return (
    <div className={s.loader}>
      <TailSpin type="TailSpin" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderTailSpin;
