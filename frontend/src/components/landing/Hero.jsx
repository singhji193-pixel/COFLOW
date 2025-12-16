import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flag, Building2, Star, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData } from '../../data/mock';
import { scrollTo } from '../../lib/lenis';

const iconMap = {
  Flag: Flag,
  Building2: Building2,
  Star: Star,
  ShieldCheck: ShieldCheck,
};

const WorkflowDiagram = () => {
  const nodes = [
    { label: 'Lead Comes In', x: 0 },
    { label: 'AI Qualifies', x: 1 },
    { label: 'CRM Updated', x: 2 },
    { label: 'Email Sent', x: 3 },
    { label: 'Task Created', x: 4 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
        {/* Animated connection lines */}
        {nodes.slice(0, -1).map((node, i) => (
          <motion.line
            key={i}
            x1={50 + i * 100}
            y1={150}
            x2={150 + i * 100}
            y2={150}
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          />
        ))}
      </svg>
      
      <div className="relative flex items-center gap-4 flex-wrap justify-center">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
            className="workflow-node flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl px-4 py-3"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">{node.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-gradient-overlay" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[var(--accent-purple)] rounded-full blur-[120px] opacity-20"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[var(--text-primary)]">{heroData.headline.split(' ').slice(0, -4).join(' ')} </span>
              <span className="gradient-text">{heroData.headline.split(' ').slice(-4).join(' ')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
              {heroData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-hover)] font-semibold px-8 py-6 rounded-xl text-lg btn-shine group"
              >
                {heroData.primaryCTA}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#how-it-works')}
                className="border-2 border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-bg)] px-8 py-6 rounded-xl text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                {heroData.secondaryCTA}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {heroData.trustBadges.map((badge, i) => {
                const Icon = iconMap[badge.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                  >
                    <Icon className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span className="text-sm">{badge.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 min-h-[400px]">
              <div className="absolute -inset-px bg-gradient-to-r from-[var(--accent-primary)] to-transparent opacity-20 rounded-2xl blur-sm" />
              <WorkflowDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
