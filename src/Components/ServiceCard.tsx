import { Service } from "./serviceData";
import styles from "../Styles/ServiceCard.module.scss";
interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardPicture} src={service.picture} alt="picture" />
      <div>
        <div className={styles.textContainer}>
          <span className={styles.cardCategory}>{service.category}</span>
          <p className={styles.serviceName}>{service.serviceName}</p>
          <p className={styles.nameSurname}>
            {service.serviceProvider.name} {service.serviceProvider.surname}
          </p>
          <p className={styles.address}>{service.address}</p>
          <button className={styles.bookButton}>Book now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
