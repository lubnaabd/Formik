import React from "react";
import workExperienceSelectComponent from "./workExperienceReactSelect/workExperienceSelectComponent";
import WorkExperienceSelect from "./workExperienceReactSelect/workExperienceSelect";
import workExperienceStaticData from "./StaticData/staticData";
import DatePickerField from "./DataPicker/dataPickerField";
import { Form } from "formik";
import FormInput from "./FormInput";

const workExperienceForm = ({ errors, touched, values }) => {
  return (
    <Form  >
      <span>Job Detials</span>
      <div>
        {" "}
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="jobTitle"
          options={workExperienceStaticData.jobTitleOptions}
          placeholder="Job Title"
        />
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="jobField"
          options={workExperienceStaticData.jobFieldOpeions}
          placeholder="Job Field"
        />
        <WorkExperienceSelect
          as={workExperienceSelectComponent}
          name="jobLocation"
          options={workExperienceStaticData.jobLocationOpeions}
          placeholder="Job Location"
          
        /><div>
        <DatePickerField
          name="startDate"
          currentlyWork={values.currentlyWork}
        />
        {!values.currentlyWork && (
          <DatePickerField
            name="endDate"
            currentlyWork={values.currentlyWork}
          />
        )}</div>
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
          placeholder="Company Industry"
        />   <WorkExperienceSelect
        as={workExperienceSelectComponent}
        name="companySize"
        options={workExperienceStaticData.companySizeOptions}
        placeholder="company Size"
      />   <WorkExperienceSelect
      as={workExperienceSelectComponent}
      name="companySector"
      options={workExperienceStaticData.companySectorOptions}
      placeholder="Company Sector "
    />
      </div>
      <button type={"submit"} className="btn_submit">
        Save
      </button>
    </Form>
  );
};

export default workExperienceForm;
