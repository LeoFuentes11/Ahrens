import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Silos',
  description: 'Grain and commodity storage silos by Ahrens — engineered for maximum capacity, minimal losses, and long service life.',
};

const FEATURES = [
  'Corrugated grain silos from 20t to 10,000t+',
  'Smooth-wall silos for specialty grains and commodities',
  'Aeration, fumigation, and temperature monitoring systems',
  'Conveying and auger systems for fast fill and empty',
  'Grain shields and weatherproof lids',
  'Concrete flooring and footings',
  'Full installation by Ahrens field crews',
  'Compliant with AS 1170 and relevant Australian standards',
];

export default function SilosPage() {
  return (
    <>
      <PageHero
        title="Silos"
        subtitle="Protecting your harvest. Maximising your storage."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Silos' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="section-heading">
                Built for the Australian Harvest
              </h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Since the 1960s, Ahrens has been at the forefront of grain
                storage in Australia. Our silos protect millions of tonnes of
                grain each year, helping farmers maximise the value of their
                harvest by storing on-farm until market conditions are right.
              </p>
              <p className="mt-4 text-brand-steel leading-relaxed">
                From a single on-farm silo to a full commercial grain receival
                facility, we engineer every system for maximum capacity,
                ease of management, and long service life in Australian
                conditions.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Get a Silo Quote
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="font-heading font-semibold text-brand-dark text-xl mb-5">
                Silo Features &amp; Options
              </h3>
              <ul className="space-y-3" role="list">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-brand-steel">
                    <CheckCircle2
                      className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
