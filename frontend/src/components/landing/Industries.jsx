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
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Calculate which card to show based on scroll progress
  const totalCards = industriesData.industries.length;

  return (
    <section ref={containerRef} className="relative" id="industries" style={{ height: `${(totalCards + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full">
            {/* Left side - Fixed header */}
            <div ref={headerRef} className="flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
              >
                Industries
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                Automations that
                <span className="hero-title-fill"> move the needle</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-[var(--text-muted)] text-lg mb-8"
              >
                Scroll to explore industry-specific solutions
              </motion.p>

              {/* Progress indicators */}
              <div className="flex gap-2">
                {industriesData.industries.map((industry, i) => (
                  <IndustryDot key={i} index={i} scrollYProgress={scrollYProgress} totalCards={totalCards} industry={industry} />
                ))}
              </div>
            </div>

            {/* Right side - Cards stack */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px] h-[600px]">
                {industriesData.industries.map((industry, i) => (
                  <IndustryCard 
                    key={i} 
                    industry={industry} 
                    index={i} 
                    scrollYProgress={scrollYProgress}
                    totalCards={totalCards}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustryDot = ({ index, scrollYProgress, totalCards, industry }) => {
  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [1, 1.5, 1.5, 1]
  );

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"
      title={industry.name}
    />
  );
};

const IndustryCard = ({ industry, index, scrollYProgress, totalCards }) => {
  const Icon = iconMap[industry.id];
  
  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  const mid = (start + end) / 2;
  
  // Card visibility and animations
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, mid, end, end + 0.05],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    [100, 0, 0, -100]
  );

  const scale = useTransform(
    scrollYProgress,
    [start - 0.05, start, mid, end, end + 0.05],
    [0.9, 1, 1, 1, 0.9]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    [10, 0, 0, -10]
  );

  return (
    <motion.div
      style={{ opacity, y, scale, rotateX }}
      className="absolute inset-0 perspective-1000"
    >
      <div className="w-full h-full bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 flex flex-col">
        {/* Card number */}
        <span className="absolute top-4 right-6 text-8xl font-black text-white/[0.03]">
          0{index + 1}
        </span>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[var(--accent-bg)] flex items-center justify-center">
            <Icon className="w-7 h-7 text-[var(--accent-primary)]" />
          </div>
          <div>
            <h3 className="font-bold text-xl">{industry.name}</h3>
            <p className="text-sm text-[var(--accent-primary)]">{industry.tagline}</p>
          </div>
        </div>

        {/* Automations list */}
        <div className="flex-1 space-y-3 overflow-hidden">
          {industry.automations.map((automation, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: j * 0.1 }}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all hover:bg-white/[0.05]"
            >
              <h4 className="font-medium text-sm mb-1">{automation.name}</h4>
              <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                {automation.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 flex items-center gap-2 text-sm text-[var(--accent-primary)] font-medium"
        >
          Explore {industry.name}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};
