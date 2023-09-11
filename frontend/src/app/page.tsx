import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";
// export const dynamic = "force-dynamic"
import getProjects from "./libs/getProjects";

export default async function Name() {

  const projects = await getProjects();
  return (
    <div>
      {projects.data.map((p: any) => (
        <div key={p.title}>{p.title}</div>
      ))}
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio />
    </div>
  );
}

// No need to use prisma client directly from server components
// 

