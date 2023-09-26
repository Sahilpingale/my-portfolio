import FormGroup from "../components/FormGroup/page";
import getProjectDetails from "./libs/getProjectDetails";

export default async function EditProject({params}:{params : {slug : string}}) {
  const projectId = params.slug
  console.log(projectId)

  const project = await getProjectDetails(projectId)
  console.log("myy",project.data,"myyy")

  return (
    <div>
      <FormGroup projectData={project.data} id={projectId}/>
    </div>
  );
}