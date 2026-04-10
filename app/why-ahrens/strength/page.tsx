import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { Building2, Wrench, MapPin, TrendingUp, Users, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Strength',
  description: 'Discover the financial, operational, and technical strengths that set Ahrens apart as a national construction leader.',
};

const STRENGTHS = [
  {
    icon: Building2,
    title: 'Financial Stability',
    description: 'Family-owned and debt-free. Our financial independence means we can commit to long-term projects and weather market cycles without disruption.',
  },
  {
    icon: Wrench,
    title: 'In-House Capabilities',
    description: 'From steel fabrication to civil construction, our vertically integrated model means less subcontracting, better quality, and faster delivery.',
  },
  {
    icon: MapPin,
    title: 'National Footprint',
    description: 'Offices and operations in every state and territory, with the local knowledge and relationships that matter on every project.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Over $2 billion in projects delivered on time and on budget, across sectors from mining to healthcare to defence.',
  },
  {
    icon: Users,
    title: 'Deep Expertise',
    description: 'Over 1,000 highly skilled professionals — engineers, project managers, tradespeople, and specialists — all under one roof.',
  },
  {
    icon: Layers,
    title: 'Multi-Discipline Delivery',
    description: 'The ability to self-perform across structural steel, civil, mechanical, electrical, and fit-out — reducing risk and programme time.',
  },
];

export default function StrengthPage() {
  return (
    <>
      <PageHero
        title="Our Strength"
        subtitle="The financial, operational, and technical foundations that set Ahrens apart."
        breadcrumbs={[
          { label: 'Why Ahrens', href: '/why-ahrens' },
          { label: 'Our Strength' },
        ]}
      />

      {/* Stats Row */}
      <section className="py-10 bg-brand-orange" aria-label="Strength statistics">
        <div className="container-xl">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center" margin="0px">
            {[
              { value: '$2B+', label: 'Projects Delivered' },
              { value: '90+', label: 'Years in Business' },
              { value: 'Debt-Free', label: 'Financial Position' },
              { value: 'All States', label: 'National Coverage' },
            ].map((stat) => (
              <FadeInItem key={stat.label}>
                <div className="text-3xl font-heading font-bold">{stat.value}</div>
                <div className="mt-1 text-white/80 text-sm">{stat.label}</div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Strength Cards */}
      <section className="py-20 bg-white" aria-labelledby="strength-cards-heading">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 id="strength-cards-heading" className="section-heading">
              Built on Solid Foundations
            </h2>
            <p className="section-subheading">
              The pillars that make Ahrens the right choice for complex, large-scale projects.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((strength) => (
              <FadeInItem
                key={strength.title}
                className="p-6 border border-gray-100 rounded-sm hover:border-brand-orange/30 hover:shadow-card-hover transition-all"
              >
                <strength.icon
                  className="w-8 h-8 text-brand-orange mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">
                  {strength.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">
                  {strength.description}
                </p>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
