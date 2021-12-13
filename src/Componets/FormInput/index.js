import { Field } from "formik";
import { useSelector } from "react-redux";

const FormInput = ({
  type,
  name,
  placeholder,
  errors,
  touched,
  label,
  component ,
  className,
}) => {
  const { editList, list, isEditing } = useSelector((state) => state.list);

  return (
    <div>

      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        // value={isEditing ? editList.values[name]:null }

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
