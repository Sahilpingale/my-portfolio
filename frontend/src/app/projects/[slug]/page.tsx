import "./styles.css";
import "../../mediaQueryStyles.css";
import TechStactItem from "./components/TechStackItem";
import { TrashIcon, ManageIcon } from "./components/Icons";
import Link from "next/link";
import DeleteProject from "./components/DeleteProject";
import getProjectDetails from "@/app/admin/manage-project/[slug]/libs/getProjectDetails";
import { IOption } from "@/app/libs/types";
export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const projectId = params.slug;

  const projectData = await getProjectDetails(projectId);
  const { data } = projectData;
  return (
    <>
      {/* TOP SECTION  */}
      <section className="portfolio-details-top">
        <div className="mx-5 my-3 mb-4">
          <div className="flex gap-3 alignCenter justifySpaceBetween">
            <h2 className="heading-secondary">{data.title}</h2>
            <div className="flex gap-1">
              <Link
                href={`/admin/manage-project/${projectId}`}
                className="flex gap-1 alignCenter"
              >
                <span>Manage</span>
                <ManageIcon />
              </Link>
              <DeleteProject projectId={projectId} />
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
              <p className="portfolioDetails-description">{data.description}</p>
            </div>
            {/* <!-- URL Links --> */}
            {(data.demoURL || data.githubURL) && (
              <div className="flex gap-2">
                {data.demoURL && (
                  <a
                    className="demo inline-block"
                    href={data.demoURL}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                )}
                {data.githubURL && (
                  <a
                    className="demo inline-block"
                    href={data.githubURL}
                    target="_blank"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}

            {/* <!-- Tech Stack --> */}
            <div className="my-3">
              <h2 className="heading-tertiary">Tech Stack</h2>
              <div className="techStack-grid">
                {data.techStackItems.map((item: IOption) => (
                  <TechStactItem key={item.id} stackItem={item} />
                ))}
              </div>
            </div>
            {/* <!-- Tool used --> */}
            <div className="my-3">
              <h2 className="heading-tertiary">Tools used</h2>
              <div className="col-gap-none techStack-grid">
                {data.tools.map((tool: IOption) => (
                  <TechStactItem key={tool.id} stackItem={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION - Purpose And Goal*/}
      {data.purposeAndGoal && (
        <section className="portfolio-details-bottom">
          <div className="container">
            <h2 className="heading-tertiary mb-0">Purpose and Goal</h2>
            <p className="portfolioDetails-description">
              {data.purposeAndGoal}
            </p>
          </div>
        </section>
      )}

      {/* BOTTOM SECTION - Testimonial*/}
      {data.purposeAndGoal && (
        <section className="portfolio-details-bottom">
          <div className="container">
            <h2 className="heading-tertiary mb-0">Testimonial</h2>
            <p className="portfolioDetails-description">
              {data.testimonial}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
