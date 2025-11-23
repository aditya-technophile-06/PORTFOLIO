'use client';

import { motion } from 'framer-motion';
import { skills } from '@/constants/data';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="group relative flex-shrink-0"
                style={{ width: '120px' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="card h-full flex flex-col items-center justify-center p-6 space-y-3 group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  {/* Icon */}
                  <div 
                    className="text-5xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <Icon />
                  </div>
                  
                  {/* Skill Name */}
                  <p className="text-sm font-medium text-slate-300 text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </p>

                  {/* Glow Effect on Hover */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
