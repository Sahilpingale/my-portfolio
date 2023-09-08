import React from 'react'

const PortFolio = () => {
  return (
    <section className="section-portfolio" id="section-portfolio">
    <div className="container">
      <span className="subheading">Portfolio</span>
      <h2 className="heading-secondary">Check out my best work</h2>
    </div>
    <div className="container flex">
      <div className="grid grid-col-3">
        {/* <!-- Leadx --> */}
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
        {/* <!-- DataScalp --> */}
        <div className="portfolio-card">
          <div className="portfolio-text-box">
            <p className="portfolio-title">Flight Picker</p>
            <p className="portfolio-description">
              An online platform that captures consumer experiences to rank
              airlines on a performance dashboard.
            </p>
          </div>
          <div className="portfolio-button-area">
            <a href="datascalp.html" className="portfolio-btn"
              >Details &rarr;</a>
          </div>
        </div>
        {/* <!-- Pet Pet --> */}
        <div className="portfolio-card">
          <div className="portfolio-text-box">
            <p className="portfolio-title">PetPet</p>
            <p className="portfolio-description">
              One stop online store for all pet owner's needs
            </p>
          </div>
          <div className="portfolio-button-area">
            <a href="proshop.html" className="portfolio-btn">Details &rarr;</a>
          </div>
        </div>

        {/* <!-- Fidesto Purchase management --> */}
        <div className="portfolio-card">
          <div className="portfolio-text-box">
            <p className="portfolio-title">Purchase Management</p>
            <p className="portfolio-description">
              An app to keep categorical record of vendors and purchased
              items
            </p>
          </div>
          <div className="portfolio-button-area">
            <a href="purchaseManagement.html" className="portfolio-btn"
              >Details &rarr;</a>
          </div>
        </div>

        {/* <!-- devconnector --> */}
        <div className="portfolio-card">
          <div className="portfolio-text-box">
            <p className="portfolio-title">DevConnect</p>
            <p className="portfolio-description">
              Social media platform for developers
            </p>
          </div>
          <div className="portfolio-button-area">
            <a href="devconnect.html" className="portfolio-btn"
              >Details &rarr;</a>
          </div>
        </div>

        {/* <!-- OMNIFOOD --> */}
        <div className="portfolio-card">
          <div className="portfolio-text-box">
            <p className="portfolio-title">Omnifood Project</p>
            <p className="portfolio-description">
              Landing page for a food delivery startup
            </p>
          </div>
          <div className="portfolio-button-area">
            <a href="omnifood.html" className="portfolio-btn">Details &rarr;</a>
          </div>
        </div>

        {/* <!-- Kailash Coating --> */}
        <div className="portfolio-card">
          <div className="portfolio-text-box">
            <p className="portfolio-title">Kailash Coating</p>
            <p className="portfolio-description">
              ERP app for a powder coating plant
            </p>
          </div>
          <div className="portfolio-button-area">
            <a href="kailashCoating.html" className="portfolio-btn"
              >Details &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PortFolio