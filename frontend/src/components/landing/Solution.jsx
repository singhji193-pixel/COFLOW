import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Puzzle, Brain, Infinity } from 'lucide-react';
import { solutionData } from '../../data/mock';

const iconMap = {
  Puzzle: Puzzle,
  Brain: Brain,
  Infinity: Infinity,
};

export const Solution = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter">
          COFLOW
        </span>
      </div>

      <motion.div 
        ref={ref}
        style={{ scale, opacity }}
        className="relative max-w-[1400px] mx-auto px-6 md:px-12"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            The Solution
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            Meet <span className="hero-title-fill">COFlow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            {solutionData.intro}
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutionData.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="relative group"
              >
                <div className="feature-card-immersive h-full text-center py-12">
                  {/* Number */}
                  <span className="absolute top-6 left-6 text-6xl font-black text-white/5">
                    0{i + 1}
                  </span>

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 mx-auto rounded-3xl bg-[var(--accent-bg)] flex items-center justify-center mb-8"
                    >
                      <Icon className="w-10 h-10 text-[var(--accent-primary)]" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
