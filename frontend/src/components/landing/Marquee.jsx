import React from 'react';
import { motion } from 'framer-motion';

const words = ['AUTOMATION', 'AI', 'WORKFLOW', 'EFFICIENCY', 'SCALE', 'GROWTH'];

export const Marquee = () => {
  return (
    <div className="py-12 overflow-hidden border-y border-[var(--border-subtle)]">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...words, ...words].map((word, i) => (
            <span key={i} className={i % 2 === 0 ? '' : 'accent'}>
              {word} •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
