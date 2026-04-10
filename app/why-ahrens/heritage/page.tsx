import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { slideInLeft, slideInRight } from '@/lib/animations';

export const metadata: Metadata = {
  title: 'Our Heritage',
  description: 'Explore the 90-year history of Ahrens — five generations of building Australia from the Barossa Valley to the nation.',
};

const MILESTONES = [
  {
    year: '1934',
    title: 'A Workshop Begins',
    description: 'Clarence Ahrens establishes a blacksmith and engineering workshop in Kingsford, South Australia, serving local farming families.',
  },
  {
    year: '1950s',
    title: 'First Steel Sheds',
    description: 'The second generation expands into steel shed construction, meeting the growing demand of post-war Australian agriculture.',
  },
  {
    year: '1967',
    title: 'Silo Manufacturing',
    description: 'Ahrens pioneers grain silo manufacturing in Australia, delivering purpose-built storage solutions to farmers across the country.',
  },
  {
    year: '1980s',
    title: 'National Expansion',
    description: 'Third-generation leadership drives national expansion, opening offices across South Australia, Western Australia, and Queensland.',
  },
  {
    year: '1990s',
    title: 'Mining Breakthrough',
    description: 'Entry into the mining and resources sector, delivering camp accommodation, workshops, and processing infrastructure for the boom.',
  },
  {
    year: '2000s',
    title: 'Design & Construct',
    description: 'Launch of full design-and-construct capability, enabling Ahrens to deliver complex, multi-discipline projects from concept to completion.',
  },
  {
    year: '2010s',
    title: 'Multi-Brand Strategy',
    description: 'The Ahrens Group expands to seven specialist brands, each a market leader in its sector, united by the Ahrens values.',
  },
  {
    year: '2020s',
    title: 'Fifth Generation',
    description: 'The fifth generation of the Ahrens family joins the business, bringing fresh energy, digital innovation, and a renewed commitment to legacy.',
  },
  {
    year: 'Today',
    title: 'Built for the Future',
    description: 'With 1,000+ team members and projects across every state, Ahrens continues to build the infrastructure Australia depends on.',
  },
];

export default function HeritagePage() {
  return (
    <>
      <PageHero
        title="Our Heritage"
        subtitle="90 years of building, innovating, and serving Australia."
        breadcrumbs={[
          { label: 'Why Ahrens', href: '/why-ahrens' },
          { label: 'Our Heritage' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="section-heading">A Legacy Built Brick by Brick</h2>
            <p className="section-subheading mx-auto mt-4">
              The Ahrens story is an Australian story — one of hard work,
              ingenuity, and an unshakeable belief that if something is worth
              doing, it&apos;s worth doing right.
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Centre line */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {MILESTONES.map((milestone, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                      isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    <AnimatedSection
                      variants={isLeft ? slideInLeft : slideInRight}
                      className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                    >
                      <div className="bg-white border border-gray-100 rounded-sm p-6 shadow-card hover:shadow-card-hover transition-shadow">
                        <span className="text-brand-orange font-heading font-bold text-2xl">
                          {milestone.year}
                        </span>
                        <h3 className="font-heading font-semibold text-brand-dark text-lg mt-1">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-brand-steel text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </AnimatedSection>

                    {/* Dot */}
                    <div
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-orange rounded-full border-4 border-white shadow"
                      aria-hidden="true"
                    />

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
