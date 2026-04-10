import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { ClipboardList, PenTool, HardHat, Wrench, CheckCircle2, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design & Construct',
  description: 'End-to-end design and construct project delivery by Ahrens — from concept to handover across commercial, industrial, mining, and rural sectors.',
};

const SECTORS = [
  'Commercial & Retail',
  'Industrial & Manufacturing',
  'Mining & Resources',
  'Agricultural & Rural',
  'Government & Defence',
  'Healthcare & Education',
  'Logistics & Warehousing',
  'Sport & Recreation',
];

const PROCESS = [
  { icon: ClipboardList, step: '01', title: 'Discovery', description: 'Understanding your brief, constraints, and aspirations in detail.' },
  { icon: PenTool, step: '02', title: 'Design', description: 'Our in-house design team develops concepts, plans, and specifications.' },
  { icon: HardHat, step: '03', title: 'Approval', description: 'We manage all planning, permitting, and regulatory approvals.' },
  { icon: Factory, step: '04', title: 'Construction', description: 'Ahrens self-performs key trades for speed, quality, and programme control.' },
  { icon: Key, step: '05', title: 'Handover', description: 'Comprehensive commissioning, training, and defects liability management.' },
];

function Factory(props: React.ComponentProps<typeof ClipboardList>) {
  return <HardHat {...props} />;
}

export default function DesignConstructPage() {
  return (
    <>
      <PageHero
        title="Design & Construct"
        subtitle="One partner. One contract. Complete project delivery."
        breadcrumbs={[
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Design & Construct' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="section-heading">Single-Point Accountability</h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                With Ahrens as your design-and-construct partner, you deal with
                one team, sign one contract, and have one point of
                accountability — from concept through to the day you walk
                through the door of your new facility.
              </p>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Our integrated model means design and construction happen in
                parallel, compressing programmes and reducing the risk of
                costly late-stage design changes.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="font-heading font-semibold text-brand-dark text-xl mb-5">
                Sectors We Serve
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                {SECTORS.map((sector) => (
                  <li key={sector} className="flex items-center gap-2 text-sm text-brand-steel">
                    <CheckCircle2
                      className="w-4 h-4 text-brand-orange shrink-0"
                      aria-hidden="true"
                    />
                    {sector}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-brand-cream" aria-labelledby="process-heading">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 id="process-heading" className="section-heading">
              Our Delivery Process
            </h2>
          </AnimatedSection>
          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROCESS.map((step) => (
              <m.div
                key={step.step}
                variants={fadeInUp}
                className="bg-white p-6 rounded-sm shadow-card text-center"
              >
                <div className="text-4xl font-heading font-bold text-brand-orange/20 mb-2">
                  {step.step}
                </div>
                <step.icon
                  className="w-8 h-8 text-brand-orange mx-auto mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-brand-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-steel leading-relaxed">
                  {step.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
