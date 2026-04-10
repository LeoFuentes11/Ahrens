import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sheds',
  description: 'Premium steel sheds by Ahrens — engineered for Australian conditions and built to last for farm, commercial, and industrial applications.',
};

const FEATURES = [
  'Custom engineering to site conditions and wind ratings',
  'Full range of sizes — from 6m to 30m+ wide',
  'Insulation, roller doors, and skylights available',
  'Concrete slab coordination and supply',
  'Mezzanine floors and internal fit-out',
  'Online quote and configuration tool',
  'Factory-direct pricing with no middlemen',
  'Nationwide installation by Ahrens teams',
];

export default function ShedsPage() {
  return (
    <>
      <PageHero
        title="Sheds"
        subtitle="Built tough. Built to last. Built for Australia."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Sheds' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="section-heading">
                Australia&apos;s Trusted Shed Builder
              </h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                For generations, Australian farmers and businesses have trusted
                Ahrens for sheds that work as hard as they do. Engineered for
                our harshest conditions — from the tropical north to the
                blustery south — an Ahrens shed is a lifetime investment.
              </p>
              <p className="mt-4 text-brand-steel leading-relaxed">
                From machinery sheds and hay sheds to commercial warehouses and
                industrial workshops, we engineer every building to your site
                conditions, local wind ratings, and council requirements.
              </p>

              <div className="mt-8 p-6 bg-brand-dark rounded-sm text-white">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Get a Free Quote
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Tell us what you need and we&apos;ll give you a detailed price within 48 hours.
                </p>
                <Link href="/contact" className="btn-primary text-sm inline-flex">
                  Request Quote
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="font-heading font-semibold text-brand-dark text-xl mb-5">
                What&apos;s Included
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
