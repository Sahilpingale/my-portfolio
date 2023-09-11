import Link from "next/link";

export default function ProjectCard({project}:any){
    return(
        <div className="portfolio-card">
        <div className="portfolio-text-box">
          <p className="portfolio-title">{project?.title}</p>
          <p className="portfolio-description">
            {project?.description}
          </p>
        </div>
        <div className="portfolio-button-area">
          <Link href={`/projects/${project?.id}`}className="portfolio-btn">
            Details &rarr;
          </Link>
        </div>
      </div>
    )
}