import { PrismaClient } from "@prisma/client";
import Header from "./components/SectionHeader/page";
import AboutMe from "./components/SectionAboutMe/page";
import Skill from "./components/SectionSkills/page";
import PortFolio from "./components/SectionPortfolio/page";
import axios from "axios";


export default async function Name() {
  // const projects = async () => {
  //   const response = await axios.get(
  //     `https://my-portfolio-8n98fsowv-sahilpingale.vercel.app/api/projects/manage-project`
  //   );
  //   // console.log("texrr",response.data)
  //   return response.data;
  // };
  const projects = async () => {
    const response = await fetch(`${process.env.APP_LAYER}${process.env.VERCEL_URL}/api/projects/manage-project`,{cache:"no-cache"})
    // console.log(response.json(),"ress")
    return response.json()
  };
  const myProjects = await projects();
  console.log(myProjects,"reess")

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