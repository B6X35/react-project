import * as Yup from 'yup';

const errorMessage = {
  name: '* Поле должно содержать от 3 до 30 символов.',
  email: '* Введен некорректный почтовый адресс.',
  password: '* Пароль должен состоять минимум из одной буквы, одной цифры и длиной в 6 символов.',
  required: '* Поле обязательно к заполнению.',
};

const DiaryFormSchema = Yup.object().shape({
  height: Yup.number().min(100, 'Too Short!').max(250, 'Too Long!').required(errorMessage.required),
  age: Yup.number().min(18, 'Too Short!').max(100, 'Too Long!').required(errorMessage.required),
  weight: Yup.number().min(20, 'Too Short!').max(500, 'Too Long!').required(errorMessage.required),
  desiredWeight: Yup.number()
    .min(20, 'Too Short!')
    .max(500, 'Too Long!')
    .required(errorMessage.required),
});

const ErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, errorMessage.name)
    .max(30, errorMessage.name)
    .required(errorMessage.required),
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string().trim().min(6, errorMessage.password).required(errorMessage.required),
});

export { DiaryFormSchema, ErrorMessagesSchema };
