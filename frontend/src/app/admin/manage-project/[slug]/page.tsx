import FormGroup from "../components/FormGroup/formGroup";
import getProjectDetails from "./libs/getProjectDetails";

export default async function EditProject({params}:{params : {slug : string}}) {
  const projectId = params.slug
  console.log(projectId)

  const project = await getProjectDetails(projectId)

  return (
    <div>
      <FormGroup projectData={project.data} id={projectId}/>
    </div>
  );
}