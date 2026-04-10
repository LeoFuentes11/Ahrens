'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  background?: 'dark' | 'orange';
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  background = 'dark',
}: PageHeroProps) {
  const bgClass =
    background === 'orange'
      ? 'bg-brand-orange'
      : 'bg-brand-dark';

  return (
    <section className={`${bgClass} text-white pt-32 pb-16`}>
      <div className="container-xl">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-balance"
          >
            {title}
          </m.h1>
          {subtitle && (
            <m.p
              variants={fadeInUp}
              className="mt-4 text-lg md:text-xl text-white/75 max-w-2xl"
            >
              {subtitle}
            </m.p>
          )}
        </m.div>
      </div>
    </section>
  );
}
