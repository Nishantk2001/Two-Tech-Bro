import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ArrowUpRight, Globe, Code, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Portfolio = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with customer accounts, product management, and secure checkout.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'e-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Analytics platform with real-time data visualization and reporting tools.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web-app',
      technologies: ['React', 'TypeScript', 'Node.js', 'D3.js'],
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'Cross-platform application for iOS and Android with offline functionality.',
      image: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Corporate Website',
      description: 'Brand-focused website with custom animations and content management system.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'website',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Listings',
      description: 'Property management platform with search, filtering, and interactive maps.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web-app',
      technologies: ['React', 'PostgreSQL', 'Google Maps API'],
      link: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Ordering System',
      description: 'Online ordering and reservation system with kitchen management interface.',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'e-commerce',
      technologies: ['.NET Core', 'SQL Server', 'React'],
      link: '#',
      featured: false
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'e-commerce', label: 'E-Commerce' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  // Filtered projects
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-4xl font-bold md:text-5xl">Our Portfolio</h1>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Showcasing our work across various industries and technologies.
            </p>
          </motion.div>
        </div>
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <a href={project.link} className="text-white inline-flex items-center font-medium hover:text-blue-300 transition-colors">
                      View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold uppercase py-1 px-2 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-slate-100 text-slate-600 text-xs font-medium py-1 px-2 rounded">
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
      <section className="section bg-slate-50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Case Study</h2>
            <p className="section-subtitle mx-auto">
              A deeper look into one of our most successful projects.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm p-6 md:p-0 max-w-5xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="E-Commerce Platform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">E-Commerce Platform Redesign</h3>
                <div className="mb-6">
                  <div className="flex items-center text-slate-600 mb-2">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Client: Fashion Retailer</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Code className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Tech: React, Node.js, MongoDB, Stripe</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                  <p className="text-slate-600">
                    Our client needed to modernize their outdated e-commerce platform which was slow, 
                    difficult to manage, and not mobile-friendly. Sales were declining as customers 
                    abandoned their carts due to the poor user experience.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                  <p className="text-slate-600">
                    We rebuilt the entire platform from the ground up with a focus on speed, usability, 
                    and conversion optimization. The new system included a customer account area, 
                    wishlist functionality, and an intuitive checkout process.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">The Results</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>43% increase in mobile conversions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>27% reduction in cart abandonment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>3x faster page load times</span>
                    </li>
                  </ul>
                </div>
                
                <a href="#" className="btn btn-primary">
                  Read Full Case Study
                </a>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to create your own success story?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help your business achieve its goals with a custom web solution.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50 inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;