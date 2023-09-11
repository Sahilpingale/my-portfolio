import React from "react";
import { ProjectTypes } from "@/app/libs/types";
import Link from "next/link";
import ProjectCard from "../ProjectCard/page";

export default async function Portfolio({ projectsData }: any) {
  const projects = await projectsData;


  return (
    <section className="section-portfolio" id="section-portfolio">
      <div className="container">
        <span className="subheading">Portfolio</span>
        <h2 className="heading-secondary">Check out my best work</h2>
      </div>
      <div className="container flex">
        <div className="grid grid-col-3">
          {projects?.map((project: any) => (
            <ProjectCard  project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
}
