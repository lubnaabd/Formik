import * as yup from "yup";

const workExperienceFormShema = () => {
  return yup.object().shape({
    currentlyWork: yup.boolean(),
    jobTitle: yup.string().required("Please Select job title"),
    jobField: yup.string().required("Please Select job Field"),
    jobLocation: yup.string().required("Please Select job Location"),
    companyName: yup.string().required("Please Enter Company Name"),
    companyIndustry: yup.string().required("Please Select Company Inustry"),
    companySize: yup.string().required("Please Select Company Size"),
    companySector: yup.string().required("Please Select Company Sectore"),
    companyAddress: yup.string().required("Please Enter Company Address"),
    description: yup.string().required("Please Select job Description"),
    startDate: yup.date().required("Please Enter Start Date"),
    endDate: yup.date().when("currentlyWork", {
      is: true,
      then: yup.date(),
      otherwise: yup
        .date()
        .required("Please Enter End Date")
        .min(yup.ref("startDate"), "End date should be later than start Date")
    }),
    reasonOfLeaving: yup.string().when("currentlyWork", {
      is: true,
      then: yup.string(),
      otherwise: yup.string().required("Please Enter Reason Of Leaving "),
    }),
    numberEmployees: yup
      .number()
      .typeError("Should be Number")
      .integer()
      .min(0, "Please Enter more than one")
      .required("Please Enter Number Of Supervise by you"),
  });
};
export default workExperienceFormShema;
