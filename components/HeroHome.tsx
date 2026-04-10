'use client';

import Link from 'next/link';
import Image from 'next/image';
import { m } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HeroHome() {
  return (
    <section
      className="relative min-h-dvh flex items-center bg-brand-dark overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.svg"
        alt=""
        fill
        className="object-cover opacity-40"
        priority
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/60" aria-hidden="true" />
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F26522 0, #F26522 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange"
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 py-32">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <m.p
            variants={fadeInUp}
            className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Five Generations · Est. 1934
          </m.p>
          <m.h1
            variants={fadeInUp}
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] text-balance"
          >
            Built to Last.
            <br />
            <span className="text-brand-orange">Built for Australia.</span>
          </m.h1>
          <m.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            From the outback to the coast, Ahrens delivers construction,
            engineering, mining services, and rural infrastructure that stands
            the test of time.
          </m.p>
          <m.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/capabilities" className="btn-primary text-base px-8 py-4">
              Explore Capabilities
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link href="/projects" className="btn-secondary text-base px-8 py-4">
              View Projects
            </Link>
          </m.div>
        </m.div>
      </div>

      {/* Scroll indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="uppercase tracking-widest text-[10px]">Scroll</span>
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </m.div>
      </m.div>
    </section>
  );
}
