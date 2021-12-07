import React from "react";
import { Formik,Field } from "formik";
import workExperienceForm from "./workExperienceForm";
import { useDispatch, useSelector } from "react-redux";
import {
  WorkExperienceFormShema,
  WorkExperienceArrayShema,
} from "../Uitls/Validation";
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
          const newArray = [{ values: list, id: Math.random() * 1000 }];
          actions.setValues(newArray);
         }}
        // validationSchema={WorkExperienceArrayShema}
      >
        {({ errors, touched }) => (
          <div>
            {console.log(errors)}{" "}
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
            <Form>
              <div >

                <input type={"submit"} className="btn_submit">
                  Next
                </input>
             <>   {errors.workExperienceArray&& (
            <div className={"error"}>{errors.workExperienceArray}</div>
          )}</>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormikReact;
