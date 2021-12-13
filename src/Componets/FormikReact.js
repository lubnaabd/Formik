import React from "react";
import { Formik } from "formik";
import workExperienceForm from "./workExperienceForm";
import { useDispatch } from "react-redux";
import {
  WorkExperienceFormShema,
  WorkExperienceArrayShema,
} from "../Uitls/Validation";
import { addItem } from "../Redux/List/action";
import { Form } from "formik";

const FormikReact = ({ isEditing }) => {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <Formik
        initialValues={{ workExperienceArray: [] }}
        validationSchema={WorkExperienceArrayShema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ errors, touched, setValues, submitForm }) => (
          <>
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
                reasonOfLeaving: "",
                numberEmployees: "",
                id: "",
              }}
              onSubmit={(values, actions) => {
                values.id = Math.random() * 1000;

                dispatch(addItem({ values }));
                actions.resetForm({});
                actions.setSubmitting(false);
                setValues((prev) => {
                  return {
                    workExperienceArray: [...prev.workExperienceArray, values],
                  };
                });
              }}
              validationSchema={WorkExperienceFormShema}
              children={workExperienceForm}
            />
            <Form>
              <div>
                <button
                  type={"buttn"}
                  className="btn_submit"
                  onClick={submitForm}
                >
                  Next
                </button>
                <>
                  {errors.workExperienceArray && (
                    <div className={"error"}>{errors.workExperienceArray}</div>
                  )}
                </>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormikReact;
