'use client';

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { personalInfo } from '@/constants/data';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,41,59,0.8),transparent_70%)]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p 
              className="text-blue-400 font-mono text-sm md:text-base mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="gradient-text">{personalInfo.name}</span>.
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I craft secure, intelligent web experiences.
            </motion.h2>
            
            <motion.p 
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I&apos;m a full stack developer with a strong focus on modern web engineering, application security, and AI/ML-driven experiences. I love translating complex ideas into accessible, human-centered products that scale.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="#contact" 
                className="btn-primary flex items-center gap-2 group"
              >
                <span>Get In Touch</span>
                <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 group"
              >
                <span>View Resume</span>
                <ArrowDownTrayIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-slate-400 text-sm mb-4">FIND ME ON</p>
              <SocialIcons />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 20]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-blue-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            />
          </div>
        </motion.div>
      </section>
      
        {/* All Sections */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
