import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Brands',
  description: 'The Ahrens Group — seven specialist brands, each a market leader in its sector.',
};

const BRANDS = [
  {
    name: 'Ahrens Group',
    category: 'Construction & Engineering',
    description: 'The parent group delivering large-scale design-and-construct projects for commercial, industrial, mining, and government clients.',
    color: '#F26522',
  },
  {
    name: 'Ahrens Steel',
    category: 'Steel Fabrication',
    description: 'Precision structural steel fabrication supporting construction, mining, and industrial projects across Australia.',
    color: '#1C2531',
  },
  {
    name: 'Ahrens Water',
    category: 'Water Storage',
    description: 'Engineered water storage solutions — from farm dams to municipal reservoirs — built for Australian conditions.',
    color: '#3B82F6',
  },
  {
    name: 'Ahrens Ag',
    category: 'Agricultural Infrastructure',
    description: 'Premium sheds, silos, and rural infrastructure trusted by Australian farmers for generations.',
    color: '#65A30D',
  },
  {
    name: 'Ahrens Mining',
    category: 'Mining Services',
    description: 'Specialist construction and camp management for the resources sector, from Pilbara to Queensland.',
    color: '#78716C',
  },
  {
    name: 'RMA Contracting',
    category: 'Civil & Infrastructure',
    description: 'Civil construction, earthworks, and infrastructure contracting with a strong track record in regional Australia.',
    color: '#DC2626',
  },
  {
    name: 'Ahrens Fitout',
    category: 'Fitout & Refurbishment',
    description: 'Commercial and industrial fitout and refurbishment transforming existing spaces into high-performance environments.',
    color: '#7C3AED',
  },
];

export default function OurBrandsPage() {
  return (
    <>
      <PageHero
        title="Our Brands"
        subtitle="Seven specialist brands — one trusted group."
        breadcrumbs={[{ label: 'Our Brands' }]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 className="section-heading">The Ahrens Group</h2>
            <p className="section-subheading">
              Each brand is a market leader in its sector, backed by the
              financial strength, expertise, and values of the Ahrens Group.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <FadeInItem
                key={brand.name}
                className="card group flex flex-col p-6"
              >
                <div
                  className="w-full h-2 rounded-sm mb-5"
                  style={{ backgroundColor: brand.color }}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-brand-dark text-xl">
                      {brand.name}
                    </h3>
                    <span
                      className="text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded-sm text-white mt-1 inline-block"
                      style={{ backgroundColor: brand.color }}
                    >
                      {brand.category}
                    </span>
                  </div>
                  <ExternalLink
                    className="w-5 h-5 text-brand-mist group-hover:text-brand-orange transition-colors shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-brand-steel text-sm leading-relaxed flex-1">
                  {brand.description}
                </p>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
