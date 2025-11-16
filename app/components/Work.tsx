'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Code, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'SOUNDSID',
    description: 'A modern and interactive music platform with a clean and intuitive UI.',
    longDescription: 'A modern and interactive music platform with a clean and intuitive UI. Built with Next.js and React, featuring seamless user experience and responsive design.',
    techStack: ['Next.js','TypeScript','Spring Boot ','MySQL','AWS'],
    liveLink: 'https://soundsid.com',
    image: '/assets/images/soundsid.png',
  },
  {
    title: 'VorLux',
    description: 'Professional lighting solutions website with product catalog and brand-focused UI.',
    longDescription: 'Professional lighting solutions website with product catalog and brand-focused UI. Showcasing modern design principles and excellent user experience.',
    techStack: ['Next.js', 'Tailwind CSS'],
    liveLink: 'https://vorlux.in',
    image: '/assets/images/vorlux.png',
  },
  {
    title: 'Orgo-tech ',
    description: 'A platform for organic farming solutions with secure authentication and clean UI.',
    longDescription: 'A platform for organic farming solutions with secure authentication and clean UI. Built with Next.js, Tailwind CSS, and Node.js to provide a comprehensive solution for organic farming.',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js'],
    liveLink: 'https://orgo-tech.vercel.app/login',
    image: '/assets/images/orgo-tech.png',
  },
  {
    title: 'Social Media Application',
    description: 'Full-stack social platform with authentication, posting, interactions, and real-time features.',
    longDescription: 'Full-stack social platform with authentication, posting, interactions, and real-time features. Built with React, Node.js, Express, and MongoDB for a complete social media experience.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://social-media-application-p9m1.vercel.app/',
    image: '/assets/images/social-media.png',
  },
  
  {
    title: 'Portfolio ',
    description: 'My personal portfolio showcasing skills, projects, and achievements.',
    longDescription: 'My personal portfolio showcasing skills, projects, and achievements. Built with Next.js, React, and Tailwind CSS, featuring smooth animations and a professional design.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    liveLink: '#',
    image: '/assets/images/portfolio.png',
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update cards to show based on screen size
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(1); // Mobile: 1 card
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-cyan/20 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan/20 rounded-full blur-2xl"
            />
            <div className="relative z-10 mb-6 inline-block">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-cyan/40"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block px-4">
                My <span className="text-cyan">Work</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan via-cyan/50 to-transparent"
                />
              </h2>
              <div className="absolute -right-6 top-0 bottom-0 w-1 bg-cyan/40"></div>
            </div>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Turning ideas into code — here are some projects that reflect my passion for building intelligent and scalable web experiences.
            </p>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-navy/80 backdrop-blur-sm border-2 border-cyan/50 rounded-full p-3 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all hidden md:flex items-center justify-center shadow-lg"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Carousel */}
          <div className="overflow-hidden mx-12 md:mx-16">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * 32}px)`,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass rounded-lg overflow-hidden glow cursor-pointer flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(cardsToShow - 1) * 32}px) / ${cardsToShow})`,
                    minWidth: '280px',
                  }}
                >
                  <div className="h-48 bg-gradient-to-br from-cyan/20 to-navy relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Code className="w-16 h-16 text-cyan" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cyan mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-cyan/20 text-cyan rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-cyan hover:text-cyan/80"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-cyan hover:text-cyan/80"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-navy/80 backdrop-blur-sm border-2 border-cyan/50 rounded-full p-3 text-cyan hover:bg-cyan/10 hover:border-cyan transition-all hidden md:flex items-center justify-center shadow-lg"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? 'w-8 bg-cyan'
                  : 'w-2 bg-cyan/40 hover:bg-cyan/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-cyan">{selectedProject.title}</h3>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      onClick={() => setSelectedProject(null)}
                      className="text-white hover:text-cyan"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>
                  <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan/20 text-cyan rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-cyan text-navy font-semibold rounded-lg flex items-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </motion.a>
                    )}
                    {selectedProject.liveLink && (
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 glass text-white font-semibold rounded-lg flex items-center gap-2 border border-cyan/30 hover:border-cyan"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


