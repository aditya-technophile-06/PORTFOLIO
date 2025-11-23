'use client';

import { motion } from 'framer-motion';
import { workExperience, education, achievements, Education, type Experience } from '@/constants/data';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

type TimelineItem = NonNullable<Experience['timeline']>[number];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Work Experience */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-200">Work Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {workExperience.map((exp: Experience, index: number) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  className="card relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500 before:rounded-full"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Image src={exp.logo} alt={exp.company} width={40} height={40} className="rounded-lg object-cover" />
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {exp.summary && (
                    <p className="text-slate-300 text-sm mb-3">{exp.summary}</p>
                  )}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc: string, i: number) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {exp.timeline && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-blue-400 mb-2">Career Progression:</h5>
                      <div className="space-y-3">
                        {exp.timeline?.map((item: TimelineItem, timelineIndex: number) => (
                          <div key={timelineIndex} className="border-l-2 border-blue-500/30 pl-4">
                            <p className="text-white font-medium text-sm">{item.position}</p>
                            <p className="text-slate-400 text-xs mb-2">{item.duration}</p>
                            {item.location && (
                              <p className="text-slate-500 text-xs mb-1">{item.location}</p>
                            )}
                            {item.employmentType && (
                              <p className="text-slate-500 text-xs mb-1">{item.employmentType}</p>
                            )}
                            <ul className="space-y-1">
                              {item.description.map((timelineDesc: string, descIndex: number) => (
                                <li key={descIndex} className="text-slate-300 text-xs flex items-start gap-2">
                                  <span className="text-blue-400 mt-0.5">▸</span>
                                  <span>{timelineDesc}</span>
                                </li>
                              ))}
                            </ul>
                            {item.skills && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {item.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-0.5 text-[10px] font-medium bg-slate-700/40 text-slate-300 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-200">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu: Education, index: number) => {
                const [degreeTitle, ...specializationParts] = edu.degree.split('(');
                const specialization = specializationParts.length
                  ? `(${specializationParts.join('(')}`.trim()
                  : null;

                return (
                  <motion.div
                    key={`${edu.university}-${index}`}
                    className="card"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Image src={edu.logo} alt={edu.university} width={48} height={48} className="rounded-lg object-cover" />
                        <div className="text-center md:text-left">
                          <h4 className="text-xl font-bold text-white mb-1 leading-snug">{degreeTitle.trim()}</h4>
                          {specialization && (
                            <p className="text-blue-300 text-sm font-medium leading-tight md:text-left">
                              {specialization}
                            </p>
                          )}
                          <p className="text-blue-400 font-medium mt-1">{edu.university}</p>
                          {edu.stream && (
                            <p className="text-slate-400 text-sm">{edu.stream}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-center md:text-right gap-1">
                        <div className="flex items-center gap-2 text-slate-400 text-sm justify-center md:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span className="tracking-wide">{edu.duration}</span>
                        </div>
                        {edu.grade && (
                          <span className="text-green-400 text-sm font-semibold">
                            Grade: {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                    {edu.activities && (
                      <p className="text-slate-400 text-sm mb-2">Activities: {edu.activities}</p>
                    )}
                    {edu.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.skills.map((skill: string, skillIndex: number) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Award className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-200">Achievements & Certifications</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  className="card group hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                      <p className="text-blue-400 text-sm mb-2">{achievement.issuer}</p>
                      <p className="text-slate-400 text-sm mb-2">{achievement.description}</p>
                      <span className="text-slate-500 text-xs">{achievement.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
