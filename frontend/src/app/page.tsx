import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";
import axios from "axios";


export default async function Name() {
  const projects = async () => {
    const response = await axios.get(
      `https://${process.env.VERCEL_URL}/api/projects/manage-project`
    );
    // console.log("texrr",response.data)
    return response.data;
  };
  const myProjects = await projects();

  return (
    <div>
      {myProjects.data?.map((p: any) => (
        <div key={p.title}>{p.title}</div>
      ))}
      <Header />
      <AboutMe />
      <Skill />
      <PortFolio />
    </div>
  );
}