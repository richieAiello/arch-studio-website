import { Formik, Form } from 'formik';
import { initialValues, validation } from './formData';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';
import '../../styles/form.css';
import arrow from '../../assets/arrow.svg';

const ContactForm = ({ setState, ...props }) => {
  return (
    <section className="container mb-[13.25rem] md:mb-[17.5rem] lg:mb-[15rem] lg:grid lg:grid-cols-[auto,730px]">
      <h2
        className="text-black-custom heading max-w-[8ch] mb-[2.625rem] 
      md:max-w-none md:mb-[3.75rem]"
      >
        Connect with us
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setState(false);
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        <Form className="form">
          <CustomInput
            label="Please provided your name."
            name="name"
            type="text"
            placeholder="Name"
          />
          <CustomInput
            label="Please provide your email address."
            name="email"
            type="email"
            placeholder="Email"
          />
          <CustomTextArea
            label="Please send us your message."
            name="message"
            rows="5"
            placeholder="Message"
          />
          <button
            type="submit"
            aria-label="Submit form."
            className="form__submit"
          >
            <img src={arrow} alt="" className="inline-block" />
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
