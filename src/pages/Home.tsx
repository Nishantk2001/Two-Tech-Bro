import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Monitor,
  PaintBucket,
  ShoppingCart,
  Search,
  CheckCircle,
} from "lucide-react";
import ServiceCard from "../components/services/ServiceCard";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import ContactForm from "../components/contact/ContactForm";
import styles from "./Home.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Service cards data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites built with modern frameworks and clean code.",
      icon: <Monitor className="w-10 h-10 text-blue-600" />,
      link: "/services",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs focused on user experience.",
      icon: <PaintBucket className="w-10 h-10 text-blue-600" />,
      link: "/services",
    },
    {
      id: 3,
      title: "E-Commerce",
      description: "Scalable online stores that drive sales and growth.",
      icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
      link: "/services",
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Improve visibility and organic traffic to your website.",
      icon: <Search className="w-10 h-10 text-blue-600" />,
      link: "/services",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      content:
        "Working with DevDuo was a game-changer for our company. They delivered a website that exceeded our expectations and has significantly improved our conversion rates.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 2,
      name: "Mark Williams",
      company: "Creative Agency",
      content:
        "The team at DevDuo is incredibly talented and professional. They understood our vision perfectly and created a website that perfectly represents our brand.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 3,
      name: "Lisa Chen",
      company: "Boutique Shop",
      content:
        "Our e-commerce site has never looked better. DevDuo created a seamless shopping experience that our customers love. Sales have increased by 40% since the redesign!",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.heroContent}
          >
            <h1 className={styles.heroTitle}>
              We Build Modern, Scalable Websites That{" "}
              <span className={styles.heroHighlight}>Convert</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Freelance developer duo specializing in full-stack web
              development, delivering beautiful, high-performance websites for
              businesses of all sizes.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/portfolio" className="btn btn-primary">
                See Our Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get a Quote
              </Link>
            </div>
            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <CheckCircle className={styles.heroFeatureIcon} />
                <span>10+ Projects Delivered</span>
              </div>
              <div className={styles.heroFeature}>
                <CheckCircle className={styles.heroFeatureIcon} />
                <span>100% Satisfaction</span>
              </div>
              <div className={styles.heroFeature}>
                <CheckCircle className={styles.heroFeatureIcon} />
                <span>Fast & Affordable</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        {/* <div className={styles.heroDecoration}></div> */}
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className={`${styles.section} ${styles.sectionWhite}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>
              We offer end-to-end web development services to bring your vision
              to life.
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridMd2} ${styles.gridLg4}`}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionFooter}
          >
            <Link to="/services" className={styles.viewAllLink}>
              View All Services
              <ArrowRight className={styles.viewAllIcon} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyUsRef}
        className={`${styles.section} ${styles.sectionBlue}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <p className={styles.sectionSubtitle}>
              We combine technical expertise with creative problem-solving to
              deliver exceptional results.
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridMd3}`}>
            <motion.div
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className={styles.whyUsCard}
            >
              <div className={styles.whyUsIcon}>
                <svg
                  className={styles.whyUsIconSvg}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className={styles.whyUsTitle}>Fast Performance</h3>
              <p className={styles.whyUsDescription}>
                We build websites optimized for speed and core web vitals,
                ensuring a smooth user experience.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className={styles.whyUsCard}
            >
              <div className={styles.whyUsIcon}>
                <svg
                  className={styles.whyUsIconSvg}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className={styles.whyUsTitle}>Creative Solutions</h3>
              <p className={styles.whyUsDescription}>
                We think outside the box to solve complex problems and create
                unique user experiences.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className={styles.whyUsCard}
            >
              <div className={styles.whyUsIcon}>
                <svg
                  className={styles.whyUsIconSvg}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className={styles.whyUsTitle}>Clean Code</h3>
              <p className={styles.whyUsDescription}>
                We write maintainable, well-documented code that's easy to scale
                and update.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section
        ref={portfolioRef}
        className={`${styles.section} ${styles.sectionWhite}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>Portfolio Highlights</h2>
            <p className={styles.sectionSubtitle}>
              Check out some of our recent projects that showcase our expertise.
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridMd3}`}>
            <motion.div
              initial="hidden"
              animate={portfolioInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className={styles.portfolioItem}
            >
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="E-commerce Project"
                className={styles.portfolioImage}
              />
              <div className={styles.portfolioOverlay}>
                <h3 className={styles.portfolioTitle}>E-Commerce Platform</h3>
                <p className={styles.portfolioDescription}>
                  Modern online store built with React and Node.js
                </p>
                <Link to="/portfolio" className={styles.portfolioLink}>
                  View Project{" "}
                  <ArrowRight className={styles.portfolioLinkIcon} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={portfolioInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className={styles.portfolioItem}
            >
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="SaaS Dashboard"
                className={styles.portfolioImage}
              />
              <div className={styles.portfolioOverlay}>
                <h3 className={styles.portfolioTitle}>SaaS Dashboard</h3>
                <p className={styles.portfolioDescription}>
                  Analytics platform with real-time data visualization
                </p>
                <Link to="/portfolio" className={styles.portfolioLink}>
                  View Project{" "}
                  <ArrowRight className={styles.portfolioLinkIcon} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={portfolioInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className={styles.portfolioItem}
            >
              <img
                src="https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Mobile App"
                className={styles.portfolioImage}
              />
              <div className={styles.portfolioOverlay}>
                <h3 className={styles.portfolioTitle}>Mobile App</h3>
                <p className={styles.portfolioDescription}>
                  Cross-platform application built with React Native
                </p>
                <Link to="/portfolio" className={styles.portfolioLink}>
                  View Project{" "}
                  <ArrowRight className={styles.portfolioLinkIcon} />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionFooter}
          >
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className={`${styles.section} ${styles.sectionSlate}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Don't just take our word for it - hear from some of our satisfied
              clients.
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridMd3}`}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        ref={contactRef}
        className={`${styles.section} ${styles.sectionWhite}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>
              Let's Talk About Your Project
            </h2>
            <p className={styles.sectionSubtitle}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.contactFormContainer}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
