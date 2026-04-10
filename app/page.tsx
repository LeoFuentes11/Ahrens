import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HardHat, Mountain, Factory, Droplets, Warehouse, Cylinder, Wrench } from 'lucide-react';
import HeroHome from '@/components/HeroHome';
import StatsTicker from '@/components/StatsTicker';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterForm from '@/components/NewsletterForm';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations';
import { m } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Ahrens — Built to Last',
  description:
    'Five generations of building Australia. Construction, engineering, mining services, and rural infrastructure since 1934.',
};

const CAPABILITIES = [
  {
    icon: HardHat,
    title: 'Design & Construct',
    description: 'End-to-end project delivery from concept through to handover across commercial, industrial, and rural sectors.',
    href: '/capabilities/design-construct',
  },
  {
    icon: Mountain,
    title: 'Mining Services',
    description: 'Specialist construction and infrastructure solutions for the resources sector across Australia.',
    href: '/capabilities/mining-services',
  },
  {
    icon: Factory,
    title: 'Steel Fabrication',
    description: 'In-house structural steel fabrication with precision engineering and tight delivery schedules.',
    href: '/capabilities/steel-fabrication',
  },
  {
    icon: Droplets,
    title: 'Water Storage',
    description: 'Engineered water storage solutions for agriculture, mining, and municipal applications.',
    href: '/capabilities/water-storage',
  },
  {
    icon: Warehouse,
    title: 'Sheds',
    description: 'Premium steel sheds engineered for Australian conditions — farm, commercial, and industrial.',
    href: '/capabilities/sheds',
  },
  {
    icon: Cylinder,
    title: 'Silos',
    description: 'Grain and commodity storage silos built to maximise capacity and protect your harvest.',
    href: '/capabilities/silos',
  },
  {
    icon: Wrench,
    title: 'Fitout & Refurbishment',
    description: 'Transforming existing buildings with high-quality fitout and refurbishment services.',
    href: '/capabilities/fitout-refurbishment',
  },
];

const VALUES = [
  { title: 'Family Legacy', description: 'Five generations of the Ahrens family have poured their hearts into building Australia.' },
  { title: 'Australian Made', description: 'Proudly designed, engineered, and fabricated in Australia for Australian conditions.' },
  { title: 'Zero Harm', description: 'Safety is not negotiable. Every person goes home safe — every day.' },
  { title: 'Community First', description: 'We invest in the communities where we live and work, across rural and regional Australia.' },
];

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <StatsTicker />

      {/* Capabilities Grid */}
      <section className="py-20 bg-brand-cream" aria-labelledby="capabilities-heading">
        <div className="container-xl">
          <AnimatedSection>
            <h2 id="capabilities-heading" className="section-heading">
              What We Build
            </h2>
            <p className="section-subheading">
              Decades of specialist expertise across construction, engineering,
              and infrastructure.
            </p>
          </AnimatedSection>

          <m.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {CAPABILITIES.map((cap) => (
              <m.div key={cap.href} variants={scaleIn}>
                <Link
                  href={cap.href}
                  className="card group flex flex-col p-6 h-full hover:-translate-y-1 transition-transform duration-200"
                >
                  <cap.icon
                    className="w-8 h-8 text-brand-orange mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-brand-steel text-sm leading-relaxed flex-1">
                    {cap.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-brand-orange text-sm font-medium">
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 id="values-heading" className="section-heading">
                Built on Values. Driven by Purpose.
              </h2>
              <p className="mt-4 text-brand-steel leading-relaxed">
                Since 1934, the Ahrens family has built more than structures —
                they&apos;ve built relationships, communities, and a legacy that
                spans five generations. Our values are not a poster on a wall.
                They are the reason we show up every day.
              </p>
              <Link href="/why-ahrens" className="btn-primary mt-8 inline-flex">
                Our Story
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </AnimatedSection>

            <m.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {VALUES.map((val) => (
                <m.div
                  key={val.title}
                  variants={fadeInUp}
                  className="p-6 border border-gray-100 rounded-sm hover:border-brand-orange/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <h3 className="font-heading font-semibold text-brand-dark mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-brand-steel leading-relaxed">
                    {val.description}
                  </p>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="bg-brand-dark py-20" aria-labelledby="heritage-heading">
        <div className="container-xl text-center">
          <AnimatedSection>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Est. 1934
            </p>
            <h2 id="heritage-heading" className="text-4xl md:text-5xl font-heading font-bold text-white text-balance">
              90 Years of Building Australia
            </h2>
            <p className="mt-5 text-white/65 text-lg max-w-2xl mx-auto">
              From a single shed in the Barossa Valley to a national powerhouse
              — the Ahrens story is one of grit, innovation, and an unwavering
              commitment to quality.
            </p>
            <Link href="/why-ahrens/heritage" className="btn-primary mt-8 inline-flex">
              Explore Our Heritage
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-20 bg-brand-cream" aria-labelledby="projects-heading">
        <div className="container-xl">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 id="projects-heading" className="section-heading">
                  Recent Projects
                </h2>
                <p className="section-subheading">
                  See what we&apos;ve built across Australia.
                </p>
              </div>
              <Link href="/projects" className="btn-secondary shrink-0">
                All Projects
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          <m.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              {
                title: 'Prominent Hill Mine Village',
                category: 'Mining Services',
                value: '$45M',
                location: 'South Australia',
              },
              {
                title: 'Murray Bridge Regional Aquatic Centre',
                category: 'Design & Construct',
                value: '$28M',
                location: 'South Australia',
              },
              {
                title: 'Bungama Grain Storage Expansion',
                category: 'Silos',
                value: '$12M',
                location: 'South Australia',
              },
            ].map((project) => (
              <m.div
                key={project.title}
                variants={fadeInUp}
                className="card group overflow-hidden"
              >
                <div className="bg-brand-dark/10 h-48 flex items-end p-5 relative">
                  <span className="text-xs font-semibold bg-brand-orange text-white px-2 py-1 rounded-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-brand-dark">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-brand-steel">{project.location}</span>
                    <span className="text-sm font-semibold text-brand-orange">{project.value}</span>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}
