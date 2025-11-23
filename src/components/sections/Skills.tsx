'use client';

import { motion, useMotionValue, useAnimationFrame, useSpring } from 'framer-motion';
import { skills } from '@/constants/data';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';

function SkillItem({ skill, index }: { skill: any, index: number }) {
  const Icon = skill.icon;
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Smooth rotation for auto-spin
  const smoothRotateY = useSpring(rotateY, { damping: 20, stiffness: 100 });
  const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 100 });

  useAnimationFrame((t, delta) => {
    if (!isInteracting) {
      // Continuous rotation like a coin
      rotateY.set(rotateY.get() + 1);
      // Slowly reset X rotation if it was changed
      if (rotateX.get() !== 0) {
        rotateX.set(rotateX.get() * 0.95);
      }
    }
  });

  const handlePointerDown = () => setIsInteracting(true);
  const handlePointerUp = () => setIsInteracting(false);
  const handlePointerLeave = () => setIsInteracting(false);
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isInteracting) {
      rotateY.set(rotateY.get() + e.movementX);
      rotateX.set(rotateX.get() - e.movementY);
    }
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-4 cursor-grab active:cursor-grabbing"
      style={{ perspective: 1000 }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <motion.div
        style={{ 
          rotateY: smoothRotateY, 
          rotateX: smoothRotateX,
          transformStyle: "preserve-3d"
        }}
        className="relative w-24 h-24 flex items-center justify-center"
      >
        {/* Front */}
        <div 
          className="text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          style={{ color: skill.color }}
        >
          <Icon />
        </div>
        
        {/* Back (Optional: duplicate icon or different content) */}
        {/* For a true coin feel, we can add a back face, but for now just the icon rotating is fine. 
            Standard icons are 2D, so they will look flat from the side. 
            To make it look like a coin, we'd need a cylinder or thick div. 
            Let's keep it simple first as requested "only logos". */}
      </motion.div>
      
      <p className="text-sm font-medium text-slate-400 select-none">
        {skill.name}
      </p>
    </div>
  );
}

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
          className="flex flex-wrap justify-center gap-3 mb-16"
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
        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <SkillItem skill={skill} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
