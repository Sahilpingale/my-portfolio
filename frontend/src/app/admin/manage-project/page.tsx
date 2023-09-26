import { ITechStackItem, IProject, IOption, } from "@/app/libs/types";
import FormGroup from "./components/FormGroup/formGroup";
import getStackItems from "./libs/getStackItems";

export default async function CreateProject() {
  const initialValues: IProject = {
    title: "",
    githubURL: "",
    demoURL: "",
    testimonial: "",
    purposeAndGoal: "",
    techStackItems: [],
    tools: [],
    description: "",
  };
  // Fetch all tech stack items
  const allStackItems = await getStackItems();

  // Filter out Tech stack items and tools
  const techStackItems = allStackItems.data.filter((item: IOption)=> item.type === "TECHSTACK")
  const toolItems = allStackItems.data.filter((item:IOption)=>item.type ==="TOOL")

  return (
    <div>
      <FormGroup toolItems={toolItems} techStackItems={techStackItems} projectData={initialValues} />
    </div>
  );
}
