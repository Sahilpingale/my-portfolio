import "../../globals.css";
import styles from "./navbar.module.scss"
export default function Navbar() {
  return (
    <header className={styles.header}>
      <a href="index.html">
        <p className={styles.temp_logo}>Sahil Pingale</p>
      </a>
      <button className={styles.btn_mobile}>
        {/* <ion_icon className="icon_mobile_nav" name="menu_outline"></ion_icon> */}
      </button>
      <nav className={styles.main_nav}>
        <button className={styles.btn_mobile_nav}>
          {/* <ion_icon className={styles.icon_mobile_nav" name="menu_outline"></ion_icon> 
        <ion_icon className="icon_mobile_nav" name="close_outline"></ion_icon> */}
        </button>
        <ul className={styles.main_nav_list}>
          <ul>
            <a className={styles.main_nav_link}>
              About Me
            </a>
          </ul>
          <ul>
            <a  className={styles.main_nav_link}>
              Skills
            </a>
          </ul>
          <ul>
            <a  className={styles.main_nav_link}>
              How I Do It
            </a>
          </ul>
          <ul>
            <a className={`${styles.nav_cta} ${styles.main_nav_link}`}>
              Portfolio
            </a>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
