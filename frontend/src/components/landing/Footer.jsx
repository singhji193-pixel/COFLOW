import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Youtube, MapPin, Flag } from 'lucide-react';
import { footerData } from '../../data/mock';

const iconMap = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Youtube: Youtube,
};

export const Footer = () => {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)] flex items-center justify-center">
                <span className="text-[var(--bg-primary)] font-bold text-lg">CF</span>
              </div>
              <span className="text-xl font-bold text-[var(--text-primary)]">
                {footerData.brand.name}
              </span>
            </a>
            <p className="text-[var(--text-muted)] mb-4 text-sm leading-relaxed">
              {footerData.brand.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
              <MapPin className="w-4 h-4" />
              {footerData.brand.location}
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              {footerData.brand.serving}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {footerData.social.map((social, i) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Ecosystem Column */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Ecosystem</h4>
            <ul className="space-y-3">
              {footerData.ecosystem.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors ${
                      link.current
                        ? 'text-[var(--accent-primary)] font-medium'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                    }`}
                  >
                    {link.name}
                    {link.current && <span className="ml-2 text-xs">(current)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerData.resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerData.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              {footerData.copyright}
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Flag className="w-4 h-4 text-red-500" />
              {footerData.tagline}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
