import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { howItWorksData } from '../../data/mock';

export const HowItWorks = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48" id="process">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            The Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            From chaos to
            <br />
            <span className="hero-title-fill">autopilot</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-[var(--border-primary)]">
            <motion.div 
              style={{ width: lineWidth }}
              className="h-full bg-[var(--accent-primary)]"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {howItWorksData.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Step number */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)] flex items-center justify-center">
                    <span className="text-[var(--bg-primary)] font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                <div className="counter-number mb-4 opacity-30">{step.number}</div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-[var(--text-muted)] block">Duration</span>
                    <span className="font-medium">{step.duration}</span>
                  </div>
                  <div className="w-px h-8 bg-[var(--border-primary)]" />
                  <div>
                    <span className="text-[var(--text-muted)] block">Cost</span>
                    <span className="font-medium text-[var(--accent-primary)]">{step.cost}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary-large"
          >
            Start Your Automation Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
