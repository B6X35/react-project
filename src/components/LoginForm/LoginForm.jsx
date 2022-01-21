import { Link } from 'react-router-dom';

import { Formik, Form } from 'formik';

import { ErrorMessagesSchema } from '../../utils/errorMessageSchema';

import Button from '../Shared components/Button';
import FormikInput from '../SharedComponents/FormikInput';
import s from './LoginForm.module.css';

const initialValues = { email: '', password: '' };

const LoginForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={ErrorMessagesSchema}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      resetForm(initialValues);
    }}
  >
    {() => (
      <Form>
        <FormikInput name="email" type="text" placeholder="Почта *" />
        <FormikInput
          name="password"
          type="text"
          placeholder="Пароль *"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
        />

        <Button text="Вход" type="submit" />
        <p>Ссылка на страничку Регистрация</p>
        <Link to="/registration" className="link" activeClassName="active">
          Регистрация
        </Link>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
