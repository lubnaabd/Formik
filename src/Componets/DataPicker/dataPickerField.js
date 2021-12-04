import {  useField, useFormikContext } from "formik";
import DatePicker from "react-date-picker";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue, errors, touched,setFieldTouched } = useFormikContext();
  const [field] = useField(props);
  const { currentlyWork, name } = props;
  return (
    <>
      <DatePicker
        {...field}
        {...props}
        className="date_work_experinece"
        onChangeRaw={e => {
            setFieldTouched(name, true, true);
        }}
        selected={(field.value && new Date(field.value)) }
           onChange={(val) => {
          currentlyWork 
            ?( setFieldValue("endDate", new Date())&& setFieldValue("startDate",val))
            : 
            setFieldValue(name, val);
        }}
      />
      {errors[name] && touched[name] && (
        <div className={"error"}>{errors[name]}</div>
      )}
    </>
  );
};

export default DatePickerField;
