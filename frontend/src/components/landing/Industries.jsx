import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Briefcase, Home, DollarSign, Stethoscope, Scale, Calculator, Wrench, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
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
  const [activeTab, setActiveTab] = useState('coaches');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeIndustry = industriesData.industries.find(ind => ind.id === activeTab);

  return (
    <section className="relative py-24" id="industries">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            {industriesData.sectionTitle}
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industriesData.industries.map((industry) => {
            const Icon = iconMap[industry.id];
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                  activeTab === industry.id
                    ? 'bg-[var(--accent-bg)] border-[var(--accent-primary)] text-[var(--accent-primary)]'
                    : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--border-primary)] hover:text-[var(--text-secondary)]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{industry.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Industry Content */}
        <AnimatePresence mode="wait">
          {activeIndustry && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {activeIndustry.name}
                </h3>
                <p className="text-[var(--accent-primary)] font-medium">
                  {activeIndustry.tagline}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeIndustry.automations.map((automation, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-[var(--bg-tertiary)] rounded-xl p-5 border border-transparent hover:border-[var(--border-primary)] transition-colors"
                  >
                    <h4 className="text-[var(--text-primary)] font-semibold mb-2">
                      {automation.name}
                    </h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {automation.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--text-secondary)] mb-6">
            {industriesData.bottomCTA}
          </p>
          <Button
            size="lg"
            className="bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] font-semibold px-8 py-6 rounded-xl text-lg btn-shine group"
          >
            Book Free Automation Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
