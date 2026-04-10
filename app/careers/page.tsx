import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Heart, Users, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Ahrens team — 1,000+ opportunities across construction, engineering, trades, and corporate roles across Australia.',
};

const REASONS = [
  {
    icon: TrendingUp,
    title: 'Grow Your Career',
    description: 'Structured career pathways from apprentice to site manager, with mentoring and training at every step.',
  },
  {
    icon: Heart,
    title: 'Family Values',
    description: 'A genuine family business where people are known by name, not employee number.',
  },
  {
    icon: Users,
    title: 'Diverse Teams',
    description: 'Work alongside experienced professionals from every trade and discipline on complex, exciting projects.',
  },
  {
    icon: MapPin,
    title: 'Australia-Wide',
    description: 'Opportunities in every state — regional, remote, and metropolitan projects wherever you want to work.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Build your career with Australia's most trusted construction group."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Why Join */}
      <section className="py-20 bg-white" aria-labelledby="why-join-heading">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 id="why-join-heading" className="section-heading">
              Why Join Ahrens?
            </h2>
            <p className="section-subheading">
              Be part of something that matters — projects that shape
              communities and infrastructure that lasts generations.
            </p>
          </AnimatedSection>

          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {REASONS.map((reason) => (
              <m.div
                key={reason.title}
                variants={fadeInUp}
                className="text-center p-6"
              >
                <reason.icon
                  className="w-10 h-10 text-brand-orange mx-auto mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-brand-steel leading-relaxed">
                  {reason.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-brand-cream" aria-labelledby="programs-heading">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 id="programs-heading" className="section-heading">
                Apprenticeship &amp; Graduate Programs
              </h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Ahrens runs one of Australia&apos;s most respected private
                apprenticeship programs, taking on 80+ apprentices and trainees
                annually across trades including steel fabrication, electrical,
                plumbing, carpentry, and heavy diesel.
              </p>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Our graduate engineering program provides structured rotations
                across project management, design, and site delivery — building
                well-rounded construction professionals.
              </p>
              <Link
                href="/careers/opportunities"
                className="btn-primary mt-8 inline-flex"
              >
                View Opportunities
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <Link
                href="/careers/stories"
                className="block card p-8 group hover:-translate-y-1 transition-transform duration-200"
              >
                <h3 className="font-heading font-bold text-brand-dark text-2xl mb-3">
                  Hear from Our Team
                </h3>
                <p className="text-brand-steel leading-relaxed mb-5">
                  Real stories from the people who chose Ahrens and built
                  careers they&apos;re proud of — from first-year apprentices to
                  project directors.
                </p>
                <div className="flex items-center gap-2 text-brand-orange font-medium">
                  Read Their Stories
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
