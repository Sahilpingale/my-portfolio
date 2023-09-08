import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";


export default async function Name() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio />
    </div>
  );
}
;