import Portfolio from "../../components/portfolio/Portfolio";
import styles from "./PortfolioPage.module.scss";

const PortfolioPage = () => {
  return (
    <div className={styles.PortfolioPage}>
      <h1 className={styles.title}>Portfolio</h1>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
