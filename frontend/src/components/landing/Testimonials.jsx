import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../../data/mock';

export const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            {testimonialsData.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.testimonials.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 card-hover"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[var(--accent-primary)] opacity-30 mb-4" />
              
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{testimonial.title}</p>
                </div>
                <div className="bg-[var(--accent-bg)] text-[var(--accent-primary)] text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonialsData.testimonials.slice(3, 5).map((testimonial, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
              className="relative bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 card-hover"
            >
              <Quote className="w-10 h-10 text-[var(--accent-primary)] opacity-30 mb-4" />
              
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{testimonial.title}</p>
                </div>
                <div className="bg-[var(--accent-bg)] text-[var(--accent-primary)] text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
