import styles from "../Styles/Categories.module.scss";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import { serviceData } from "../Components/serviceData";
import { useLocation } from "react-router-dom";
import { categories } from "../Components/categoryData";
const CategoryPage = () => {
  const location = useLocation().pathname;
  const currentCategory = location.split("/")[2];
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

      <Services
        serviceData={serviceData.filter(
          (service) => service.category == currentCategory
        )}
      />
    </div>
  );
};

export default CategoryPage;
