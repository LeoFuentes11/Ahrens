import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { Tent, Wrench, Building2, Truck, Zap, Droplets } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mining Services',
  description: 'Specialist construction and infrastructure solutions for the Australian resources sector — camp accommodation, workshops, processing facilities.',
};

const SERVICES = [
  {
    icon: Tent,
    title: 'Camp Accommodation',
    description: 'Full-service remote accommodation villages with catering, recreation, and facilities management for mining workforces.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Workshops',
    description: 'Heavy maintenance workshops and light vehicle workshops designed for the demands of the resources sector.',
  },
  {
    icon: Building2,
    title: 'Processing Facilities',
    description: 'Structural steel and civil works for processing plants, conveyors, and materials handling infrastructure.',
  },
  {
    icon: Truck,
    title: 'Laydown & Logistics',
    description: 'Hard stand areas, laydown yards, fuel storage, and logistics infrastructure for major project sites.',
  },
  {
    icon: Zap,
    title: 'Electrical & Mechanical',
    description: 'Full electrical and mechanical installation and commissioning for mining and processing infrastructure.',
  },
  {
    icon: Droplets,
    title: 'Water & Utilities',
    description: 'Water treatment, storage, and reticulation systems for remote mine sites and processing facilities.',
  },
];

export default function MiningServicesPage() {
  return (
    <>
      <PageHero
        title="Mining Services"
        subtitle="Built for the resources sector. Built to perform."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Mining Services' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <h2 className="section-heading">
              Trusted by Australia&apos;s Miners
            </h2>
            <p className="section-subheading mt-4">
              Ahrens has been delivering specialist construction and
              infrastructure for the Australian resources sector for decades.
              From the Pilbara to the Cooper Basin, our teams understand the
              unique demands of remote, operational mine sites.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <FadeInItem
                key={service.title}
                className="border-l-4 border-brand-orange pl-5 py-4"
              >
                <service.icon
                  className="w-7 h-7 text-brand-orange mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">
                  {service.description}
                </p>
              </FadeInItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-16 text-center">
            <Link href="/contact" className="btn-primary inline-flex">
              Discuss Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
