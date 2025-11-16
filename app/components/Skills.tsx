'use client';

import { motion } from 'framer-motion';
import DSAVisualizer from './DSAVisualizer';

const skillCategories = [
  {
    category: 'Core Languages',
    skills: ['JavaScript (ES2023)', 'TypeScript', 'Python', 'Java'],
    color: 'from-cyan/20 to-blue-500/20',
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Next.js',  'Express.js', 'Django'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'GitHub Actions'],
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    category: 'Design & Productivity',
    skills: ['Figma', 'Fusion 360', 'Notion'],
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy/50">
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
                Skills & <span className="text-cyan">Technologies</span>
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
              A blend of creativity and logic — I work across the full stack, building responsive frontends, efficient backends, and intelligent systems. Constantly learning and mastering modern web frameworks to turn ideas into impactful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack by Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 border border-cyan/20 hover:border-cyan/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan/5 blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 text-center group-hover:text-cyan transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.button
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -3,
                        boxShadow: "0 4px 12px rgba(0, 188, 212, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-4 py-2.5 bg-navy/40 backdrop-blur-sm border-2 border-cyan/40 hover:border-cyan text-white text-xs md:text-sm font-bold rounded-lg transition-all duration-300 hover:bg-cyan/20 uppercase tracking-wide overflow-hidden group/item"
                    >
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10">{skill}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DSA Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <DSAVisualizer />
        </motion.div>
      </div>
    </section>
  );
}


