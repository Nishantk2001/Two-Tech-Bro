import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    link: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{service.icon}</div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <Link to={service.link} className={styles.link}>
        Learn More
        <ArrowRight className={styles.linkIcon} />
      </Link>
    </div>
  );
};

export default ServiceCard;