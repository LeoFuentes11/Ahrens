import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { Quote } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Team Stories',
  description: 'Real stories from the people who chose Ahrens and built careers they\'re proud of — from first-year apprentices to project directors.',
};

const STORIES = [
  {
    name: 'Sarah Mitchell',
    role: 'Project Director — Design & Construct',
    years: '14 years with Ahrens',
    quote:
      'I joined as a graduate engineer straight out of university and never looked back. Ahrens gave me the opportunity to grow into every role I wanted — from site engineer to project manager to where I am today. The projects are genuinely complex and rewarding, and the people make it feel like family.',
    progression: 'Graduate Engineer → Site Engineer → Project Manager → Project Director',
  },
  {
    name: 'Jake Ferreira',
    role: 'Leading Hand — Steel Fabrication',
    years: '6 years with Ahrens',
    quote:
      'I did my apprenticeship here and never wanted to leave. The workshop is one of the best in the country — we\'ve got the latest equipment, a great team, and we work on projects that actually matter. Being part of something that ends up as real infrastructure you can point to is a great feeling.',
    progression: 'Apprentice Fabricator → Fabricator → Senior Fabricator → Leading Hand',
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Estimator — Civil & Structural',
    years: '4 years with Ahrens',
    quote:
      'Moving to Ahrens from a smaller contractor was the best career decision I\'ve made. The variety of work is unlike anything else — one week I\'m pricing a mine site accommodation village, the next it\'s an aquatic centre. The commercial team is collaborative and the management actually listens.',
    progression: 'Estimator → Senior Estimator',
  },
  {
    name: 'Dean Kowalski',
    role: 'Site Manager — Mining Services',
    years: '9 years with Ahrens',
    quote:
      'The FIFO lifestyle suits me perfectly, and Ahrens makes it as good as it can be. The camp conditions on our mine sites are excellent, the safety culture is genuinely world-class, and I\'ve had more mentoring and development opportunities here than anywhere else in my career.',
    progression: 'Site Supervisor → Senior Supervisor → Site Manager',
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        title="Team Stories"
        subtitle="Real people. Real careers. Built with Ahrens."
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
          { label: 'Stories' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 className="section-heading">Hear from Our People</h2>
            <p className="section-subheading">
              From first-year apprentices to senior leaders — the best way to
              understand what it&apos;s like to work at Ahrens is to hear it
              directly from our team.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-8" margin="0px">
            {STORIES.map((story, index) => (
              <FadeInItem
                key={story.name}
                className={`grid lg:grid-cols-3 gap-8 p-8 rounded-sm ${
                  index % 2 === 0 ? 'bg-brand-cream' : 'bg-white border border-gray-100 shadow-card'
                }`}
              >
                <div className="lg:col-span-2">
                  <Quote
                    className="w-8 h-8 text-brand-orange mb-4"
                    aria-hidden="true"
                  />
                  <blockquote className="text-brand-steel leading-relaxed text-lg italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center text-white font-heading font-bold text-xl mb-4">
                    {story.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <p className="font-heading font-bold text-brand-dark text-lg">
                    {story.name}
                  </p>
                  <p className="text-brand-orange font-medium text-sm mt-0.5">
                    {story.role}
                  </p>
                  <p className="text-brand-smoke text-xs mt-1">{story.years}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-brand-smoke uppercase tracking-wide mb-1">
                      Career Path
                    </p>
                    <p className="text-xs text-brand-steel leading-relaxed">
                      {story.progression}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-brand-dark">
        <div className="container-xl text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Write Your Own Story
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">
            Join the thousands of Australians who have built lasting careers
            with the Ahrens Group. Browse our current openings and take the
            first step.
          </p>
          <Link href="/careers/opportunities" className="btn-primary inline-flex">
            View Opportunities
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
