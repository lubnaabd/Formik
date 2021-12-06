import React from "react";
import { Formik } from "formik";
import workExperienceForm from "./workExperienceForm";
import { useDispatch ,useSelector} from "react-redux";
import { WorkExperienceFormShema } from "../Uitls/Validation";
import { addItem } from "../Redux/List/action";
import { Form } from "formik";

const FormikReact = () => {
  const { list } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <div className="form">
      <Formik
        initialValues={{ workExperienceArray: [] }}
        onSubmit={(values, actions) => {
          actions.setValues(list)
          console.log(values);
          
        }}
      >
   
        <div>
              <Formik
                initialValues={{
                  jobTitle: "",
                  jobField: "",
                  jobLocation: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                  companyName: "",
                  companyAddress: "",
                  currentlyWork: false,
                  companyIndustry: "",
                  companySize: "",
                  companySector: "",
                  reasonOfLeaving:"",
                  numberEmployees:""
                }}
                onSubmit={(values, actions) => {
                  dispatch(
                    addItem({
                      values: values,
                      id: Math.random() * 1000,
                    })
                  );
                  actions.resetForm({});
                  actions.setSubmitting(false);
                }}
                validationSchema={WorkExperienceFormShema}
                children={workExperienceForm}
              />
              <button type={"submit"} className="btn_submit">
                Next
              </button>{" "}
              </div>
      </Formik>
    </div>
  );
};

export default FormikReact;
