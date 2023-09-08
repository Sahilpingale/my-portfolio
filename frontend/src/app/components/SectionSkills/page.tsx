import Image from "next/image"
import htmlImg from "../../../assests/TechStackLarge/html5.svg"
import cssImg from "../../../assests/TechStackLarge/css3.svg"
import javascriptImg from "../../../assests/TechStackLarge/javascript.svg"
import reactImg from "../../../assests/TechStackLarge/react.svg"
import reduxImg from "../../../assests/TechStackLarge/redux.svg"
import bootstrapImg from "../../../assests/TechStackLarge/bootstrap.svg"
import nodeImg from "../../../assests/TechStackLarge/nodejs.svg"
import mongodbImg from "../../../assests/TechStackLarge/mongodb.svg"
import githubImg from "../../../assests/TechStackLarge/github.svg"
import mysqlImg from "../../../assests/TechStackLarge/mysql-svgrepo-com.svg"
import restImg from "../../../assests/TechStackLarge/restApi.svg"
import postmanImg from "../../../assests/TechStackLarge/postman.svg"
import vscodeImg from "../../../assests/TechStackLarge/vscode.svg"
import figmaImg from "../../../assests/TechStackLarge/figma.svg"

export default function Skills(){
  return (
    <section className="section-skills" id="section-skills">
    <div className="container">
      <span className="subheading">Skills & Tools</span>
      <h2 className="heading-secondary">My Toolbox & Things I can do</h2>
      <p className="skills-subheading">
        The skills, tools and technologies I use to bring your products to
        life
      </p>
    </div>
    <div className="container skills-grid">
      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={htmlImg}/>
        <p className="portfolio-title">HTML5</p>
      </div>
      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={cssImg}/>
        <p className="portfolio-title">CSS3</p>
      </div>
      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={javascriptImg} />
        <p className="portfolio-title">JavaScript ES6</p>
      </div>
      
      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={reactImg}/>
        <p className="portfolio-title">React</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={reduxImg}/>
        <p className="portfolio-title">Redux</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={bootstrapImg}/>
        <p className="portfolio-title">Bootstrap 5</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={nodeImg}/>
        <p className="portfolio-title">Node</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={mongodbImg}/>
        <p className="portfolio-title">MongoDb</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={githubImg}/>
        <p className="portfolio-title">GitHub</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={mysqlImg} />
        <p className="portfolio-title">MYSQL</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={restImg} />
        <p className="portfolio-title">REST APIs</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img"  src={postmanImg}/>
        <p className="portfolio-title">Postman</p>
      </div>

      <div className="skill-item">
        <Image alt="" className="skill-item-img"  src={vscodeImg}/>
        <p className="portfolio-title">VScode</p>
      </div>
      <div className="skill-item">
        <Image alt="" className="skill-item-img" src={figmaImg} />
        <p className="portfolio-title">Figma</p>
      </div>
    </div>
  </section>
  )
}