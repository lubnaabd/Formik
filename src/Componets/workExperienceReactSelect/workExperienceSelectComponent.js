import React from "react";
import Select from "react-select";

const workExperienceSelectComponent = ({
  setFieldTouched,
  value,
  setFieldValue,
  options,
  name,
  placeholder,
  touched,
  handleBlur,
  onBlur
}) => {
  return (
    <div>
      <Select
        onClick={() => setFieldTouched(name, true)}
        className="select_work_experinece"
        placeholder={placeholder}
        defaultValue={null}
        isSearchable={true}
        onBlur={onBlur(name)}
        name={name}
        value={value[name] ? value.value : null}
        options={options}
        onChange={(value) => setFieldValue(name, value.value)}
      />
    </div>
  );
};

export default workExperienceSelectComponent;
