import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { GraduationCap, TrendingUp, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our People',
  description: 'Meet the people behind Ahrens — 1,000+ team members committed to excellence, safety, and building Australia.',
};

const STATS = [
  { value: '1,000+', label: 'Team Members' },
  { value: '80+', label: 'Apprentices & Trainees' },
  { value: '25+', label: 'Years Average Experience' },
  { value: '40+', label: 'Specialist Trades' },
];

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: 'Apprenticeships',
    description: 'We invest in the next generation of tradespeople, running one of Australia\'s largest private apprenticeship programs.',
  },
  {
    icon: TrendingUp,
    title: 'Leadership Development',
    description: 'Structured pathways from the tools to senior leadership, with mentoring, training, and real responsibility.',
  },
  {
    icon: Heart,
    title: 'Wellbeing Programs',
    description: 'Employee Assistance Program, mental health support, and a culture that looks after the whole person.',
  },
  {
    icon: Users,
    title: 'Diversity & Inclusion',
    description: 'We\'re building a workforce that reflects the Australia we build for — diverse, inclusive, and equitable.',
  },
];

export default function PeoplePage() {
  return (
    <>
      <PageHero
        title="Our People"
        subtitle="Our most important asset — 1,000 extraordinary Australians."
        breadcrumbs={[
          { label: 'Why Ahrens', href: '/why-ahrens' },
          { label: 'Our People' },
        ]}
      />

      {/* Stats */}
      <section className="py-16 bg-brand-orange" aria-label="People statistics">
        <div className="container-xl">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center" margin="0px">
            {STATS.map((stat) => (
              <FadeInItem key={stat.label}>
                <div className="text-4xl font-heading font-bold">{stat.value}</div>
                <div className="mt-1 text-white/80 text-sm">{stat.label}</div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white" aria-labelledby="programs-heading">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 id="programs-heading" className="section-heading">
              Investing in People
            </h2>
            <p className="section-subheading">
              From apprenticeships to executive leadership, we grow people at every level.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROGRAMS.map((program) => (
              <FadeInItem
                key={program.title}
                className="flex gap-5 p-6 border border-gray-100 rounded-sm hover:border-brand-orange/30 transition-colors"
              >
                <program.icon
                  className="w-8 h-8 text-brand-orange shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading font-semibold text-brand-dark text-lg">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-brand-steel text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
