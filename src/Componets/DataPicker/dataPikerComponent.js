import React from "react";
import DatePicker from "react-date-picker";

const dataPikerComponent = ({
  setFieldTouched,
  value,
  setFieldValue,
  name,
}) => {
  
  return (
    <DatePicker
      onClick={() => setFieldTouched(name, true)}
      className="date_work_experinece"
      defaultValue={null}
      isSearchable={true}
      name={name}
      selected={(value&& new Date(value)) || null}
      dateFormat="dd.MM.yyyy"
      onChange={(value) => setFieldValue(name, value)}
    />
  );
};

export default dataPikerComponent;
