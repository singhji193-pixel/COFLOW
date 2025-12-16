import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { howItWorksData } from '../../data/mock';

export const HowItWorks = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            {howItWorksData.sectionTitle}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {howItWorksData.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-bold text-lg px-4 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--text-muted)]">Duration:</span>
                        <span className="text-[var(--text-secondary)] font-medium">{step.duration}</span>
                      </div>
                      <div className="w-px h-4 bg-[var(--border-primary)]" />
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--text-muted)]">Cost:</span>
                        <span className="text-[var(--accent-primary)] font-medium">{step.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow connector */}
                {i < howItWorksData.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] font-semibold px-8 py-6 rounded-xl text-lg btn-shine group"
          >
            Get Your Free Automation Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
