import heroImg from "../../../assests/hero-test-3.png";
import Image from "next/image";
import "../../mediaQueryStyles.css"

export default function Header() {
  return (
    <section className="section-hero" id="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Unleash your brand&apos;s potential</h1>
          <p className="hero-description">
            Get web solutions that add value to your business
          </p>
          <a className="btn hero-btn" href="#section-cta">
            Contact Me
          </a>
        </div>
        <div className="hero-img-box">
          <Image className="heroImg" src={heroImg} alt="hero image" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1652342433">
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
    </section>
  );
};
