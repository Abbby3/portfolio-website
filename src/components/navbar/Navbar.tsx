import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const scrollWithOffset = (el: Element) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -160;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <HashLink className={styles.link} to={"/#home"} scroll={(el) => scrollWithOffset(el)}>
        Home
      </HashLink>
      <HashLink className={styles.link} to={"/#about"} scroll={(el) => scrollWithOffset(el)}>
        About
      </HashLink>
      <HashLink className={styles.link} to={"/#contact"} scroll={(el) => scrollWithOffset(el)}>
        Contact
      </HashLink>
      <HashLink className={styles.link} to={"/portfolio"} scroll={(el) => scrollWithOffset(el)}>
        Portfolio
      </HashLink>
    </nav>
  );
};

export default Navbar;
