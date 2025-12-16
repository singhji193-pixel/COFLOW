import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, ArrowRight } from 'lucide-react';
import { pricingData } from '../../data/mock';

export const Pricing = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative py-32 md:py-48" id="pricing">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-primary)] rounded-full blur-[300px] opacity-[0.03]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Simple pricing.
            <br />
            <span className="text-[var(--text-muted)]">Serious results.</span>
          </motion.h2>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className={`pricing-card-dramatic ${plan.popular ? 'featured' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--text-muted)] tracking-wider uppercase mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold">{plan.price}</span>
                  <span className="text-[var(--text-muted)]">{plan.currency}</span>
                </div>
                <p className="text-[var(--accent-primary)] text-sm mt-2">{plan.type}</p>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mb-8">
                Best for: {plan.bestFor}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)]'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
