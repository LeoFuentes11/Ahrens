import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Opportunities',
  description: 'Browse current job opportunities at Ahrens — trades, engineering, project management, and corporate roles across Australia.',
};

const ROLES = [
  {
    title: 'Project Manager — Design & Construct',
    location: 'Adelaide, SA',
    type: 'Full Time',
    category: 'Management',
    description: 'Lead multi-discipline design-and-construct projects from contract award through to handover.',
  },
  {
    title: 'Structural Steel Fabricator',
    location: 'Kingsford, SA',
    type: 'Full Time',
    category: 'Trades',
    description: 'Join our fabrication workshop producing structural steel for major construction and mining projects.',
  },
  {
    title: 'Site Engineer — Mining',
    location: 'Pilbara, WA',
    type: 'FIFO — 2/1 Roster',
    category: 'Engineering',
    description: 'Provide engineering support on active mine site construction projects in the Pilbara region.',
  },
  {
    title: 'Electrical Apprentice',
    location: 'Multiple Locations',
    type: 'Apprenticeship',
    category: 'Apprenticeship',
    description: 'Begin your electrical career with one of Australia\'s largest private apprenticeship programs.',
  },
  {
    title: 'Estimator — Civil & Structural',
    location: 'Adelaide, SA',
    type: 'Full Time',
    category: 'Commercial',
    description: 'Prepare detailed estimates and tender submissions for civil and structural construction projects.',
  },
  {
    title: 'Site Supervisor — Sheds & Silos',
    location: 'Regional SA / Vic / WA',
    type: 'Full Time',
    category: 'Supervision',
    description: 'Supervise the construction of shed and silo projects across regional Australia.',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Management: 'bg-blue-100 text-blue-800',
  Trades: 'bg-orange-100 text-orange-800',
  Engineering: 'bg-green-100 text-green-800',
  Apprenticeship: 'bg-purple-100 text-purple-800',
  Commercial: 'bg-yellow-100 text-yellow-800',
  Supervision: 'bg-gray-100 text-gray-800',
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        title="Opportunities"
        subtitle="Find your next role with the Ahrens Group."
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
          { label: 'Opportunities' },
        ]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 className="section-heading">Current Openings</h2>
            <p className="section-subheading">
              We&apos;re always looking for talented people to join our team.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-4" margin="0px">
            {ROLES.map((role) => (
              <FadeInItem
                key={role.title}
                className="bg-white rounded-sm shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${CATEGORY_COLORS[role.category] ?? 'bg-gray-100 text-gray-800'}`}
                    >
                      {role.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark text-lg">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-steel">{role.description}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-brand-smoke">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary text-sm shrink-0 whitespace-nowrap"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </FadeInItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 p-8 bg-brand-dark rounded-sm text-white text-center">
            <h3 className="font-heading font-bold text-xl mb-2">
              Don&apos;t see the right role?
            </h3>
            <p className="text-white/65 text-sm mb-5">
              We&apos;re always interested in hearing from talented people.
              Send us your resume and we&apos;ll keep you in mind for future
              opportunities.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
