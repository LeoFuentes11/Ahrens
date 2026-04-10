'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HardHat, Mountain, Factory, Droplets, Warehouse, Cylinder, Wrench } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'Explore the full range of Ahrens construction and engineering capabilities — from design and construct to mining services, steel fabrication, and more.',
};

const CAPABILITIES = [
  {
    icon: HardHat,
    title: 'Design & Construct',
    description: 'End-to-end project delivery across commercial, industrial, mining, and rural sectors. From concept to handover — we own every phase.',
    href: '/capabilities/design-construct',
  },
  {
    icon: Mountain,
    title: 'Mining Services',
    description: 'Specialist construction and infrastructure solutions for the resources sector — camp accommodation, workshops, processing facilities.',
    href: '/capabilities/mining-services',
  },
  {
    icon: Factory,
    title: 'Steel Fabrication',
    description: 'In-house structural steel fabrication delivering precision components and complete structures, on time and to spec.',
    href: '/capabilities/steel-fabrication',
  },
  {
    icon: Droplets,
    title: 'Water Storage',
    description: 'Engineered water storage for agriculture, mining, and municipal applications — from small tanks to large-scale reservoirs.',
    href: '/capabilities/water-storage',
  },
  {
    icon: Warehouse,
    title: 'Sheds',
    description: 'Premium steel buildings for farm, commercial, and industrial use — designed for Australian conditions, built to last.',
    href: '/capabilities/sheds',
  },
  {
    icon: Cylinder,
    title: 'Silos',
    description: 'Grain and commodity storage solutions — engineered for maximum capacity, minimal losses, and long service life.',
    href: '/capabilities/silos',
  },
  {
    icon: Wrench,
    title: 'Fitout & Refurbishment',
    description: 'Transforming existing spaces with commercial and industrial fitout and refurbishment, delivered with minimal disruption.',
    href: '/capabilities/fitout-refurbishment',
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        title="Capabilities"
        subtitle="Seven specialist capabilities. One trusted partner."
        breadcrumbs={[{ label: 'Capabilities' }]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 className="section-heading">What We Do</h2>
            <p className="section-subheading">
              From single-trade packages to multi-discipline, design-and-construct
              megaprojects — Ahrens has the breadth and depth to deliver.
            </p>
          </AnimatedSection>

          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {CAPABILITIES.map((cap) => (
              <m.div key={cap.href} variants={fadeInUp}>
                <Link
                  href={cap.href}
                  className="card group flex flex-col p-7 h-full hover:-translate-y-1 transition-transform duration-200"
                >
                  <cap.icon
                    className="w-10 h-10 text-brand-orange mb-5"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-bold text-brand-dark text-xl mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-brand-steel text-sm leading-relaxed flex-1">
                    {cap.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-orange font-medium text-sm">
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
