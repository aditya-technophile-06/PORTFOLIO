'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/constants/data';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-slate-900/50" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 group">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden p-[1px] z-10 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Animated Border */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#6366f1_360deg)] animate-[spin_6s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Inner Background */}
                <div className="absolute inset-[1px] bg-slate-900 rounded-[2rem] z-20"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden z-30">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Overlay Gradient for better text contrast if needed, or just aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-2 gradient-text">
                {personalInfo.name}
              </h3>
              <p className="text-xl text-blue-400 mb-4">{personalInfo.title}</p>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:underline block truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-slate-300">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
