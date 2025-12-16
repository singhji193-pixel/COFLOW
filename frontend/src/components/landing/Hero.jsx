import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { heroData } from '../../data/mock';
import { scrollTo } from '../../lib/lenis';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const titleWords = "AUTOMATE EVERYTHING".split(' ');

  return (
    <section ref={containerRef} className="relative min-h-[200vh]">
      {/* Sticky hero content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="grid-lines" />
          <div className="scan-line" />
        </div>

        {/* Main content */}
        <motion.div 
          style={{ y, opacity, scale }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-[var(--text-secondary)] text-sm tracking-[0.3em] uppercase font-medium">
              AI-Powered Business Automation
            </span>
          </motion.div>

          {/* Giant title */}
          <div className="hero-title text-center mb-8">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.5 + i * 0.15, 
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block mr-[0.3em] ${i === 1 ? 'hero-title-fill' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl text-center mb-12 leading-relaxed"
          >
            We build custom AI workflows that connect your tools, eliminate manual work, 
            and run your business 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(218, 255, 1, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary-large"
            >
              Book Free Audit
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-[var(--text-secondary)] hover:text-white font-medium flex items-center gap-2 px-6 py-4 transition-colors"
            >
              Watch Demo
              <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <span className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-current ml-0.5" />
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollTo('#problems')}
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-[0.3em] text-[var(--text-muted)] uppercase">Scroll</span>
              <ArrowDown className="w-5 h-5 text-[var(--text-muted)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
