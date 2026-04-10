'use client';

import { useRef } from 'react';
import { m, useInView, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  const resolvedVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      }
    : variants;

  return (
    <m.div
      ref={ref}
      variants={resolvedVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}
