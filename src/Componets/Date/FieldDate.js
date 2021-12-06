import { Field } from "formik";

const FieldDate = ({
  name,
  placeholder,
  errors,
  touched,
  component,
  className,
}) => {
  return (
      <div>
      <Field
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

export default FieldDate;
