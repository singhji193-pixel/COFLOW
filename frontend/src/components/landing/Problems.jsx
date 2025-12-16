import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Unlink, DollarSign, TrendingDown } from 'lucide-react';
import { problemsData } from '../../data/mock';

const iconMap = {
  Clock: Clock,
  Unlink: Unlink,
  DollarSign: DollarSign,
  Scale: TrendingDown,
};

export const Problems = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48" id="problems">
      {/* Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 gradient-radial opacity-50"
      />

      <div className="relative max-w-[1800px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            The Problem
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            Your business is
            <span className="text-[var(--text-muted)]"> drowning in manual work</span>
          </motion.h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemsData.problems.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="feature-card-immersive group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[var(--accent-bg)] transition-colors">
                  <Icon className="w-7 h-7 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl font-medium text-[var(--text-secondary)]">
            What if your business <span className="text-white">ran itself?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
