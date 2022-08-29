import * as Yup from 'yup';

export const initialValues = { name: '', email: '', message: '' };

export const validation = Yup.object({
  name: Yup.string()
    .matches(/^[a-z ,.'-]+$/i, 'Letters only')
    .max(24, 'Must be 24 characters or less')
    .required('Name required.'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email required.'),
  message: Yup.string()
    .max(200, 'Must be 200 characters or less.')
    .required('Message required.'),
});
