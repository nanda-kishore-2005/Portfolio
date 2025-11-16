'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Academic Lead',
    organization: 'FOCUS Governance Body',
    duration: '2024 – 2025',
    location: 'KL University',
    description: 'Leading academic initiatives and governance activities within the FOCUS organization.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'Core Member',
    organization: 'Internal & External Affairs Council, KLU SAC',
    duration: '2024 – 2025',
    location: 'KL University',
    description: 'Contributing to student affairs council, managing internal and external communications and events.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'Freelance Full-Stack Developer',
    organization: 'Independent Client Projects',
    duration: '2024 – Present',
    location: 'Remote',
    description: 'Delivered 2 full-stack client projects and currently working on new freelance assignments.',
    icon: <Briefcase className="w-6 h-6" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
                Experience & <span className="text-cyan">Leadership</span>
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
              My journey goes beyond code — through leadership roles and collaborations, I've learned how to guide teams, manage initiatives, and create meaningful academic and organizational impact.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan/30 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-cyan rounded-full flex items-center justify-center transform md:-translate-x-4 z-10">
                  {exp.icon}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-lg glow"
                  >
                    <h3 className="text-2xl font-bold text-cyan mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-white mb-4">{exp.organization}</p>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
            Each role strengthened my ability to connect people, ideas, and technology — something I carry into every project I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


