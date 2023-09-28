import { IOption } from "@/app/libs/types";
import TechStackFormGroup from "../manage-tech-stack/components/TechStackFormGroup";

import { useFormik } from "formik";
export default function ManageProfile() {
  const initialValues: IOption = {
      label: "",
      type: "TECHSTACK"
  }
  return (
    <div>
      <TechStackFormGroup stackData={initialValues}/>
    </div>
  );
}