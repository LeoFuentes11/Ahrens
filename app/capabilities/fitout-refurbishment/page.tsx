import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fitout & Refurbishment',
  description: 'Commercial and industrial fitout and refurbishment by Ahrens — transforming existing spaces with minimal disruption.',
};

const SECTORS = [
  'Commercial offices and co-working spaces',
  'Retail and hospitality fitout',
  'Industrial workshop upgrades',
  'Healthcare and aged care facilities',
  'Educational facilities',
  'Government and defence buildings',
  'Hospitality and tourism venues',
  'Sports and recreation centres',
];

export default function FitoutRefurbishmentPage() {
  return (
    <>
      <PageHero
        title="Fitout & Refurbishment"
        subtitle="Transforming existing spaces into high-performance environments."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Fitout & Refurbishment' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="section-heading">
                New Performance. Existing Structure.
              </h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Ahrens Fitout & Refurbishment delivers high-quality interior
                and structural upgrades that breathe new life into existing
                buildings — minimising disruption, maximising value, and
                meeting modern compliance requirements.
              </p>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Whether it&apos;s a full strip-out and rebuild or a targeted
                upgrade to specific systems or spaces, our teams deliver with
                the same commitment to quality and programme certainty that
                defines every Ahrens project.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="font-heading font-semibold text-brand-dark text-xl mb-5">
                Sectors We Serve
              </h3>
              <m.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                role="list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {SECTORS.map((sector) => (
                  <m.li
                    key={sector}
                    variants={fadeInUp}
                    className="flex items-start gap-2 text-sm text-brand-steel"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-brand-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {sector}
                  </m.li>
                ))}
              </m.ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
