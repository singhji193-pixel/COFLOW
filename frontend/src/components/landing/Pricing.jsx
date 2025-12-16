import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { pricingData } from '../../data/mock';

export const Pricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            {pricingData.sectionTitle}
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingData.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-[var(--bg-secondary)] border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-[var(--accent-primary)] popular-glow' 
                  : 'border-[var(--border-subtle)]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <h3 className="text-lg font-bold text-[var(--text-muted)] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    {plan.price}
                  </span>
                  <span className="text-[var(--text-muted)] mb-1">{plan.currency}</span>
                </div>
                <p className="text-sm text-[var(--accent-primary)] mt-1">{plan.type}</p>
              </div>
              
              <p className="text-center text-sm text-[var(--text-secondary)] mb-6">
                Best for: {plan.bestFor}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-6 rounded-xl font-semibold ${
                  plan.popular
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)]'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--border-primary)]'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Retainer Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              {pricingData.retainers.title}
            </h3>
            <p className="text-[var(--text-secondary)]">
              {pricingData.retainers.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pricingData.retainers.plans.map((retainer, i) => (
              <div
                key={i}
                className="bg-[var(--bg-tertiary)] rounded-xl p-6 border border-transparent hover:border-[var(--border-primary)] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[var(--text-primary)]">{retainer.name}</h4>
                  <span className="text-[var(--accent-primary)] font-bold">{retainer.price}</span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">{retainer.features}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
