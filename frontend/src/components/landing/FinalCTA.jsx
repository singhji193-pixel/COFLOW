import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 cta-section">
      <div className="cta-glow" />
      
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="relative max-w-5xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Giant text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[1.1]">
            Ready to put your business on
            <span className="hero-title-fill"> autopilot?</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Book your free Automation Audit. We'll map your processes, identify opportunities, 
            and show you exactly what's possible.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(218, 255, 1, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-large text-lg px-12 py-6"
          >
            Book Free Automation Audit
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          <p className="mt-6 text-sm text-[var(--text-muted)]">
            No credit card required. No pushy sales tactics. Just clarity.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-[var(--text-muted)]"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            30-min strategy call
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Custom automation roadmap
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            No-obligation quote
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
