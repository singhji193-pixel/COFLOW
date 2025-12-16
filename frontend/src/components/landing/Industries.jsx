import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Briefcase, Home, DollarSign, Stethoscope, Scale, Calculator, Wrench, ShoppingBag } from 'lucide-react';
import { industriesData } from '../../data/mock';

const iconMap = {
  'coaches': Briefcase,
  'real-estate': Home,
  'financial': DollarSign,
  'healthcare': Stethoscope,
  'law': Scale,
  'accountants': Calculator,
  'home-services': Wrench,
  'ecommerce': ShoppingBag,
};

export const Industries = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section ref={containerRef} className="horizontal-section" id="industries">
      <div className="horizontal-container">
        <div className="w-full" ref={ref}>
          {/* Header - fixed on left */}
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 max-w-md z-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
            >
              Industries
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Automations that
              <span className="hero-title-fill"> move the needle</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[var(--text-muted)] hidden md:block"
            >
              Scroll to explore industry-specific solutions
            </motion.p>
          </div>

          {/* Horizontal scrolling cards */}
          <motion.div 
            style={{ x }}
            className="horizontal-track pl-[50vw]"
          >
            {industriesData.industries.map((industry, i) => {
              const Icon = iconMap[industry.id];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="industry-card"
                >
                  <span className="industry-card-number">0{i + 1}</span>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-bg)] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{industry.name}</h3>
                      <p className="text-sm text-[var(--accent-primary)]">{industry.tagline}</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 overflow-hidden">
                    {industry.automations.slice(0, 4).map((automation, j) => (
                      <div
                        key={j}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-colors"
                      >
                        <h4 className="font-medium text-sm mb-1">{automation.name}</h4>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                          {automation.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-sm text-[var(--accent-primary)] font-medium"
                  >
                    Explore {industry.name}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
