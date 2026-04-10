import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { m } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore the Ahrens project portfolio — major construction, engineering, and infrastructure projects delivered across Australia.',
};

const PROJECTS = [
  {
    title: 'Prominent Hill Mine Village',
    category: 'Mining Services',
    value: '$45M',
    location: 'Prominent Hill, SA',
    description: 'Full design and construction of a 600-person accommodation village for OZ Minerals, including dining, recreation, medical, and facilities management.',
    year: '2023',
  },
  {
    title: 'Murray Bridge Regional Aquatic Centre',
    category: 'Design & Construct',
    value: '$28M',
    location: 'Murray Bridge, SA',
    description: 'State-of-the-art regional aquatic facility featuring 50m pool, learn-to-swim pools, and full amenities delivered for the Rural City of Murray Bridge.',
    year: '2022',
  },
  {
    title: 'Bungama Grain Storage Expansion',
    category: 'Silos',
    value: '$12M',
    location: 'Bungama, SA',
    description: 'Major grain storage expansion adding 150,000 tonnes of capacity for a regional grain handler, including receival, conveying, and aeration systems.',
    year: '2023',
  },
  {
    title: 'Wheatbelt Logistics Hub',
    category: 'Steel Fabrication',
    value: '$8M',
    location: 'Merredin, WA',
    description: 'Large-span steel warehouse complex for a national logistics operator, including mezzanine floors, dock levellers, and full site services.',
    year: '2022',
  },
  {
    title: 'South East Water Treatment Facility',
    category: 'Water Storage',
    value: '$6M',
    location: 'Mount Gambier, SA',
    description: 'Water treatment and storage infrastructure upgrade for SA Water, including new tanks, pipework, and control systems.',
    year: '2021',
  },
  {
    title: 'Port Augusta Solar Farm O&M Facility',
    category: 'Design & Construct',
    value: '$5M',
    location: 'Port Augusta, SA',
    description: 'Operations and maintenance facility for a 315MW solar farm, including workshop, warehouse, offices, and battery storage infrastructure.',
    year: '2021',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Major construction and engineering projects delivered across Australia."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 className="section-heading">Our Portfolio</h2>
            <p className="section-subheading">
              A selection of projects that demonstrate the breadth and scale of
              Ahrens capabilities.
            </p>
          </AnimatedSection>

          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PROJECTS.map((project) => (
              <m.article
                key={project.title}
                variants={fadeInUp}
                className="card flex flex-col overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="bg-brand-dark/10 h-48 relative flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-brand-orange text-white px-2 py-1 rounded-sm uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-white/80 bg-brand-dark/60 px-2 py-1 rounded-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-brand-dark text-lg leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-sm text-brand-smoke">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-brand-steel leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-brand-smoke">Contract Value</span>
                    <span className="font-heading font-bold text-brand-orange text-lg">
                      {project.value}
                    </span>
                  </div>
                </div>
              </m.article>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
}
