import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";
export const dynamic = "force-dynamic"

export default async function Name() {
const prisma = new PrismaClient()
  const myProjects = await prisma.project.findMany()

  // const projects = async () => {
  //   const url = `${process.env.DOMAIN}/api/projects/manage-project`
  //   console.log(url)
  //   const response = await fetch(url,{cache:"no-cache"})
  //   return response.json()
  // };
  // const myProjects = await projects();

  return (
    <div>
      {myProjects.map((p: any) => (
        <div key={p.title}>{p.title}</div>
      ))}
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio />
    </div>
  );
}