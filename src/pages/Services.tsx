import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Monitor, PaintBucket, ShoppingCart, Search, Wrench, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      id: 1,
      title: 'Custom Website Development',
      description: 'We build custom websites from scratch, tailored to your specific business needs and brand identity.',
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      features: [
        'Responsive design for all devices',
        'Modern UI/UX with intuitive navigation',
        'Optimized for speed and performance',
        'SEO-friendly structure and meta tags'
      ],
      timeline: '4-8 weeks',
      technologies: 'React, Next.js, Tailwind CSS, Node.js'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'We create beautiful, user-friendly interfaces that engage visitors and guide them toward your goals.',
      icon: <PaintBucket className="w-12 h-12 text-blue-600" />,
      features: [
        'Wireframing and prototyping',
        'Branding integration',
        'Conversion-focused design',
        'User research and testing'
      ],
      timeline: '2-4 weeks',
      technologies: 'Figma, Adobe XD, Sketch'
    },
    {
      id: 3,
      title: 'E-Commerce Solutions',
      description: 'We build online stores that are easy to manage, secure, and designed to increase sales and conversions.',
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      features: [
        'Product catalog management',
        'Secure payment integration',
        'Order and inventory tracking',
        'Customer account management'
      ],
      timeline: '6-10 weeks',
      technologies: 'Shopify, WooCommerce, Custom Solutions'
    },
    {
      id: 4,
      title: 'SEO Optimization',
      description: 'We improve your website\'s visibility in search results to drive more organic traffic and leads.',
      icon: <Search className="w-12 h-12 text-blue-600" />,
      features: [
        'Keyword research and strategy',
        'On-page optimization',
        'Technical SEO improvements',
        'Performance optimization'
      ],
      timeline: '2-4 weeks ongoing',
      technologies: 'Google Analytics, Search Console, SEO Tools'
    },
    {
      id: 5,
      title: 'Website Maintenance',
      description: 'We keep your website secure, up-to-date, and running smoothly with regular maintenance and support.',
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Content updates',
        'Bug fixes and troubleshooting'
      ],
      timeline: 'Monthly or quarterly',
      technologies: 'Monitoring Tools, Version Control'
    },
    {
      id: 6,
      title: 'Backend & API Development',
      description: 'We build robust, scalable backend systems and APIs to power your web applications.',
      icon: <Server className="w-12 h-12 text-blue-600" />,
      features: [
        'Custom API development',
        'Database design and optimization',
        'Authentication and authorization',
        'Cloud infrastructure setup'
      ],
      timeline: '4-8 weeks',
      technologies: 'Node.js, Express, .NET, MongoDB, PostgreSQL'
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and requirements through in-depth discussions.'
    },
    {
      id: 2,
      title: 'Planning',
      description: 'We create a detailed project plan, including timeline, deliverables, and technical specifications.'
    },
    {
      id: 3,
      title: 'Design',
      description: 'We design mockups and prototypes for your approval before moving into development.'
    },
    {
      id: 4,
      title: 'Development',
      description: 'We build your solution using modern technologies and best practices, with regular updates.'
    },
    {
      id: 5,
      title: 'Testing',
      description: 'We thoroughly test across devices and browsers to ensure everything works perfectly.'
    },
    {
      id: 6,
      title: 'Launch',
      description: 'We deploy your project and provide support during the launch phase to address any issues.'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container text-center">
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className="text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              End-to-end web development solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
      </section>

      {/* Services List */}
      <section ref={servicesRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive web services to help your business succeed online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                
                <h4 className="font-medium text-slate-800 mb-2">What's Included:</h4>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timeline:</span>
                    <span className="text-slate-800 font-medium">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Technologies:</span>
                    <span className="text-slate-800 font-medium">{service.technologies}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section bg-slate-50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle mx-auto">
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
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-6 relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                    {step.id}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 bg-blue-200 absolute top-10 bottom-0 left-1/2 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section bg-blue-600 text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help bring your vision to life with our services.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50 inline-flex items-center">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;