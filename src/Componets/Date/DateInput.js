import React, { useState } from "react";

const DateInput = (props) => {
  const [isFoucs, setIsFocus] = useState(false);
  const {
    field: { name, onBlur, value },
    form: { setFieldValue },
  } = props;
  return (
    <input
      onFocus={() => setIsFocus(true)}
      value={value && value }
      type={isFoucs ? "date" : "text"}
      onChange={(e) => setFieldValue(name, e.target.value)}
      onBlur={onBlur(name)}
      {...props}
    />
  );
};

export default DateInput;
