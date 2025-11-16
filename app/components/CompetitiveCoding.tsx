'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Trophy, TrendingUp, Code, Award } from 'lucide-react';
import Image from 'next/image';

type CodingPlatform = {
  name: string;
  icon: string;
  profileUrl: string;
  username?: string;
  rating?: string;
  problemsSolved?: string;
  solvedLabel?: string;
  badges?: string;
  rank?: string;
  color: string;
};

const platforms: CodingPlatform[] = [
  {
    name: 'LeetCode',
    icon: '/assets/logos/leetcode.png',
    profileUrl: 'https://leetcode.com/u/klu2300032049/',
    username: 'klu2300032049',
    problemsSolved: 'Active',
    rank: 'Solving Problems',
    color: 'from-orange-500/20 to-orange-600/20',
  },
  {
    name: 'CodeChef',
    icon: '/assets/logos/codechef.jpeg',
    profileUrl: 'https://www.codechef.com/users/klu2300032049',
    username: 'klu2300032049',
    rating: '1★ (1340+)',
    rank: 'Global: 53565',
    problemsSolved: '112+',
    badges: '3 Badges',
    color: 'from-yellow-500/20 to-yellow-600/20',
  },
  {
    name: 'Codeforces',
    icon: '/assets/logos/codeforces.png',
    profileUrl: 'https://codeforces.com/profile/klu2300032049',
    username: 'klu2300032049',
    problemsSolved: 'Active',
    rank: 'Participating',
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    name: 'GitHub',
    icon: '/assets/logos/github.png',
    profileUrl: 'https://github.com/nanda-kishore-2005',
    username: 'nanda-kishore-2005',
    problemsSolved: '6+ Repositories',
    rank: 'Active Developer',
    color: 'from-gray-500/20 to-gray-600/20',
  },
  
];

export default function CompetitiveCoding() {
  return (
    <section id="competitive-coding" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy/50">
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
                Competitive <span className="text-cyan">Coding</span>
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Active on competitive programming platforms and professional networks, continuously improving problem-solving skills
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-lg p-6 hover:border-cyan/50 border border-transparent transition-all glow cursor-pointer group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={platform.icon}
                      alt={`${platform.name} logo`}
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">
                      {platform.name}
                    </h3>
                    {platform.username && (
                      <p className="text-sm text-gray-400">@{platform.username}</p>
                    )}
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan transition-colors" />
              </div>

              {/* Stats Grid */}
              <div className={`grid grid-cols-2 gap-3 mb-4 p-4 rounded-lg bg-gradient-to-br ${platform.color}`}>
                {platform.rating && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs">Rating</span>
                    </div>
                    <p className="text-white font-semibold">{platform.rating}</p>
                  </div>
                )}
                {platform.problemsSolved && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Code className="w-4 h-4" />
                      <span className="text-xs">{platform.solvedLabel || 'Solved'}</span>
                    </div>
                    <p className="text-white font-semibold">{platform.problemsSolved}</p>
                  </div>
                )}
                {platform.rank && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Trophy className="w-4 h-4" />
                      <span className="text-xs">Rank</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{platform.rank}</p>
                  </div>
                )}
                {platform.badges && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-xs">Badges</span>
                    </div>
                    <p className="text-white font-semibold">{platform.badges}</p>
                  </div>
                )}
              </div>

              {/* View Profile Link */}
              <div className="flex items-center gap-2 text-cyan text-sm font-medium group-hover:gap-3 transition-all">
                <span>View Profile</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 glass rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-cyan mb-6 text-center">Overall Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Problems Solved', value: '112+', icon: '💪' },
              { label: 'Platforms Active', value: '4', icon: '🏆' },
              { label: 'Contests Participated', value: '36+', icon: '🎯' },
              { label: 'Best Rating', value: '1340', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

