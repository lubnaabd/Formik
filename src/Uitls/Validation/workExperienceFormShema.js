import * as yup from "yup";

const workExperienceFormShema = () => {
  return yup.object({
    jobTitle: yup
      .string()
      // .oneOf(
      //   ["Administrative Assistant"],
      //   "Field must be Administrative Assistant"
      // )
      .required("Please Select job title"),
    jobField: yup.string().required("Please Select job Field"),
    jobLocation: yup.string().required("Please Select job Location"),
    startDate: yup.date().required("Please Enter Start Date"),
    endDate: yup.date().required("Please Enter End Date"),
    companyName:yup.string().required("Please Enter Company Name"),
    companyIndustry:yup.string().required("Please Select Company Inustry"),
    companySize:yup.string().required("Please Select Company Size"),
    companySector:yup.string().required("Please Select Company Sectore"),
    companyAddress:yup.string().required("Please Enter Company Address"),
    description: yup
      .string()
      .required("Please Select job Description")
      // .min(200, "Min 200 Char"),
  });
};
export default workExperienceFormShema;
