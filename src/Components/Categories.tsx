import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";
import { IconType } from "react-icons";
import styles from "../Styles/Categories.module.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  type Category = {
    name: string;
    icon: IconType;
    color: string;
  };
  const categories: Category[] = [
    { name: "cleaning", icon: FaBucket, color: "#b12fde" },
    { name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
    { name: "painting", icon: FaBrush, color: "#e23e40" },
    { name: "shifting", icon: FaTruck, color: "#059e96" },
    { name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
    { name: "electric", icon: FaLightbulb, color: "#1f71c5" },
  ];
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <Link
          to={`/search/${category.name}`}
          key={category.name}
          className={styles.individualIconContainer}
          style={{ "--category-color": category.color } as React.CSSProperties}
        >
          <category.icon className={styles.icon} />
          <span className={styles.iconName}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
