import React from "react";
import { Field } from "formik";

const workExperienceSelect = (props) => {
  const { options, name, placeholder } = props;

  return (
    <Field>
      {({
        field: { value },
        form: { setFieldValue, errors, setFieldTouched ,touched},
      }) => (
        <>
          {props.as({
            value,
            setFieldValue,
            setFieldTouched,
            options,
            touched,
            name,
            placeholder,
            errors
          })}
          {errors[name] && touched[name] && (
            <div className={"error"}>{errors[name]}</div>
          )}
        </>
      )}
    </Field>
  );
};

export default workExperienceSelect;
