import { useField, ErrorMessage } from 'formik';
import clsx from 'clsx';

const CustomTextArea = ({ label, rows, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form__wrapper--message">
      <label htmlFor={field.name} className="ninja">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        rows={rows}
        className={`
          form__input--message
          ${clsx({
            'form__input--error': meta.touched && meta.error,
          })}
        `}
      />
      <ErrorMessage name={field.name}>
        {msg => <div className="form__error--message">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default CustomTextArea;
