import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: '500+', label: 'Integrations' },
  { number: '100+', label: 'Businesses Served' },
  { number: '50K', label: 'Hours Saved' },
  { number: '4.9', label: 'Client Rating' },
];

export const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 border-y border-[var(--border-subtle)]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                className="counter-number mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-[var(--text-muted)] text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
