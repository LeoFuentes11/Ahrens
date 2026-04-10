'use client';

import { m } from 'framer-motion';
import { staggerContainer, staggerFast } from '@/lib/animations';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'ol';
  fast?: boolean;
  margin?: string;
}

export default function StaggerContainer({
  children,
  className,
  as = 'div',
  fast = false,
  margin = '-60px',
}: StaggerContainerProps) {
  const Tag = as === 'ul' ? m.ul : as === 'ol' ? m.ol : m.div;
  return (
    <Tag
      className={className}
      variants={fast ? staggerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
    >
      {children}
    </Tag>
  );
}
