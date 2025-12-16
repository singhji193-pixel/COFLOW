import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Workflow, Handshake, Building } from 'lucide-react';
import { ecosystemData } from '../../data/mock';

const iconMap = {
  Rocket: Rocket,
  Workflow: Workflow,
  Handshake: Handshake,
  Building: Building,
};

export const Ecosystem = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {ecosystemData.sectionTitle}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {ecosystemData.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemData.products.map((product, i) => {
            const Icon = iconMap[product.icon];
            return (
              <motion.a
                key={i}
                href={`https://${product.url}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative bg-[var(--bg-secondary)] border rounded-2xl p-6 card-hover ${
                  product.current 
                    ? 'border-[var(--accent-primary)]' 
                    : 'border-[var(--border-subtle)]'
                }`}
              >
                {/* Current badge */}
                {product.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-xs font-bold px-3 py-1 rounded-full">
                    YOU ARE HERE
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  product.current 
                    ? 'bg-[var(--accent-primary)]' 
                    : 'bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent-bg)]'
                } transition-colors`}>
                  <Icon className={`w-6 h-6 ${
                    product.current 
                      ? 'text-[var(--bg-primary)]' 
                      : 'text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]'
                  } transition-colors`} />
                </div>
                
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                  {product.name}
                </h3>
                
                <p className="text-sm text-[var(--accent-primary)] font-medium mb-3">
                  {product.subtitle}
                </p>
                
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {product.description}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 text-lg text-[var(--text-secondary)] font-medium"
        >
          {ecosystemData.bottomText}
        </motion.p>
      </div>
    </section>
  );
};
