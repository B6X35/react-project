import React from 'react';
import { useFormik } from 'formik';

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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="height">Рост *</label>

      <input
        id="height"
        name="height"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.height}
      />

      <label htmlFor="age">Возраст *</label>

      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="currentWeight">Текущий вес *</label>

      <input
        id="currentWeight"
        name="currentWeight"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.currentWeight}
      />
      <label htmlFor="desiredWeight">Желаемый вес *</label>

      <input
        id="desiredWeight"
        name="desiredWeight"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.desiredWeight}
      />
      <div id="my-radio-group">Группа крови *</div>
      <div role="group" aria-labelledby="my-radio-group">
        <div className="radio">
          <label>
            <input
              name="bloodTypes"
              onChange={formik.handleChange}
              type="radio"
              value="1"
              checked={'1' === formik.values.bloodTypes}
            />
            1
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="bloodTypes"
              onChange={formik.handleChange}
              type="radio"
              value="2"
              checked={'2' === formik.values.bloodTypes}
            />
            2
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="bloodTypes"
              onChange={formik.handleChange}
              type="radio"
              value="3"
              checked={'3' === formik.values.bloodTypes}
            />
            3
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name="bloodTypes"
              onChange={formik.handleChange}
              type="radio"
              value="4"
              checked={'4' === formik.values.bloodTypes}
            />
            4
          </label>
        </div>
      </div>
      <Button text="Похудеть" type="submit" />
    </form>
  );
};

export default DailyCaloriesForm;
