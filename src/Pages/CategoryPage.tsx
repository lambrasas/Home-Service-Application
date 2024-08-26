import styles from "../Styles/Categories.module.scss";
import { useLocation } from "react-router-dom";
import ServicesList from "../Components/ServicesList";
import { Category } from "../types/categoryType";
import { Service } from "../types/serviceType";
import Categories from "../Components/Categories";

interface CategoryPageProps {
  categories: Category[];
  services: Service[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  categories,
  services,
}) => {
  const location = useLocation().pathname;
  const currentCategory = location.split("/")[2];
  const filteredServices = services.filter(
    (service) =>
      service.category.toLowerCase() === currentCategory.toLowerCase()
  );
  return (
    <div className={styles.categoriesServicesContainer}>
      <div className={styles.categoriesAndText}>
        <h2>Categories</h2>
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          layout="categories"
        />
      </div>

      <div className={styles.servicesContainer}>
        <h2>
          {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        </h2>
        <ServicesList layout="categories" serviceData={filteredServices} />
      </div>
    </div>
  );
};

export default CategoryPage;
