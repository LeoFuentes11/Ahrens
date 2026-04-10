'use client';

import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Star, Stethoscope, Mountain, Leaf, Brain, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Ahrens invests in the communities where we live and work — from youth programs to First Nations partnerships.',
};

const PILLARS = [
  {
    icon: Star,
    title: 'Kickstart for Kids',
    description: 'Our flagship youth program provides mentorship, work experience, and scholarships to young Australians in regional communities.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Research',
    description: 'We fund cutting-edge medical research in South Australia, with a focus on conditions affecting rural and regional Australians.',
  },
  {
    icon: Mountain,
    title: 'Duke of Edinburgh',
    description: 'Supporting the Duke of Edinburgh Award program to build character, resilience, and leadership in young Australians.',
  },
  {
    icon: Users,
    title: 'First Nations Partnership',
    description: 'Our Reconciliation Action Plan guides genuine partnerships with First Nations businesses, communities, and individuals.',
  },
  {
    icon: Brain,
    title: 'Mental Health',
    description: 'We support mental health initiatives for regional Australians, including R U OK? and beyond blue partnerships.',
  },
  {
    icon: Leaf,
    title: 'Environment',
    description: 'Investing in sustainable practices, native habitat restoration, and environmental stewardship across our operations.',
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community"
        subtitle="We build more than structures — we build the communities around them."
        breadcrumbs={[
          { label: 'Why Ahrens', href: '/why-ahrens' },
          { label: 'Community' },
        ]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="section-heading">Giving Back to Regional Australia</h2>
            <p className="section-subheading mt-4">
              The Ahrens family has always believed that business success comes
              with a responsibility to give back. From the Barossa Valley to the
              Pilbara, we invest in the towns and regions that make us who we are.
            </p>
          </AnimatedSection>

          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PILLARS.map((pillar) => (
              <m.div
                key={pillar.title}
                variants={fadeInUp}
                className="bg-white p-7 rounded-sm shadow-card hover:shadow-card-hover transition-shadow"
              >
                <pillar.icon
                  className="w-9 h-9 text-brand-orange mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
