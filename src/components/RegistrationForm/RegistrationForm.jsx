import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { ErrorRegistrationSchema } from '../../utils/errorMessageSchema';
import { registerUser } from '../../redux/auth/authOperation';

import Button from '../SharedComponents/Button';
import FormikInput from '../SharedComponents/FormikInput';

import s from './RegistrationForm.module.css';

const initialValues = { username: '', email: '', password: '' };

const RegistrationForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ErrorRegistrationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(registerUser(values));
        resetForm(initialValues);
      }}
    >
      {() => (
        <Form>
          <FormikInput name="username" type="text" placeholder="Имя *" />
          <FormikInput name="email" type="text" placeholder="Почта *" />
          <FormikInput
            name="password"
            type="password"
            placeholder="Пароль *"
            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          />
          <div className={s['button-container']}>
            <Link to="/login" className={s.link}>
              Вход
            </Link>

            <Button text="Регистрация" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
