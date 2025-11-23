'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/constants/data';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const socialPlatforms = [
  {
    name: 'GitHub',
    url: socialLinks.github,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: socialLinks.linkedin,
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: `mailto:${socialLinks.email}`,
    icon: Mail,
  },
];

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-slate-900/50" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-slate-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m excited to collaborate on impactful products across web platforms, security initiatives, and AI/ML solutions. 
          Have an idea or opportunity? Let&apos;s connect.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Let&apos;s build something meaningful.
              </h3>
              <p className="text-slate-400 mb-8">
                Prefer email? Drop a note anytime. 👋
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 card hover:scale-105 transition-transform group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200 font-medium">{personalInfo.email}</p>
                </div>
              </a>

              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 card hover:scale-105 transition-transform group"
                >
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-slate-200 font-medium">{personalInfo.phone}</p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-4 p-4 card">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-slate-200 font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialPlatforms.map(({ name, url, icon: Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 rounded-lg hover:bg-blue-500/10 hover:scale-110 transition-all"
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors resize-none"
                  placeholder="Share a few details..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
