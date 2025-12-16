import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { finalCTAData } from '../../data/mock';

export const FinalCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)]/30 to-[var(--bg-primary)]" />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)] rounded-full blur-[200px] opacity-10"
      />
      
      <div className="relative max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-[var(--accent-primary)] via-transparent to-[var(--accent-primary)] opacity-30 rounded-3xl" />
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {finalCTAData.headline}
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              {finalCTAData.subheadline}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
              {finalCTAData.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-left"
                >
                  <Check className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] font-semibold px-10 py-7 rounded-xl text-lg btn-shine animate-glow-pulse group"
              >
                {finalCTAData.primaryCTA}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                {finalCTAData.secondaryText}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
