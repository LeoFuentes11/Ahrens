'use client';

import { m } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/lib/animations';

interface FadeInItemProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
  variant?: 'fadeInUp' | 'scaleIn';
}

export default function FadeInItem({
  children,
  className,
  as = 'div',
  variant = 'fadeInUp',
}: FadeInItemProps) {
  const Tag = as === 'article' ? m.article : as === 'li' ? m.li : m.div;
  const variants = variant === 'scaleIn' ? scaleIn : fadeInUp;
  return (
    <Tag variants={variants} className={className}>
      {children}
    </Tag>
  );
}
