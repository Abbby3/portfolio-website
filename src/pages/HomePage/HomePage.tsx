import styles from "./HomePage.module.scss";
import img from "../../assets/img.png";
import Bashimg from "../../assets/Bash.svg";
import CSSimg from "../../assets/CSS.svg";
import Firebaseimg from "../../assets/Firebase.svg";
import Gitimg from "../../assets/Git.svg";
import Githubimg from "../../assets/Github.svg";
import HTMLimg from "../../assets/HTML.svg";
import Javaimg from "../../assets/Java.svg";
import JavaScriptimg from "../../assets/JavaScript.svg";
import Jestimg from "../../assets/Jest.svg";
import Mavenimg from "../../assets/Maven.svg";
import MongoDBimg from "../../assets/MongoDB.svg";
import MySQLimg from "../../assets/MySQL.svg";
import NestJSimg from "../../assets/NestJS.svg";
import NodeJSimg from "../../assets/NodeJS.svg";
import npmimg from "../../assets/Npm.svg";
import pnpmimg from "../../assets/Pnpm.svg";
import Postmanimg from "../../assets/Postman.svg";
import Reactimg from "../../assets/React.svg";
import Regeximg from "../../assets/Regex.svg";
import Sassimg from "../../assets/Sass.svg";
import Springimg from "../../assets/Spring.svg";
import TypeScriptimg from "../../assets/TypeScript.svg";
import Viteimg from "../../assets/Vite.svg";
import Vitestimg from "../../assets/Vitest.svg";
import VSCodeimg from "../../assets/VSCode.svg";
import resume from "../../assets/resume.pdf"

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.home} id="home">
        <div className={styles.text}>
          <h1>Hi, I'm Abigail</h1>
          <h2>Melbourne-based full stack developer</h2>
        </div>
        <img src={img} className={styles.img}></img>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.me}>
          <h1>About Me</h1>
          <p>
            Hi, I'm Abigail, a full stack web developer based in Melbourne with a background in
            healthcare administration. I've always dreamt of a career in tech, and now, thanks to{" "}
            <a href="https://nology.io">nology</a>, I've learned the skills to begin my journey. In
            my spare time, you'll usually find be trying to learn 3D modelling, or being bossed
            around by my cat, Diablo.
          </p>
        </div>
        <div className={styles.tools}>
          <h3>Some of the tools and languages I've used!</h3>
          <div className={styles.images}>
            <img src={Bashimg} alt="Bash" title="Bash" className={styles.icon} />
            <img src={CSSimg} alt="CSS" title="CSS" className={styles.icon} />
            <img src={Firebaseimg} alt="Firebase" title="Firebase" className={styles.icon} />
            <img src={Gitimg} alt="Git" title="Git" className={styles.icon} />
            <img src={Githubimg} alt="GitHub" title="GitHub" className={styles.icon} />
            <img src={HTMLimg} alt="HTML" title="HTML" className={styles.icon} />
            <img src={Javaimg} alt="Java" title="Java" className={styles.icon} />
            <img src={JavaScriptimg} alt="JavaScript" title="JavaScript" className={styles.icon} />
            <img src={Jestimg} alt="Jest" title="Jest" className={styles.icon} />
            <img src={Mavenimg} alt="Maven" title="Maven" className={styles.icon} />
            <img src={MongoDBimg} alt="MongoDB" title="MongoDB" className={styles.icon} />
            <img src={MySQLimg} alt="MySQL" title="MySQL" className={styles.icon} />
            <img src={NestJSimg} alt="NestJS" title="NestJS" className={styles.icon} />
            <img src={NodeJSimg} alt="NodeJS" title="NodeJS" className={styles.icon} />
            <img src={npmimg} alt="npm" title="npm" className={styles.icon} />
            <img src={pnpmimg} alt="pnpm" title="pnpm" className={styles.icon} />
            <img src={Postmanimg} alt="Postman" title="Postman" className={styles.icon} />
            <img src={Reactimg} alt="React" title="React" className={styles.icon} />
            <img src={Regeximg} alt="Regex" title="Regex" className={styles.icon} />
            <img src={Sassimg} alt="Sass" title="Sass" className={styles.icon} />
            <img src={Springimg} alt="Spring" title="Spring" className={styles.icon} />
            <img src={TypeScriptimg} alt="TypeScript" title="TypeScript" className={styles.icon} />
            <img src={Viteimg} alt="Vite" title="Vite" className={styles.icon} />
            <img src={Vitestimg} alt="Vitest" title="Vitest" className={styles.icon} />
            <img src={VSCodeimg} alt="VSCode" title="VSCode" className={styles.icon} />
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <h1>Contact Me</h1>
        <a href="mailto:ihfmx3@outlook.com">
          ihfmx3@outlook.com
        </a>
        <a href={resume} target="_blank">
          Resume
        </a>
        <a href="https://github.com/Abbby3" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/abigail3" target="_blank">
          LinkedIn
        </a>
      </section>
    </div>
  );
};

export default HomePage;
