import { Link } from 'react-router-dom';

import { Formik, Form } from 'formik';

import { ErrorMessagesSchema } from '../../utils/errorMessageSchema';

import Button from '../Shared components/Button';
import FormikInput from '../SharedComponents/FormikInput';

const initialValues = { username: '', email: '', password: '' };

const RegistrationForm = () => (
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
        <FormikInput name="username" type="text" placeholder="Имя *" />
        <FormikInput name="email" type="text" placeholder="Почта *" />
        <FormikInput
          name="password"
          type="text"
          placeholder="Пароль *"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
        />

        <p>Ссылка на страничку логина</p>
        <Link to="/login" className="link" activeClassName="active">
          Вход
        </Link>

        <Button text="Регистрация" type="submit" />
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
