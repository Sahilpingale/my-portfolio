"use client"
import "./styles.css";
import "../../mediaQueryStyles.css";
import TechStactItem from "./components/TechStackItem/page";
import { TrashIcon, ManageIcon } from "./components/Icons";
import Link from "next/link";
import DeleteProject from "./components/DeleteProject";

export default function ProjectPage({ params }: { params: { slug: string } }){
  const projectId = params.slug
  return (
    <>
      {/* TOP SECTION  */}
      <section className="portfolio-details-top">
        <div className="mx-5 my-3 mb-4">
          <div className="flex gap-3 alignCenter justifySpaceBetween">
            <h2 className="heading-secondary">Lead Management</h2>
            <div className="flex gap-1">
              <Link
                href={`/admin/manage-project/${projectId}`}
                className="flex gap-1 alignCenter"
              >
                <span>Manage</span>
                <ManageIcon />
              </Link>
              <DeleteProject projectId={projectId}/>
            </div>
          </div>
        </div>
        <div className="container portfolio-details-grid">
          {/* <!-- Image Box --> */}
          <div className="portfolio-item-img-box">carousel here</div>
          {/* <!-- Text Box --> */}
          <div className="portfolio-text-box">
            {/* <!-- Description --> */}
            <div className="mb-2">
              <h2 className="heading-tertiary">Descripion</h2>
              <p className="portfolioDetails-description">
                A startup that helps B2B companies move from cold sales
                processes with limited results to warm sales processes with
                amazing results.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                className="demo inline-block"
                href="https://sahilpingale.github.io/omnifood/"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                className="demo inline-block"
                href="https://github.com/Sahilpingale/omnifood"
                target="_blank"
              >
                GitHub
              </a>
            </div>

            {/* <!-- Tech Stack --> */}
            <div className="my-3">
              <h2 className="heading-tertiary">Tech Stack</h2>
              <div className="techStack-grid">
                <TechStactItem />
                <TechStactItem />
                <TechStactItem />
                <TechStactItem />
                <TechStactItem />
                <TechStactItem />
                <TechStactItem />
              </div>
            </div>
            {/* <!-- Tool used --> */}
            <div className="my-3">
              <h2 className="heading-tertiary">Tools used</h2>
              <div className="col-gap-none techStack-grid">
                <TechStactItem />
                <TechStactItem />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="portfolio-details-bottom">
        <div className="container">
          <h2 className="heading-tertiary mb-0">My Role</h2>
          <p className="portfolioDetails-description">
            As a member of the full stack project team, I performed several
            important roles. Firstly, I was responsible for refactoring class
            components into a function components in react. This involved
            rewriting the code to improve its readability, maintainability, and
            performance. It was a challenging task, but it helped to optimize
            the codebase and make it more efficient.
            <br />
            <br />
            Secondly, I added Google Analytics to the project. This allowed us
            to track user behavior and gain valuable insights into how the
            application was being used. It was important to make data-driven
            decisions, and Google Analytics provided us with the necessary data
            to do so.
            <br />
            <br />
            Thirdly, I worked on implementing new features into the project.
            This included developing new functionality and improving existing
            ones to enhance the user experience. It was a great opportunity to
            exercise my creativity and problem-solving skills.
            <br />
            <br />
            Fourthly, I wrote customs hooks in react to reuse logical functions
            across web and mobile. This helped to improve the efficiency of
            development by reducing the amount of code that needed to be
            written, maintained and tested. It was satisfying to see how these
            hooks could be reused across different parts of the project.
            <br />
            <br />
            Fifthly, I worked on implementing new mobile features in React
            Native. This involved designing and developing new features
            specifically for mobile devices to ensure that the application was
            optimized for android and iOS users.
            <br />
            <br />
            Finally, I made sure that the project had a responsive layout. This
            meant that the application was able to adapt to different screen
            sizes and resolutions, allowing users to have a consistent
            experience regardless of the device they were using.
          </p>
        </div>
      </section>
    </>
  );
}
