'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks as links } from '@/constants/data';

const socialLinksData = [
  {
    name: 'GitHub',
    url: links.github,
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: links.linkedin,
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Email',
    url: `mailto:${links.email}`,
    icon: <Mail className="w-5 h-5" />,
  },
];

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center space-x-6">
      {socialLinksData.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          aria-label={social.name}
        >
          <span className="sr-only">{social.name}</span>
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
