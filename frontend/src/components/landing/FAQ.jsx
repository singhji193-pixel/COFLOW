import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { faqData } from '../../data/mock';

export const FAQ = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-32 md:py-48" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[var(--accent-primary)] text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Questions?
            <br />
            <span className="text-[var(--text-muted)]">We've got answers.</span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl px-6 data-[state=open]:border-[var(--accent-primary)]/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-medium hover:no-underline hover:text-[var(--accent-primary)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--text-muted)] pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
