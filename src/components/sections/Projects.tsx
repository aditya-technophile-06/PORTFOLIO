'use client';

import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="section bg-slate-900/50" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-slate-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-full flex flex-col overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl bg-slate-900/60">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
                      🚀
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70" />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > projects.filter(p => p.featured).length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
