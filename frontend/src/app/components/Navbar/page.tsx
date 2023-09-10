import "../../globals.css";
export default function Navbar() {
  return (
    <header className="header">
      <a href="index.html">
        <p className="temp-logo">Sahil Pingale</p>
      </a>
      <button className="btn-mobile">
        {/* <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon> */}
      </button>
      <nav className="main-nav">
        <button className="btn-mobile-nav">
          {/* <ion-icon className={icon-mobile-nav" name="menu-outline"></ion-icon> 
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon> */}
        </button>
        <ul className="main-nav-list">
          <ul>
            <a className="main-nav-link">
              About Me
            </a>
          </ul>
          <ul>
            <a  className="main-nav-link">
              Skills
            </a>
          </ul>
          <ul>
            <a  className="main-nav-link">
              How I Do It
            </a>
          </ul>
          <ul>
            <a className="nav-cta main-nav-link">
              Portfolio
            </a>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
