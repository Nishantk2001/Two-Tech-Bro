import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/" className={styles.button}>
            <ArrowLeft className={styles.icon} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
