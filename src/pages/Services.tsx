import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Monitor,
  PaintBucket,
  ShoppingCart,
  Search,
  Wrench,
  Server,
  LayoutDashboard,
  Megaphone,
  Brush,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./services.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      description:
        "We build custom websites from scratch, tailored to your specific business needs and brand identity.",
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      features: [
        "Responsive design for all devices",
        "Modern UI/UX with intuitive navigation",
        "Optimized for speed and performance",
        "SEO-friendly structure and meta tags",
      ],
      timeline: "4-8 weeks",
      technologies: "React, Next.js, Tailwind CSS, Node.js",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "We create beautiful, user-friendly interfaces that engage visitors and guide them toward your goals.",
      icon: <PaintBucket className="w-12 h-12 text-blue-600" />,
      features: [
        "Wireframing and prototyping",
        "Branding integration",
        "Conversion-focused design",
        "User research and testing",
      ],
      timeline: "2-4 weeks",
      technologies: "Figma, Adobe XD, Sketch",
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description:
        "We build online stores that are easy to manage, secure, and designed to increase sales and conversions.",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      features: [
        "Product catalog management",
        "Secure payment integration",
        "Order and inventory tracking",
        "Customer account management",
      ],
      timeline: "6-10 weeks",
      technologies: "Shopify, WooCommerce, Custom Solutions",
    },
    {
      id: 4,
      title: "SEO Optimization",
      description:
        "We improve your website's visibility in search results to drive more organic traffic and leads.",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      features: [
        "Keyword research and strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Performance optimization",
      ],
      timeline: "2-4 weeks ongoing",
      technologies: "Google Analytics, Search Console, SEO Tools",
    },
    {
      id: 5,
      title: "Website Maintenance",
      description:
        "We keep your website secure, up-to-date, and running smoothly with regular maintenance and support.",
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Content updates",
        "Bug fixes and troubleshooting",
      ],
      timeline: "Monthly or quarterly",
      technologies: "Monitoring Tools, Version Control",
    },
    {
      id: 6,
      title: "Backend & API Development",
      description:
        "We build robust, scalable backend systems and APIs to power your web applications.",
      icon: <Server className="w-12 h-12 text-blue-600" />,
      features: [
        "Custom API development",
        "Database design and optimization",
        "Authentication and authorization",
        "Cloud infrastructure setup",
      ],
      timeline: "4-8 weeks",
      technologies: "Node.js, Express, .NET, MongoDB, PostgreSQL",
    },
    {
      id: 7,
      title: "Low Code / No Code Solutions",
      description:
        "We create fast, scalable websites using low-code or no-code platforms, perfect for small businesses and MVPs.",
      icon: <LayoutDashboard className="w-12 h-12 text-blue-600" />,
      features: [
        "Quick setup and deployment",
        "Drag-and-drop editing for clients",
        "Third-party plugin integration",
        "Scalable design for growing needs",
      ],
      timeline: "1-2 weeks",
      technologies: "Wix, Webflow, Canva, Notion Sites",
    },
    {
      id: 8,
      title: "Landing Pages & Ads",
      description:
        "We design high-converting landing pages and digital ads tailored for marketing campaigns and lead generation.",
      icon: <Megaphone className="w-12 h-12 text-blue-600" />,
      features: [
        "Conversion-optimized layout",
        "A/B testing for performance",
        "Integrated lead capture forms",
        "Ad creative design for Google & Meta",
      ],
      timeline: "1-3 weeks",
      technologies: "Next.js, Google Ads, Meta Ads, Figma",
    },
    {
      id: 9,
      title: "Graphic Design",
      description:
        "We deliver stunning visual designs that align with your brand and leave a lasting impression.",
      icon: <Brush className="w-12 h-12 text-blue-600" />,
      features: [
        "Logo and brand identity design",
        "Social media creatives",
        "Marketing banners and brochures",
        "Custom illustrations and icons",
      ],
      timeline: "1-3 weeks",
      technologies: "Adobe Photoshop, Illustrator, Canva, Figma",
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and requirements through in-depth discussions.",
    },
    {
      id: 2,
      title: "Planning",
      description:
        "We create a detailed project plan, including timeline, deliverables, and technical specifications.",
    },
    {
      id: 3,
      title: "Design",
      description:
        "We design mockups and prototypes for your approval before moving into development.",
    },
    {
      id: 4,
      title: "Development",
      description:
        "We build your solution using modern technologies and best practices, with regular updates.",
    },
    {
      id: 5,
      title: "Testing",
      description:
        "We thoroughly test across devices and browsers to ensure everything works perfectly.",
    },
    {
      id: 6,
      title: "Launch",
      description:
        "We deploy your project and provide support during the launch phase to address any issues.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.container}>
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className={styles.pageTitle}>Our Services</h1>
            <p className={styles.pageSubtitle}>
              End-to-end web development solutions tailored to your business
              needs.
            </p>
          </motion.div>
        </div>
        {/* Background decoration */}
        {/* <div className={styles.headerDecoration}></div> */}
      </section>

      {/* Services List */}
      <section ref={servicesRef} className={`${styles.section} bg-white`}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className={styles.sectionTitle}>What We Offer</h2>
            <p className={`${styles.sectionSubtitle} mx-auto`}>
              Comprehensive web services to help your business succeed online.
            </p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={styles.serviceCard}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <h4 className={`font-medium ${styles.textSlate800} mb-2`}>
                  What's Included:
                </h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.featureBullet}>•</span>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.serviceMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Timeline:</span>
                    <span className={styles.metaValue}>{service.timeline}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Technologies:</span>
                    <span className={styles.metaValue}>
                      {service.technologies}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className={`${styles.section} ${styles.processSection}`}
      >
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <p className={`${styles.sectionSubtitle} mx-auto`}>
              How we work with you to bring your vision to life.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial="hidden"
                animate={processInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`${styles.processStep} ${
                  index === processSteps.length - 1
                    ? styles.processStepLast
                    : ""
                }`}
              >
                <div className={styles.stepNumberContainer}>
                  <div className={styles.stepNumber}>{step.id}</div>
                  {index < processSteps.length - 1 && (
                    <div className={styles.stepConnector}></div>
                  )}
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className={styles.ctaTitle}>Ready to start your project?</h2>
            <p className={styles.ctaText}>
              Let's discuss how we can help bring your vision to life with our
              services.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Get a Free Quote
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
