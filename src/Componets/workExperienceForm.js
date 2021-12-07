import React from "react";
import workExperienceSelectComponent from "./workExperienceReactSelect/workExperienceSelectComponent";
import WorkExperienceSelect from "./workExperienceReactSelect/workExperienceSelect";
import workExperienceStaticData from "./StaticData/staticData";
import { Form } from "formik";
import FormInput from "./FormInput";
import DateInput from "./Date/DateInput";
import FieldDate from "./Date/FieldDate";

const workExperienceForm = ({ errors, touched, values }) => {
  return (
    <Form>
      <span>Job Detials</span>
      <div>
        {" "}
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="jobTitle"
          options={workExperienceStaticData.jobTitleOptions}
          placeholder="Job Title"
          touched={touched}
        />
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="jobField"
          options={workExperienceStaticData.jobFieldOpeions}
          placeholder="Job Field"
          touched={touched}
        />
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          touched={touched}
          name="jobLocation"
          options={workExperienceStaticData.jobLocationOpeions}
          placeholder="Job Location"
        />
        <div className="div_date">
          <FieldDate
            component={DateInput}
            name={"startDate"}
            placeholder={"Start Date"}
            touched={touched}
            errors={errors}
            className="date"
          />
          {!values.currentlyWork && (
            <FieldDate
              component={DateInput}
              name={"endDate"}
              placeholder={"End Date"}
              touched={touched}
              errors={errors}
              className="date"
            />
          )}
        </div>
        <FormInput
          type={"checkbox"}
          name={"currentlyWork"}
          touched={touched}
          errors={errors}
          className="checkbox"
          label="Currently Work There"
        />
        <FormInput
          component="textarea"
          name={"description"}
          placeholder={"Description"}
          touched={touched}
          errors={errors}
          className="input"
        />
      </div>
      <span>Company Detials</span>
      <div>
        {" "}
        <FormInput
          type="input"
          name={"companyName"}
          placeholder={"Company Name"}
          touched={touched}
          className="input"
          errors={errors}
        />
        <FormInput
          type="input"
          name={"companyAddress"}
          placeholder={"Company Address"}
          touched={touched}
          className="input"
          errors={errors}
        />
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="companyIndustry"
          options={workExperienceStaticData.companyIndustryOptions}
          touched={touched}
          placeholder="Company Industry"
        />{" "}
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="companySize"
          touched={touched}
          options={workExperienceStaticData.companySizeOptions}
          placeholder="company Size"
        />{" "}
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="companySector"
          options={workExperienceStaticData.companySectorOptions}
          touched={touched}
          placeholder="Company Sector "
        />
        <FormInput
          type="input"
          name={"numberEmployees"}
          placeholder={"# of Employees Superives by You"}
          touched={touched}
          className="input"
          errors={errors}
        />
        {!values.currentlyWork && (
          <FormInput
            type="input"
            name={"reasonOfLeaving"}
            placeholder={"Reason Of Leaving"}
            touched={touched}
            className="input"
            errors={errors}
          />
        )}
      </div>
      <button type={"submit"} className="btn_save">
       + SAVE & ADD ANOTHER RECORD
      </button>
    </Form>
  );
};

export default workExperienceForm;
