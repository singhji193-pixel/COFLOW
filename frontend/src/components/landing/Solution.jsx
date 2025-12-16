import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Puzzle, Brain, Infinity } from 'lucide-react';
import { solutionData } from '../../data/mock';

const iconMap = {
  Puzzle: Puzzle,
  Brain: Brain,
  Infinity: Infinity,
};

export const Solution = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24" id="solution">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            {solutionData.sectionTitle}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {solutionData.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionData.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 text-center card-hover"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-purple)] opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-opacity" />
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--accent-bg)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
