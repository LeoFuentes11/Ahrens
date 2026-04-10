import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Steel Fabrication',
  description: 'In-house structural steel fabrication by Ahrens — precision engineering, on-time delivery, and uncompromising quality.',
};

const CAPABILITIES = [
  'Structural steel frames and columns',
  'Mezzanine floors and platforms',
  'Conveyor structures and walkways',
  'Mine site equipment and access structures',
  'Bridge girders and portal frames',
  'Pressure vessels and tanks',
  'Custom fabrication to specification',
  'Hot-dip galvanising coordination',
];

export default function SteelFabricationPage() {
  return (
    <>
      <PageHero
        title="Steel Fabrication"
        subtitle="Precision in-house steel fabrication for construction, mining, and industry."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Steel Fabrication' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="section-heading">
                Made in Australia. Built to Spec.
              </h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Ahrens operates one of South Australia&apos;s largest structural
                steel fabrication facilities. Our in-house capability means
                tighter quality control, faster turnaround, and direct
                integration with our construction teams.
              </p>
              <p className="mt-4 text-brand-steel leading-relaxed">
                We fabricate for our own projects and for external clients
                across the construction, mining, and industrial sectors — from
                simple components to complex, high-spec assemblies.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Request a Quote
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="font-heading font-semibold text-brand-dark text-xl mb-5">
                Fabrication Capabilities
              </h3>
              <ul className="space-y-3" role="list">
                {CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-center gap-3 text-sm text-brand-steel">
                    <CheckCircle2
                      className="w-5 h-5 text-brand-orange shrink-0"
                      aria-hidden="true"
                    />
                    {cap}
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
