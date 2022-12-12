import * as Yup from 'yup';
import {messages, regex} from './Helper';

export const loginValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, messages.min('Username'))
    .max(50, messages.max('Username'))
    .required(messages.required('Username')),
  password: Yup.string()
    .min(6)
    .required(messages.required('Password'))
    .matches(regex.passwordRegex, messages.password('Password')),
});

export const signupValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, messages.min('Username'))
    .max(50, messages.max('Username'))
    .required(messages.required('Username')),
  password: Yup.string()
    .matches(regex.passwordRegex, messages.password('Password'))
    .required(messages.required('Password')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], messages.match('Passwords'))
    .required(messages.required('Confirm Password')),
  email: Yup.string().email().required(messages.required('Email')),
  fullName: Yup.string()
    .min(3, messages.min('Full name'))
    .max(30, messages.max('Full name'))
    .required(messages.required('Full name')),
  cell: Yup.string()
    .matches(regex.cellRegex, messages.valid('Phone number'))
    .required(messages.required('Phone number')),
  // gender: Yup.string().required(messages.required('Gender')),
  // avatar: Yup.string().required(messages.required('File')),
});
