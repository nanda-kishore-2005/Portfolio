'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Leaf, Target, Rocket, Trophy, Calendar, Image as ImageIcon } from 'lucide-react';

export default function StartupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green via-green/90 to-green/80">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-green/80 backdrop-blur-md border-b border-green-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              className="flex items-center gap-2 text-white hover:text-green-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <Leaf className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My Startup Journey
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Building Sustainable Solutions for a Better Tomorrow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introduction</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Welcome to my entrepreneurial journey! As an innovation enthusiast and sustainability advocate, 
              I've been working on projects that combine technology with environmental consciousness.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              My startup focuses on creating solutions that address real-world challenges while promoting 
              sustainable practices and organic approaches to problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mission</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainability',
                description: 'Promoting eco-friendly solutions and sustainable practices in technology.',
              },
              {
                title: 'Innovation',
                description: 'Leveraging cutting-edge technology to solve real-world problems.',
              },
              {
                title: 'Impact',
                description: 'Creating meaningful change that benefits communities and the environment.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-green-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pilot Projects</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              {
                title: 'Project Alpha',
                description: 'Initial pilot project focusing on sustainable technology solutions.',
                status: 'In Progress',
              },
              {
                title: 'Project Beta',
                description: 'Second phase development with expanded features and reach.',
                status: 'Planning',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="px-4 py-1 bg-green-600 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
                <p className="text-green-100 text-lg">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Trophy className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '100+', label: 'Ideas Explored' },
              { number: '50+', label: 'Prototypes Built' },
              { number: '10+', label: 'Pilot Launches' },
              { number: '5+', label: 'Active Projects' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-green-100">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Timeline</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform md:-translate-x-0.5"></div>
            <div className="space-y-12">
              {[
                { date: '2024 Q1', event: 'Initial Concept Development', description: 'Started exploring sustainable technology solutions.' },
                { date: '2024 Q2', event: 'First Prototype', description: 'Built and tested the first working prototype.' },
                { date: '2024 Q3', event: 'Pilot Launch', description: 'Launched first pilot program with selected users.' },
                { date: '2024 Q4', event: 'Expansion', description: 'Expanded to multiple projects and increased team size.' },
              ].map((item, index) => (
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
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full transform md:-translate-x-4 z-10"></div>
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                      <div className="text-green-200 font-semibold mb-2">{item.date}</div>
                      <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                      <p className="text-green-100">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <ImageIcon className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-lg aspect-video flex items-center justify-center text-white"
              >
                <ImageIcon className="w-12 h-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>© 2025 Startup Journey — All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}












