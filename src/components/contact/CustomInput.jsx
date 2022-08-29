import { useField, ErrorMessage } from 'formik';
import clsx from 'clsx';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form__wrapper">
      <label htmlFor={field.name} className="ninja">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`
          form__input
          ${clsx({
            'form__input--error': meta.touched && meta.error,
          })}
        `}
      />
      <ErrorMessage name={field.name}>
        {msg => <div className="form__error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default CustomInput;
