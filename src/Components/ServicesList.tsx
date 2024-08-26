import ServiceCard from "./ServiceCard";
import styles from "../Styles/Services.module.scss";
import { Service } from "../types/serviceType";
interface ServicesProps {
  serviceData: Service[];
  layout?: "main" | "categories";
}
const ServicesList: React.FC<ServicesProps> = ({
  serviceData,
  layout = "main",
}) => {
  return (
    <div className={styles.parentServicesContainer}>
      <div
        className={`${styles.servicesContainer} ${
          layout === "categories"
            ? styles.categoriesVariant
            : styles.mainVariant
        }`}
      >
        {serviceData.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
