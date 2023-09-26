import { ITechStackItem, IProject, IOption } from "@/app/libs/types";
import FormGroup from "./components/FormGroup/formGroup";


export default function CreateProject() {
  const initialValues : IProject = {
    title: "" ,
    githubURL: "",
    demoURL: "",
    testimonial:"",
    purposeAndGoal: "",
    techStackItems: [],
    tools: [],
    description:""
  }

  return (
    <div>
      <FormGroup projectData={initialValues}/>
    </div>
  );
}