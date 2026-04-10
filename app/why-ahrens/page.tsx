import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Shield, ShieldCheck, Heart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';

export const metadata: Metadata = {
  title: 'Why Ahrens',
  description: 'Discover the story, values, and people behind five generations of Australian construction and engineering excellence.',
};

const PILLARS = [
  {
    icon: Clock,
    title: 'Our Heritage',
    description: 'From a small workshop in Kingsford to a national construction powerhouse — explore 90 years of the Ahrens story.',
    href: '/why-ahrens/heritage',
    cta: 'Explore Heritage',
  },
  {
    icon: Users,
    title: 'Our People',
    description: 'Our greatest asset is our people. Meet the team driving innovation and excellence across every project.',
    href: '/why-ahrens/people',
    cta: 'Meet Our People',
  },
  {
    icon: Shield,
    title: 'Our Strength',
    description: 'Financial stability, national capability, and in-house expertise give Ahrens an unmatched edge.',
    href: '/why-ahrens/strength',
    cta: 'Our Strength',
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description: 'Zero Harm is not a target — it\'s our culture. Safety underpins every decision we make.',
    href: '/why-ahrens/safety',
    cta: 'Safety Culture',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'We invest in the towns and regions where we operate, supporting youth, health, and local initiatives.',
    href: '/why-ahrens/community',
    cta: 'Our Community',
  },
];

export default function WhyAhrensPage() {
  return (
    <>
      <PageHero
        title="Why Ahrens"
        subtitle="Five generations of trust, expertise, and commitment to building Australia."
        breadcrumbs={[{ label: 'Why Ahrens' }]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">The Ahrens Difference</h2>
            <p className="section-subheading mx-auto mt-4">
              When you choose Ahrens, you choose a partner with the depth of
              expertise, the financial strength, and the family values to
              deliver — no matter the project size or complexity.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <FadeInItem key={pillar.href}>
                <Link
                  href={pillar.href}
                  className="card group flex flex-col p-8 h-full hover:-translate-y-1 transition-transform duration-200"
                >
                  <pillar.icon
                    className="w-10 h-10 text-brand-orange mb-5"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-bold text-brand-dark text-xl mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-steel text-sm leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-orange font-medium text-sm">
                    {pillar.cta}
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
