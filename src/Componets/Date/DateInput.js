import React, { useState } from "react";

const DateInput = (props) => {
  const [isFoucs, setIsFocus] = useState(false);
  const {
    field: { name,onBlur },
    form: { setFieldValue,touched },
  } = props;
  return (
    <input
      onFocus={() => setIsFocus(true)}
      type={isFoucs ? "date" : "text"}
      onChange={(e) => setFieldValue(name, e.target.value)}
      onBlur={onBlur(name)}
      {...props}
    />
  );
};

export default DateInput;
