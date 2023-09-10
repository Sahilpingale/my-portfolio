import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";
import axios from "axios";

const projects = async () => {
  console.log("i ran 2");
  const response = await axios.get(
    "http://localhost:3000/api/projects/manage-project"
  );
  // console.log("texrr",response.data)
  return response.data;
};
export default async function Name() {
  const myProjects = await projects();
  console.log(myProjects, "mkm");

  return (
    <div>
      {myProjects.data.map((p: any) => (
        <div key={p.title}>{p.title}</div>
      ))}
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio />
    </div>
  );
}
