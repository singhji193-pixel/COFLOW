import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Youtube, MapPin } from 'lucide-react';
import { footerData } from '../../data/mock';

const iconMap = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Youtube: Youtube,
};

export const Footer = () => {
  return (
    <footer className="footer-immersive py-20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)] flex items-center justify-center">
                <span className="text-[var(--bg-primary)] font-black text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">COFlow</span>
            </a>
            <p className="text-[var(--text-muted)] mb-6 max-w-sm leading-relaxed">
              Custom AI automation for North American businesses. 
              We build the workflows that make your business run itself.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
              <MapPin className="w-4 h-4" />
              Vancouver, BC, Canada
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {footerData.social.map((social, i) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={i}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase">Ecosystem</h4>
            <ul className="space-y-4">
              {footerData.ecosystem.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className={`text-sm transition-colors ${
                      link.current
                        ? 'text-[var(--accent-primary)]'
                        : 'text-[var(--text-muted)] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-4">
              {footerData.resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-4">
              {footerData.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>© 2025 COEngine Service Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="text-red-500">🍁</span>
            Proudly Canadian
          </p>
        </div>
      </div>
    </footer>
  );
};
