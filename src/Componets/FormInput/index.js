import { Field } from "formik";

const FormInput = ({
  type,
  name,
  placeholder,
  errors,
  touched,
  label,
  component ,
  className
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
        className={className}
      />
      {errors[name] && touched[name] && (
        <div className={"error"}>{errors[name]}</div>
      )}
    </div>
  );
};

export default FormInput;
