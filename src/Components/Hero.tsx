import Categories from "./Categories";

import styles from "../Styles/Hero.module.scss";
import InputTemplate from "./InputTemplate";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.heroTitle}>
        Find Home <span>Service/Repair</span> <br /> Near You
      </p>

      <div className={styles.descriptionAndInput}>
        <p className={styles.description}>
          Explore Best Home Service & Repair near you
        </p>
        <InputTemplate placeholder="Search" />
      </div>

      <Categories />
    </div>
  );
};

export default Hero;
