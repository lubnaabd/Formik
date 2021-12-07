import React from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

const WorkExperienceSelectComponent = ({
  setFieldTouched,
  value,
  setFieldValue,
  options,
  name,
  placeholder,
  touched,
  handleBlur,
  onBlur,
}) => {
  const { editList, list, isEditing } = useSelector((state) => state.list);
  {
    console.log(isEditing);
  }
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
        value={
          value[name] ? value.value : isEditing ? value.value : null
        }
        options={options}
        onChange={(value) => setFieldValue(name, value.value)}
      />
    </div>
  );
};

export default WorkExperienceSelectComponent;
