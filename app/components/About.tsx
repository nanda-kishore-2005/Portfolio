'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, Code, Target, Award, Rocket, TrendingUp, Database, Zap, MessageCircle } from 'lucide-react';

export default function About() {
  const downloadResume = () => {
    // Placeholder for resume download
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // Update with actual resume path
    link.download = 'Nanda_Kishore_Manne_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <div className="relative z-10 inline-block">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-cyan/40"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block px-4">
                About <span className="text-cyan">Me</span>
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
          </div>
        </motion.div>

        {/* Main Introduction and Quick Highlights Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
          {/* Main Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-cyan">Nanda Kishore Manne</span> — a{' '}
              <span className="text-cyan">Full-Stack Developer</span> by passion and an{' '}
              <span className="text-cyan">Innovator</span> by vision.
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently pursuing my <span className="text-white font-semibold">pre-final year B.Tech in Computer Science and Engineering (CSE)</span> at{' '}
              <span className="text-cyan font-semibold">KL University</span>, where I focus on building intelligent, scalable, real-world solutions using modern web technologies. 
              I love taking ideas from <span className="text-cyan italic">"what if?"</span> to <span className="text-cyan italic">"it's live."</span>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I work across the stack — from clean, responsive frontends to high-performance backends and database design. 
              My interests include <span className="text-cyan">Node.js</span>, <span className="text-cyan">React</span>, <span className="text-cyan">Next.js</span>,{' '}
              <span className="text-cyan">MongoDB</span>, <span className="text-cyan">SQL</span>, <span className="text-cyan">Spring Boot</span>, and modern API-driven architectures. 
              I also enjoy solving problems with data structures and algorithms and turning complexity into something simple and usable.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond just writing code, I care about <span className="text-white font-semibold">impact</span>. I'm driven by solving real problems that matter to people, 
              improving reliability, usability, and trust in the products I build.
            </p>
          </motion.div>

          {/* Right Column: Quick Highlights and Current Focus */}
          <div className="space-y-8 lg:pt-0">
            {/* Quick Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-cyan mb-4">Quick Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <GraduationCap className="w-6 h-6" />, label: 'B.Tech CSE, Pre-Final Year', value: 'KL University' },
                  { icon: <Code className="w-6 h-6" />, label: 'Full-Stack Developer', value: 'Frontend + Backend + DB' },
                  { icon: <TrendingUp className="w-6 h-6" />, label: 'CGPA', value: '9.07' },
                  { icon: <Award className="w-6 h-6" />, label: 'Linguaskill Certified', value: 'B2 Level English' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-4 rounded-lg text-center"
                  >
                    <div className="text-cyan mb-2 flex justify-center">{item.icon}</div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.label}</h4>
                    <p className="text-gray-400 text-xs">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-cyan flex items-center gap-2 mb-4">
                <Target className="w-6 h-6" />
                What I'm Focused On Right Now
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Rocket className="w-6 h-6" />, text: 'Building high-quality, production-ready web apps' },
                  { icon: <Database className="w-6 h-6" />, text: 'Diving deeper into backend architecture and data flow' },
                  { icon: <Zap className="w-6 h-6" />, text: 'Exploring intelligent systems for safer, smarter decisions' },
                  { icon: <Code className="w-6 h-6" />, text: 'Sharpening problem-solving skills through DSA' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-4 rounded-lg text-center"
                  >
                    <div className="text-cyan mb-2 flex justify-center">{item.icon}</div>
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-xl text-white mb-4 leading-relaxed">
              I'm actively growing as an engineer and looking for opportunities to work on serious, meaningful products.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              If you're building something that needs <span className="text-cyan font-semibold">reliability</span>,{' '}
              <span className="text-cyan font-semibold">performance</span>, and <span className="text-cyan font-semibold">clarity</span> — let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-3 glass border-2 border-cyan/50 text-white font-semibold rounded-lg flex items-center gap-2 hover:border-cyan hover:bg-cyan/10 transition-all"
              >
                <MessageCircle size={20} />
                Let's collaborate
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="px-8 py-3 bg-cyan text-navy font-semibold rounded-lg flex items-center gap-2 glow hover:bg-cyan/90 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


