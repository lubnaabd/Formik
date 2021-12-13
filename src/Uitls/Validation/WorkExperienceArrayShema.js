import * as yup from "yup";
import WorkExperienceFormShema from "./workExperienceFormShema";

const WorkExperienceArrayShema = () => {
  return yup.object().shape({
    workExperienceArray: yup
      .array()
      .of(
        WorkExperienceFormShema().required("Please Enter new work Experience")
      )
      .min(1, "there is no new work Experinece")
      .required("Please Enter new work Experience"),
  });
};
export default WorkExperienceArrayShema;
