import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { Droplets, Wheat, Mountain, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Storage',
  description: 'Engineered water storage solutions by Ahrens — for agriculture, mining, and municipal applications across Australia.',
};

const CATEGORIES = [
  {
    icon: Wheat,
    title: 'Agricultural',
    description: 'Farm dams, header tanks, irrigation storage, and livestock water systems designed for the demands of Australian farming.',
  },
  {
    icon: Mountain,
    title: 'Mining & Resources',
    description: 'Large-capacity water storage for process water, dust suppression, fire fighting, and potable supply on remote mine sites.',
  },
  {
    icon: Building2,
    title: 'Municipal & Commercial',
    description: 'Water storage infrastructure for councils, industrial estates, and commercial developments meeting AS/NZS standards.',
  },
];

export default function WaterStoragePage() {
  return (
    <>
      <PageHero
        title="Water Storage"
        subtitle="Engineered water storage for every Australian application."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Water Storage' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="section-heading">
              Water Solutions for a Dry Continent
            </h2>
            <p className="section-subheading mt-4">
              In Australia, water is everything. Ahrens designs and installs
              water storage solutions that stand up to our harsh climate,
              deliver long service life, and meet the regulatory requirements
              of every jurisdiction.
            </p>
          </AnimatedSection>

          <m.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CATEGORIES.map((cat) => (
              <m.div
                key={cat.title}
                variants={fadeInUp}
                className="card p-7 text-center"
              >
                <cat.icon
                  className="w-10 h-10 text-brand-orange mx-auto mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-brand-dark text-xl mb-3">
                  {cat.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">
                  {cat.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
