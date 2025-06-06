import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    company: string;
    content: string;
    image: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.quote}>
        <svg className={styles.quoteIcon} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className={styles.content}>
        "{testimonial.content}"
      </p>
      
      <div className={styles.author}>
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className={styles.avatar}
        />
        <div className={styles.authorInfo}>
          <h4 className={styles.name}>{testimonial.name}</h4>
          <p className={styles.company}>{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;