import aboutMeImg from "../../../assests/about-me.png"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section className="section-about-me" id="section-about-me">
    <div className="container grid grid-col-2">
      <div className="about-me-img-box">
        <Image className="about-me-img" src={aboutMeImg} alt="about-me-image" />
      </div>
      <div className="about-me-text-box">
        <span className="subheading">What I do</span>
        <h2 className="heading-secondary">
          Your partner in digital transformation
        </h2>
        <p className="about-me-text">
          Hi, I&apos;m <span className="highlight">Sahil Pingale</span>, a web
          developer based in Pune, India. I&apos;m passionate about bringing both
          the technical and visual aspects of digital products to life. I&apos;m
          happiest when I&apos;m creating, learning, exploring and thinking about
          how to make things better.
        </p>
      </div>
    </div>
  </section>
  )
}