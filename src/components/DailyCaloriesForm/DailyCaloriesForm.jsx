import React from 'react';
// import { useHistory, useLocation } from 'react-router';
import { useFormik } from 'formik';
import s from './DailyCaloriesForm.module.css';
import Button from '../SharedComponents/Button';
import { DiaryFormSchema } from '../../utils/errorMessageSchema';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyRate } from '../../redux/dailyRate/dailyRateActions';

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      weight: '',
      desiredWeight: '',
      bloodType: '1',
    },
    onSubmit: values => {
      values.weight = Number(values.weight);
      values.age = Number(values.age);
      values.height = Number(values.height);
      values.desiredWeight = Number(values.desiredWeight);
      values.bloodType = Number(values.bloodType);
      const formData = JSON.stringify(values);

      dispatch(getDailyRate(formData));
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
          <label className={s.label} htmlFor="weight">
            Текущий вес *
          </label>

          <input
            className={
              formik.touched.weight && formik.errors.weight ? s.input + ' ' + s.error : s.input
            }
            id="weight"
            name="weight"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.weight}
          />
          {formik.touched.weight && formik.errors.weight ? (
            <div className={s.errorMessage}>{formik.errors.weight}</div>
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
                name="bloodType"
                onChange={formik.handleChange}
                type="radio"
                value="1"
                checked={'1' === formik.values.bloodType}
              />
              <label className={s.radioLabel}> 1</label>
            </div>
            <div className={s.radio}>
              <input
                className={s.radioInput}
                name="bloodType"
                onChange={formik.handleChange}
                type="radio"
                value="2"
                checked={'2' === formik.values.bloodType}
              />
              <label className={s.radioLabel}>2</label>
            </div>
            <div className={s.radio}>
              <input
                className={s.radioInput}
                name="bloodType"
                onChange={formik.handleChange}
                type="radio"
                value="3"
                checked={'3' === formik.values.bloodType}
              />
              <label className={s.radioLabel}>3</label>
            </div>
            <div className={s.radio}>
              <input
                className={s.radioInput}
                name="bloodType"
                onChange={formik.handleChange}
                type="radio"
                value="4"
                checked={'4' === formik.values.bloodType}
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
