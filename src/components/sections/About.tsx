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
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-700/50 backdrop-blur-sm">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
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
