import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { ShieldCheck, Award, ClipboardCheck, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safety',
  description: 'Zero Harm is the Ahrens safety culture — every person, every site, every day.',
};

const CERTS = [
  { icon: Award, title: 'ISO 45001', description: 'Occupational Health & Safety Management Systems' },
  { icon: Award, title: 'ISO 9001', description: 'Quality Management Systems' },
  { icon: Award, title: 'ISO 14001', description: 'Environmental Management Systems' },
  { icon: Award, title: 'OFSC', description: 'Oil & Gas Contractor Safety System' },
];

const COMMITMENTS = [
  'All personnel trained and inducted before site access',
  'Daily pre-start meetings on every site',
  'Hazard identification and risk assessment for every task',
  'Near-miss reporting encouraged and acted upon',
  'Regular safety audits by independent reviewers',
  'Mental health and fatigue management programs',
  'Emergency response planning for every project',
  'Continuous improvement through incident analysis',
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        title="Safety"
        subtitle="Every person. Every site. Every day. Zero Harm."
        breadcrumbs={[
          { label: 'Why Ahrens', href: '/why-ahrens' },
          { label: 'Safety' },
        ]}
      />

      {/* Zero Harm Banner */}
      <section className="py-16 bg-brand-orange">
        <div className="container-xl text-center text-white">
          <AnimatedSection>
            <ShieldCheck className="w-16 h-16 mx-auto mb-4 opacity-90" aria-hidden="true" />
            <h2 className="text-4xl font-heading font-bold">Zero Harm</h2>
            <p className="mt-3 text-white/85 text-lg max-w-2xl mx-auto">
              Zero Harm is not a KPI. It is the deeply held belief that every
              person on our sites deserves to return home safe and healthy —
              without exception.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white" aria-labelledby="certs-heading">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 id="certs-heading" className="section-heading">
              Certifications
            </h2>
            <p className="section-subheading">
              Independently verified management systems across safety, quality, and environment.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" margin="0px">
            {CERTS.map((cert) => (
              <FadeInItem
                key={cert.title}
                className="card p-6 text-center"
              >
                <cert.icon className="w-10 h-10 text-brand-orange mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-brand-dark text-xl">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-brand-steel">{cert.description}</p>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-brand-cream" aria-labelledby="commitments-heading">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 id="commitments-heading" className="section-heading">
              Our Safety Commitments
            </h2>
          </AnimatedSection>
          <StaggerContainer as="ul" className="grid grid-cols-1 sm:grid-cols-2 gap-4" margin="0px">
            {COMMITMENTS.map((commitment) => (
              <FadeInItem
                as="li"
                key={commitment}
                className="flex items-start gap-3 p-4 bg-white rounded-sm border border-gray-100"
              >
                <ClipboardCheck
                  className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-brand-steel">{commitment}</span>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="container-xl">
          <AnimatedSection>
            <AlertTriangle className="w-10 h-10 text-brand-orange mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-heading font-bold">Report a Safety Concern</h2>
            <p className="mt-3 text-white/65 max-w-md mx-auto text-sm">
              If you see something unsafe on an Ahrens site, please report it
              immediately. Your report will be treated confidentially and acted
              upon.
            </p>
            <a
              href="mailto:safety@ahrens.com.au"
              className="btn-primary mt-6 inline-flex"
            >
              safety@ahrens.com.au
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
