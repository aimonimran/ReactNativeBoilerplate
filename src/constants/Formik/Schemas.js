import * as Yup from 'yup';
import {messages, regex} from './Helper';

export const loginValidationSchema = Yup.object({
  email: Yup.string().email().required(messages.required('Username')),
  password: Yup.string()
    .min(6)
    .required(messages.required('Password'))
    .matches(regex.passwordRegex, messages.password('Password')),
});
