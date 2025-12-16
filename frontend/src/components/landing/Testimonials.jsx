import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonialsData } from '../../data/mock';

export const Testimonials = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden">
      <div ref={ref}>
        {/* Header */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-6xl font-bold"
          >
            What our clients say
          </motion.h2>
        </div>

        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-6 mb-6">
          {[...testimonialsData.testimonials, ...testimonialsData.testimonials.slice(0, 2)].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[500px] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8"
            >
              <p className="text-lg mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{t.title}</p>
                </div>
                <div className="bg-[var(--accent-bg)] text-[var(--accent-primary)] text-xs font-bold px-3 py-1.5 rounded-full">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-6">
          {[...testimonialsData.testimonials.slice(2), ...testimonialsData.testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[500px] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8"
            >
              <p className="text-lg mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{t.title}</p>
                </div>
                <div className="bg-[var(--accent-bg)] text-[var(--accent-primary)] text-xs font-bold px-3 py-1.5 rounded-full">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
