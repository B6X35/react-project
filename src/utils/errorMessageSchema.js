import * as Yup from 'yup';

const errorMessage = {
  name: '* Поле должно содержать от 3 до 30 символов.',
  email: '* Введен некорректный почтовый адресс.',
  password: '* Пароль должен состоять минимум из одной буквы, одной цифры и длиной в 6 символов.',
  required: '* Поле обязательно к заполнению.',
  minHeight: '* Минимальное значение 100!',
  maxHeight: '* Максимальное значение 250!',
  minAge: '* Минимальное значение 18!',
  maxAge: '* Максимальное значение 250!',
  minWeight: '* Минимальное значение 20!',
  maxWeight: '* Максимальное значение 500!',
};

const DiaryFormSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, errorMessage.minHeight)
    .max(250, errorMessage.maxHeight)
    .required(errorMessage.required),
  age: Yup.number()
    .min(18, errorMessage.minAge)
    .max(100, errorMessage.maxAge)
    .required(errorMessage.required),
  weight: Yup.number()
    .min(20, errorMessage.minWeight)
    .max(500, errorMessage.maxWeight)
    .required(errorMessage.required),
  desiredWeight: Yup.number()
    .min(20, errorMessage.minWeight)
    .max(500, errorMessage.maxWeight)
    .required(errorMessage.required),
});

const ErrorRegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, errorMessage.name)
    .max(30, errorMessage.name)
    .required(errorMessage.required),
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string().trim().min(6, errorMessage.password).required(errorMessage.required),
});

const ErrorLoginSchema = Yup.object().shape({
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string().trim().min(6, errorMessage.password).required(errorMessage.required),
});

export { DiaryFormSchema, ErrorRegistrationSchema, ErrorLoginSchema };
