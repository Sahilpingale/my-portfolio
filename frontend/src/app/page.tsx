import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";

// const prisma = new PrismaClient();

// const fetchProjectList = async () => {
//   const result = await prisma.project.findMany();
//   // throw new Error("ffff")
//   return result;
// };

export default async function Name() {
  // const projects = await fetchProjectList();
  // console.log("my-projects", projects);
  return (
    <div>
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio />
    </div>
  );
}
