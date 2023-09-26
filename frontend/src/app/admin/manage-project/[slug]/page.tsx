import { IOption } from "@/app/libs/types";
import FormGroup from "../components/FormGroup/formGroup";
import getStackItems from "../libs/getStackItems";
import getProjectDetails from "./libs/getProjectDetails";

export default async function EditProject({
  params,
}: {
  params: { slug: string };
}) {
  const projectId = params.slug;
  console.log(projectId);

  const project = await getProjectDetails(projectId);
  // Fetch all tech stack items
  // const allStackItems = await getStackItems();

  // // Filter out Tech stack items and tools
  // const techStackItems = allStackItems.data.filter(
  //   (item: IOption) => item.type === "TECHSTACK"
  // );
  // const toolItems = allStackItems.data.filter(
  //   (item: IOption) => item.type === "TOOL"
  // );
  return (
    <div>
      <FormGroup
        // toolItems={toolItems}
        // techStackItems={techStackItems}
        projectData={project.data}
        id={projectId}
      />
    </div>
  );
}
