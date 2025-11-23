'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { personalInfo } from '@/constants/data';
import Scene from '@/components/3d/Scene';
import DispersingSphere from '@/components/3d/DispersingSphere';

export default function Home() {
  return (
    <>
      <Navbar />
      <Scene className="pointer-events-none">
        <DispersingSphere />
      </Scene>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background - Reduced opacity for 3D visibility */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/80"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="relative max-w-4xl mx-auto text-center rounded-[32px] border border-slate-800/40 bg-slate-900/30 backdrop-blur-xl px-6 py-10 md:px-12 md:py-14 shadow-[0_40px_120px_rgba(15,23,42,0.5)] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 blur-[140px]" />
              <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-purple-500/15 blur-[160px]" />
            </div>
            <motion.p 
              className="text-blue-400 font-mono text-sm md:text-base mb-4 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="gradient-text drop-shadow-[0_10px_35px_rgba(99,102,241,0.45)]">{personalInfo.name}</span>.
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
                className="btn-primary flex items-center gap-2 group shadow-lg shadow-blue-500/30"
              >
                <span>Get In Touch</span>
                <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#projects"
                className="btn-outline flex items-center gap-2 group border-blue-500/40 text-blue-300 hover:border-blue-400"
              >
                <span>Explore Projects</span>
                <ArrowLongRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div 
              className="mt-16 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-slate-400 text-sm tracking-[0.4em] uppercase">Find me on</p>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
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
