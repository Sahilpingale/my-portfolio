"use client";
import { LogoInstagram } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { LogoGithub } from "react-ionicons";
import { DocumentTextOutline } from "react-ionicons";

export default function Footer() {
  return (
    <footer>
      <div className="wave">
        <div className="custom-shape-divider-bottom-1652512758">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="section-footer">
        <div className="container flex">
          <div className="footer-logo-box">
            <p className="footer-temp-logo">Sahil Pingale</p>
          </div>
          <div className="footer-text-box">
            <div className="footer-grid">
              <div>
                <h3 className="heading-tertiary">Resources</h3>
                <div className="footer-link-box">
                  <a
                    className="footer-link"
                    href="https://github.com/Sahilpingale"
                  >
                    <div className="footer-icon">
                      <LogoGithub color={"#00000"} height="100%" width="100%" />
                    </div>
                    GitHub
                  </a>
                  <a className="footer-link" href="">
                    <div className="footer-icon">
                      <DocumentTextOutline
                        color={"#00000"}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    Resume
                  </a>
                </div>
              </div>
              <div>
                <h3 className="heading-tertiary">Find me on</h3>
                <div className="footer-link-box">
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/sahil-pingale-b076b9106/"
                  >
                    <div className="footer-icon">
                      <LogoLinkedin
                        color={"#00000"}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    LinkedIn
                  </a>
                  <a className="footer-link" href="">
                    <div className="footer-icon">
                      <LogoInstagram
                        color={"#00000"}
                        height="100%"
                        width="100%"
                      />
                    </div>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
