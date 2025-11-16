'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  level?: string;
  issuer: string;
  description: string;
  credentialLink: string;
  image: string;
  useIcon?: boolean;
  issued?: string;
  expires?: string;
}

const certificates: Certificate[] = [
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    issued: 'Dec 11, 2024',
    description: 'Certified in core MongoDB development, schema design, indexing, and CRUD operations.',
    credentialLink: 'https://www.credly.com/badges/29d87cf9-8f05-4e2d-be08-beb0110f44e2/public_url',
    image: '/assets/certificates/mongodb-associate.png',
  },
  {
    title: 'Multicloud Network Associate',
    issuer: 'Aviatrix',
    expires: 'Jul 10, 2027',
    description: 'Validated skills in multicloud networking, cloud architecture, and secure cloud connectivity.',
    credentialLink: 'https://www.credly.com/badges/bd02bfe4-d8d9-4369-a557-39d00062db71/public_url',
    image: '/assets/certificates/aviatrix.png',
  },
  {
    title: 'Linguaskill English Proficiency',
    level: 'B2 Level',
    issuer: 'Cambridge Assessment English',
    description: 'Demonstrated English proficiency at B2 level across all language skills',
    credentialLink: '/assets/certificates/Manne Nanda Kishore.pdf',
    image: '/assets/certificates/linguaskill.png',
    // useIcon: true, // PDF file, use icon as fallback
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy/50">
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
                Certificates & <span className="text-cyan">Awards</span>
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
              A reflection of my continuous learning journey — showcasing achievements, technical specializations, and skills that strengthen my professional foundation.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-lg overflow-hidden glow cursor-pointer flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-cyan/20 to-navy flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                {cert.useIcon ? (
                  <Award className="w-20 h-20 text-cyan" />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain p-4"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-cyan mb-2">{cert.title}</h3>
                {cert.level && (
                  <p className="text-sm text-cyan/80 mb-2 font-semibold">{cert.level}</p>
                )}
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                {cert.issued && (
                  <p className="text-sm text-gray-500 mb-4">Issued: {cert.issued}</p>
                )}
                {cert.expires && (
                  <p className="text-sm text-gray-500 mb-4">Expires: {cert.expires}</p>
                )}
                {!cert.issued && !cert.expires && <div className="mb-4"></div>}
                <p className="text-gray-300 text-sm mb-4 flex-1">{cert.description}</p>
                <motion.a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors mt-auto"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


