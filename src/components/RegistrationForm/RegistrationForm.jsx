import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { ErrorMessagesSchema } from '../../utils/errorMessageSchema';
import { registerUser } from '../../redux/auth/authOperation';

import Button from '../SharedComponents/Button';
import FormikInput from '../SharedComponents/FormikInput';

const initialValues = { username: '', email: '', password: '' };

const RegistrationForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ErrorMessagesSchema}
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
            type="text"
            placeholder="Пароль *"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          />

          <Link to="/login" className="link">
            Вход
          </Link>

          <Button text="Регистрация" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
