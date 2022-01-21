import { useField } from 'formik';

import s from './FormikInput.module.css';

const FormikInput = ({ label, pattern = null, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={s['formik-container']}>
      {label && (
        <label htmlFor={props.id || props.name} className={s['formik-label']}>
          {label}
        </label>
      )}

      <input className={s['formik-input']} {...field} {...props} pattern={pattern} />
      {meta.touched && meta.error ? <div className={s['input-error']}>{meta.error}</div> : null}
    </div>
  );
};
export default FormikInput;

// Вызывать компонент в формате: <FormikInput label="Name" name="Name" type="text" placeholder="placeholderText" />
