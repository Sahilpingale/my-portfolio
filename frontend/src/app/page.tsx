import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";
export const dynamic = "force-dynamic"
import getProjects from "./libs/getProjects";

export default async function Name() {

  const projects = await getProjects();

  return (
    <div>
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio projectsData={projects.data}/>
    </div>
  );
}

// No need to use prisma client directly from server components
// TDL :
// project card should have loading state

