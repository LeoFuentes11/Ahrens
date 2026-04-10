'use client';

import { m } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface FadeInItemProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
}

export default function FadeInItem({
  children,
  className,
  as = 'div',
}: FadeInItemProps) {
  const Tag = as === 'article' ? m.article : as === 'li' ? m.li : m.div;
  return (
    <Tag variants={fadeInUp} className={className}>
      {children}
    </Tag>
  );
}
