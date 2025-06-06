import { Link } from 'react-router-dom';
import { Code2, Linkedin, Github, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and About */}
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logo}>
              <Code2 className="text-blue-400" size={24} />
              <span>TwoTechBros</span>
            </Link>
            <p className={styles.description}>
              We're a duo of passionate full-stack developers creating modern, scalable websites that convert.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:hello@devduo.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.linkItem}>Home</Link></li>
              <li><Link to="/services" className={styles.linkItem}>Services</Link></li>
              <li><Link to="/portfolio" className={styles.linkItem}>Portfolio</Link></li>
              <li><Link to="/about" className={styles.linkItem}>About Us</Link></li>
              <li><Link to="/contact" className={styles.linkItem}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><Link to="/services" className={styles.linkItem}>Web Development</Link></li>
              <li><Link to="/services" className={styles.linkItem}>UI/UX Design</Link></li>
              <li><Link to="/services" className={styles.linkItem}>E-Commerce</Link></li>
              <li><Link to="/services" className={styles.linkItem}>SEO Optimization</Link></li>
              <li><Link to="/services" className={styles.linkItem}>Website Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href="mailto:twotechbro@gmail.com" className={styles.contactLink}></a>twotechbro@gmail.com
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <a href="tel:+1234567890" className={styles.contactLink}>+91 94640 32520</a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} TwoTechBros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;