import React from "react";
import Select from "react-select";

const workExperienceSelectComponent = ({
  setFieldTouched,
  value,
  setFieldValue,
  options,
  name,
  placeholder,
  touched
}) => {
  return (
    
    <div>
   <Select
        inputValue={value.value}
        onClick={() => setFieldTouched(name, true)}
        className="select_work_experinece"
        placeholder={placeholder}
        defaultValue={placeholder}
        isSearchable={true}
        name={name}
        options={options}
        onChange={(value) => setFieldValue(name, value.value)}
      />
    </div>
  );
};

export default workExperienceSelectComponent;
