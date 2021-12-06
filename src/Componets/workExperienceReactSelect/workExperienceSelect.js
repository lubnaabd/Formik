import React from "react";
import { Field } from "formik";

const workExperienceSelect = (props) => {
  const { options, name, placeholder,touched } = props;
  
  return (
    <Field>
      {({
        field: { onBlur,value },
        form: { setFieldValue, errors, setFieldTouched ,touched,handleBlur},
      }) => (
        <>
          {props.as({
            value,
            onBlur,
            setFieldValue,
            setFieldTouched,
            options,
            touched,
            name,
            placeholder,
            handleBlur,
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
