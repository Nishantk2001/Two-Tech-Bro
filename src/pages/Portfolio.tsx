import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ArrowUpRight, Globe, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Portfolio.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with customer accounts, product management, and secure checkout.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "e-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description:
        "Analytics platform with real-time data visualization and reporting tools.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "web-app",
      technologies: ["React", "TypeScript", "Node.js", "D3.js"],
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile App",
      description:
        "Cross-platform application for iOS and Android with offline functionality.",
      image:
        "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Corporate Website",
      description:
        "Brand-focused website with custom animations and content management system.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "website",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Real Estate Listings",
      description:
        "Property management platform with search, filtering, and interactive maps.",
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "web-app",
      technologies: ["React", "PostgreSQL", "Google Maps API"],
      link: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      description:
        "Online ordering and reservation system with kitchen management interface.",
      image:
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "e-commerce",
      technologies: [".NET Core", "SQL Server", "React"],
      link: "#",
      featured: false,
    },
  ];

  // Filter categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "website", label: "Websites" },
    { id: "e-commerce", label: "E-Commerce" },
    { id: "web-app", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  // Filtered projects
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className={styles.pageTitle}> Our Portfolio</h1>
            <p className={styles.pageSubtitle}>
              Showcasing our work across various industries and technologies.
            </p>
          </motion.div>
        </div>
        {/* <div className={styles.pageHeaderDecoration}></div> */}
      </section>

      {/* Portfolio Filters */}
      <section className={styles.filtersContainer}>
        <div className={styles.container}>
          <div className={styles.flex}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`${styles.filterButton} ${
                  activeFilter === category.id
                    ? styles.filterButtonActive
                    : styles.filterButtonInactive
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        ref={projectsRef}
        className={styles.section}
        style={{ backgroundColor: "white" }}
      >
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={styles.projectCard}
              >
                <div className={styles.projectImageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}>
                    <a href={project.link} className={styles.projectLink}>
                      View Project <ArrowUpRight className={styles.icon} />
                    </a>
                  </div>
                  {project.featured && (
                    <div className={styles.featuredBadge}>Featured</div>
                  )}
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section
        className={styles.section}
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.textCenter}
          >
            <h2 className={styles.sectionTitle}>Featured Case Study</h2>
            <p className={styles.sectionSubtitle}>
              A deeper look into one of our most successful projects.
            </p>
          </motion.div>

          <div className={styles.caseStudy}>
            <div className={styles.caseStudyImage}>
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="E-Commerce Platform"
              />
            </div>
            <div className={styles.caseStudyContent}>
              <h3 className={styles.caseStudyTitle}>
                E-Commerce Platform Redesign
              </h3>
              <div className={styles.caseStudyMeta}>
                <div className={styles.metaItem}>
                  <Globe className={styles.metaIcon} />
                  <span>Client: Fashion Retailer</span>
                </div>
                <div className={styles.metaItem}>
                  <Code className={styles.metaIcon} />
                  <span>Tech: React, Node.js, MongoDB, Stripe</span>
                </div>
              </div>

              <div className={styles.mb6}>
                <h4 className={styles.fontSemibold}>The Challenge</h4>
                <p className={styles.textSlate600}>
                  Our client needed to modernize their outdated e-commerce
                  platform...
                </p>
              </div>

              <div className={styles.mb6}>
                <h4 className={styles.fontSemibold}>Our Solution</h4>
                <p className={styles.textSlate600}>
                  We rebuilt the entire platform from the ground up...
                </p>
              </div>

              <div className={styles.mb6}>
                <h4 className={styles.fontSemibold}>The Results</h4>
                <ul className={styles.resultList}>
                  <li className={styles.resultItem}>
                    <span className={styles.resultBullet}>•</span>
                    <span>43% increase in mobile conversions</span>
                  </li>
                  {/* Other result items */}
                </ul>
              </div>

              <a href="#" className={styles.ctaButton}>
                Read Full Case Study
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`${styles.section} ${styles.ctaSection}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>
              Ready to create your own success story?
            </h2>
            <p className={styles.ctaText}>
              Let's discuss how we can help your business achieve its goals with
              a custom web solution.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Start Your Project
              <ArrowRight className={styles.ctaButtonIcon} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
