import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { ErrorMessagesSchema } from '../../utils/errorMessageSchema';
import { loginUser } from '../../redux/auth/authOperation';

import Button from '../SharedComponents/Button';
import FormikInput from '../SharedComponents/FormikInput';
import s from './LoginForm.module.css';

const initialValues = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ErrorMessagesSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(loginUser(values));
        resetForm(initialValues);
      }}
    >
      {() => (
        <Form className={s.form}>
          <FormikInput name="email" type="text" placeholder="Почта *" />
          <FormikInput
            name="password"
            type="text"
            placeholder="Пароль *"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          />
          <div className={s['button-container']}>
            <Button text="Вход" type="submit" />

            <Link to="/registration" className={s.link}>
              Регистрация
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
