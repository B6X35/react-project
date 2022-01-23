import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import s from './DailyCaloriesForm.module.css';
import Button from '../SharedComponents/Button';

const DailyCaloriesForm = () => {
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodTypes: '1',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values.bloodTypes);
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <label className={s.elements} htmlFor="height">
        Рост *
      </label>

      <input
        id="height"
        name="height"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.height}
      />

      <label className={s.elements} htmlFor="age">
        Возраст *
      </label>

      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label className={s.elements} htmlFor="currentWeight">
        Текущий вес *
      </label>

      <input
        id="currentWeight"
        name="currentWeight"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.currentWeight}
      />
      <label className={s.elements} htmlFor="desiredWeight">
        Желаемый вес *
      </label>

      <input
        id="desiredWeight"
        name="desiredWeight"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.desiredWeight}
      />
      <div className={s.elements} id="my-radio-group">
        Группа крови *
      </div>
      <div className={s.radioBtns} role="group" aria-labelledby="my-radio-group">
        <div className={s.radio}>
          <input
            className={s.radioInput}
            name="bloodTypes"
            onChange={formik.handleChange}
            type="radio"
            value="1"
            checked={'1' === formik.values.bloodTypes}
          />
          <label className={s.radioLabel}> 1</label>
        </div>
        <div className={s.radio}>
          <input
            className={s.radioInput}
            name="bloodTypes"
            onChange={formik.handleChange}
            type="radio"
            value="2"
            checked={'2' === formik.values.bloodTypes}
          />
          <label className={s.radioLabel}>2</label>
        </div>
        <div className={s.radio}>
          <input
            className={s.radioInput}
            name="bloodTypes"
            onChange={formik.handleChange}
            type="radio"
            value="3"
            checked={'3' === formik.values.bloodTypes}
          />
          <label className={s.radioLabel}>3</label>
        </div>
        <div className={s.radio}>
          <input
            className={s.radioInput}
            name="bloodTypes"
            onChange={formik.handleChange}
            type="radio"
            value="4"
            checked={'4' === formik.values.bloodTypes}
          />
          <label className={s.radioLabel}>4</label>
        </div>
      </div>
      <Button text="Похудеть" type="submit" />
    </form>
  );
};

export default DailyCaloriesForm;
