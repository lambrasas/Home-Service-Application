import styles from "../Styles/Categories.module.scss";
import { Link } from "react-router-dom";
import iconMapper from "./utils/iconMapper";
import { Category } from "../types/categoryType";
interface CategoriesProps {
  categories: Category[];
  currentCategory?: string;
  layout?: "main" | "categories";
}
const Categories: React.FC<CategoriesProps> = ({
  categories,
  currentCategory,
  layout = "main",
}) => {
  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }
  return (
    <div
      className={`${styles.categoriesContainer} ${
        layout === "categories" ? styles.categoriesLayout : styles.mainLayout
      }`}
    >
      {categories.map((category) => {
        const IconComponent = iconMapper[category.icon];
        const isSelected =
          category.name.toLowerCase() === currentCategory?.toLowerCase();
        return (
          <Link
            to={`/search/${category.name}`}
            key={category.name}
            className={`${styles.individualIconContainer} ${
              layout === "categories"
                ? styles.categoriesPageCard
                : styles.mainCard
            } ${isSelected ? styles.highlighted : ""}`}
            style={
              { "--category-color": category.color } as React.CSSProperties
            }
          >
            {IconComponent && <IconComponent className={styles.icon} />}
            <span className={styles.iconName}>{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
