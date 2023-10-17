import { IOption } from "@/app/libs/types";

interface IProps {
  stackItem: IOption
}

const TechStactItem = ({stackItem}:IProps) =>{
const BASE_URL = process.env.NEXT_PUBLIC_CDN_TECH_STACK
console.log("stack item1",stackItem)
  return (
    <div className="techStack-description">
      {stackItem.images && <img className="stack-list-image" src={`${BASE_URL}/${stackItem.id}/${stackItem.images[0]}`} />}
      <span>{stackItem.label}</span>
    </div>
  );
}
export default TechStactItem
