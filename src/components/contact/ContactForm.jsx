import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../styles/form.css';
import arrow from '../../assets/arrow.svg';

const ContactForm = props => {
  return (
    <section className="container mb-[13.25rem] md:mb-[17.5rem] lg:mb-[15rem] lg:grid lg:grid-cols-[auto,730px]">
      <h2
        className="text-black-custom heading max-w-[8ch] mb-[2.625rem] 
      md:max-w-none md:mb-[3.75rem]"
      >
        Connect with us
      </h2>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .matches(/^[a-z ,.'-]+$/i, 'Letters only')
            .max(24, 'Must be 24 characters or less')
            .required('Name required.'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email required.'),
          message: Yup.string()
            .max(200, 'Must be 200 characters or less.')
            .required('Message required.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <div className="form__wrapper">
            <label htmlFor="fullName" className="ninja">
              Please enter your name.
            </label>
            <Field
              name="fullName"
              type="text"
              placeholder="Name"
              className="form__input"
            />
            <ErrorMessage name="fullName">
              {msg => <div className="form__error">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="form__wrapper">
            <label htmlFor="email" className="ninja">
              Please enter your email address.
            </label>
            <Field
              name="email"
              type="email"
              className="form__input"
              placeholder="Email Address"
            />
            <ErrorMessage name="email">
              {msg => <div className="form__error">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="form__wrapper--message">
            <label htmlFor="message" className="ninja">
              Provide a message to us(Optional).
            </label>
            <Field
              name="message"
              as="textarea"
              className="form__input--message"
              placeholder="Your Message"
            />
            <ErrorMessage name="message">
              {msg => <div className="form__error">{msg}</div>}
            </ErrorMessage>
          </div>
          <button
            type="submit"
            aria-label="Submit form."
            className="form__submit"
          >
            <img src={arrow} alt="" />
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
