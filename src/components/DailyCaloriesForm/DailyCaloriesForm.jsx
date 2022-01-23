import React from 'react';
import { useFormik } from 'formik';
import s from './DailyCaloriesForm.module.css';
import Button from '../SharedComponents/Button';
import { DiaryFormSchema } from '../../utils/errorMessageSchema';

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
    validationSchema: DiaryFormSchema,
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.formWrapper}>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="height">
            Рост *
          </label>

          <input
            className={
              formik.touched.height && formik.errors.height ? s.input + ' ' + s.error : s.input
            }
            id="height"
            name="height"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.height}
          />
          {formik.touched.height && formik.errors.height ? (
            <div className={s.errorMessage}>{formik.errors.height}</div>
          ) : null}
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="age">
            Возраст *
          </label>

          <input
            className={formik.touched.age && formik.errors.age ? s.input + ' ' + s.error : s.input}
            id="age"
            name="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className={s.errorMessage}>{formik.errors.age}</div>
          ) : null}
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="currentWeight">
            Текущий вес *
          </label>

          <input
            className={
              formik.touched.currentWeight && formik.errors.currentWeight
                ? s.input + ' ' + s.error
                : s.input
            }
            id="currentWeight"
            name="currentWeight"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currentWeight}
          />
          {formik.touched.currentWeight && formik.errors.currentWeight ? (
            <div className={s.errorMessage}>{formik.errors.currentWeight}</div>
          ) : null}
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor="desiredWeight">
            Желаемый вес *
          </label>

          <input
            className={
              formik.touched.desiredWeight && formik.errors.desiredWeight
                ? s.input + ' ' + s.error
                : s.input
            }
            id="desiredWeight"
            name="desiredWeight"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.desiredWeight}
          />
          {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
            <div className={s.errorMessage}>{formik.errors.desiredWeight}</div>
          ) : null}
        </div>
        <div className={s.inputWrapper} id="my-radio-group">
          Группа крови *
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
        </div>
      </div>
      <div className={s.btnWrp}>
        <Button text="Похудеть" type="submit" />
      </div>
    </form>
  );
};

export default DailyCaloriesForm;
