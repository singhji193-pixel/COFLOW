import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Unlink, DollarSign, Scale } from 'lucide-react';
import { problemsData } from '../../data/mock';

const iconMap = {
  Clock: Clock,
  Unlink: Unlink,
  DollarSign: DollarSign,
  Scale: Scale,
};

export const Problems = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {problemsData.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemsData.problems.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-6 card-hover"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-bg)] transition-colors">
                  <Icon className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
                
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {problem.title}
                </h3>
                
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 text-xl md:text-2xl text-[var(--text-secondary)] font-medium"
        >
          {problemsData.bottomText}
        </motion.p>
      </div>
    </section>
  );
};
