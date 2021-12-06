import React from "react";
import { Formik } from "formik";
import workExperienceForm from "./workExperienceForm";
import { useDispatch } from "react-redux";
import { WorkExperienceFormShema } from "../Uitls/Validation";
import { addItem } from "../Redux/List/action";
const FormikReact = () => {
  const dispatch = useDispatch();

  return (
    <div className="form">
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
        }}
        onSubmit={(values, actions) => {
          dispatch(
            addItem({
              values: values,
              id: Math.random() * 1000,
            })
          );
          actions.resetForm({ });
          actions.setSubmitting(false);
        }}
        validationSchema={WorkExperienceFormShema}
        children={workExperienceForm}
      />
    </div>
  );
};

export default FormikReact;
