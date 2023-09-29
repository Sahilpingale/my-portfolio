import getTechStackDetails from "./libs/getTechStackDetails";
import TechStackFormGroup from "../components/TechStackFormGroup";

export default async function EditTechStackItem({params}:{params: {slug :string}}) {
  const id = params.slug

  const stackData = await getTechStackDetails(id)
  return (
    <div>
      <TechStackFormGroup id={id} stackData={stackData.data}/>
    </div>
  );
}