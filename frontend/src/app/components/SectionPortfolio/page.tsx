import React from 'react'

export default function Portfolio() {
  const ProjectCard = () =>{
    return(
      <div className="portfolio-card">
      <div className="portfolio-text-box">
        <p className="portfolio-title">Lead Management</p>
        <p className="portfolio-description">
          App that assist B2B companies Break Silos & Boost Sales
        </p>
      </div>
      <div className="portfolio-button-area">
        <a href="leadx.html" className="portfolio-btn">Details &rarr;</a>
      </div>
    </div>
    )
  }
  
  return (
    <section className="section-portfolio" id="section-portfolio">
    <div className="container">
      <span className="subheading">Portfolio</span>
      <h2 className="heading-secondary">Check out my best work</h2>
    </div>
    <div className="container flex">
      <div className="grid grid-col-3">
          <ProjectCard />
      </div>
    </div>
  </section>
  )
}