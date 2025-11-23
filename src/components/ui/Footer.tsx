'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/constants/data';
import { SocialIcons } from './SocialIcons';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-slate-400 text-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Connect</h4>
            <SocialIcons />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/50">
          <motion.p
            className="text-center text-slate-400 text-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of ☕</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
