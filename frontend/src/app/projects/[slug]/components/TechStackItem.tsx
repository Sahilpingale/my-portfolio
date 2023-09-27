import { IOption } from "@/app/libs/types";

interface IProps {
  stackItem: IOption
}

const TechStactItem = ({stackItem}:IProps) =>{
  return (
    <div className="techStack-description">
      {/* <img src="./img/TechStackSmall/google-analytics-svgrepo-com.svg" /> */}
      <span>{stackItem.label}</span>
    </div>
  );
}
export default TechStactItem
