import ServiceCard from "./ServiceCard";
import styles from "../Styles/Services.module.scss";
import { Service } from "../Components/serviceData";
interface ServicesProps {
  serviceData: Service[];
}
const Services: React.FC<ServicesProps> = ({ serviceData }) => {
  return (
    <div className={styles.parentServicesContainer}>
      <div className={styles.servicesContainer}>
        {serviceData.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
