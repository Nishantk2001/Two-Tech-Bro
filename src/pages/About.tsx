import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stackRef, stackInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Tech stack logos
  const techStack = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
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
            <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              We're not an agency — we're two passionate developers who love building things that work.
            </p>
          </motion.div>
        </div>
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2"></div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle mx-auto">
              A duo of full-stack developers with a passion for creating beautiful, functional websites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Alex Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-blue-600 font-medium mb-4">Frontend Developer & Designer</p>
                <p className="text-slate-600 mb-4">
                  With over 5 years of experience in frontend development, Alex specializes in creating responsive, 
                  accessible, and beautiful user interfaces using React, TypeScript, and modern CSS frameworks.
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Backend Developer & DevOps</p>
                <p className="text-slate-600 mb-4">
                  Sarah is a backend specialist with expertise in Node.js, .NET, and database architecture. 
                  She ensures our applications are secure, scalable, and optimized for performance.
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.58 1.87-.92 2.98-.92 1.04 0 1.99.29 2.81.77l-1.39 1.39c-.43-.18-.9-.28-1.42-.28-1.79 0-3.24 1.29-3.55 2.99l-1.93-.38c.37-1.54 1.34-2.83 2.5-3.57zm3.99 10.85c-3.87 0-7-3.13-7-7s3.13-7 7-7c.49 0 .97.05 1.43.15l-1.43 1.43c-3.39.49-5.75 3.53-5.04 7.01l4.13-4.13 1.58 1.58-6.47 6.47c.68.27 1.42.49 2.21.49 1.71 0 3.26-.66 4.41-1.74l-1.47-1.47c-.73.82-1.79 1.34-2.98 1.34z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={stackRef} className="section bg-slate-50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={stackInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Tech Stack</h2>
            <p className="section-subtitle mx-auto">
              We use the latest technologies to build fast, scalable, and maintainable applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial="hidden"
                animate={stackInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <p className="font-medium text-slate-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle mx-auto">
              How we came together to build exceptional web experiences.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl mx-auto prose prose-slate prose-lg"
          >
            <p>
              We met at a hackathon in 2020 where we built a web application that won first place. 
              The synergy was immediate - Alex's eye for design complemented Sarah's backend expertise perfectly.
            </p>
            <p>
              After collaborating on several projects, we decided to form DevDuo, a boutique web development team 
              that focuses on quality over quantity. We're selective about the projects we take on, ensuring that 
              we can give each client the attention they deserve.
            </p>
            <p>
              Our philosophy is simple: we build websites that not only look great but also perform exceptionally well. 
              We believe in clean code, performance optimization, and creating intuitive user experiences.
            </p>
            <p>
              When we're not coding, you can find Alex sketching UI designs and Sarah exploring new technologies. 
              We're passionate about continuous learning and staying ahead of industry trends.
            </p>
            <p>
              We're proud of the work we've done for our clients and the relationships we've built along the way. 
              We look forward to helping you bring your vision to life!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;