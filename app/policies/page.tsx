import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerContainer from '@/components/motion/StaggerContainer';
import FadeInItem from '@/components/motion/FadeInItem';
import { FileText, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Policies',
  description: 'Ahrens Group policies — safety, environment, quality, equal opportunity, and more.',
};

const POLICIES = [
  {
    title: 'Work Health & Safety Policy',
    description:
      'Ahrens is committed to the health, safety, and welfare of all employees, contractors, and visitors. This policy outlines our obligations and standards for maintaining a safe workplace.',
    category: 'Safety',
  },
  {
    title: 'Environmental Policy',
    description:
      'We recognise our responsibility to protect the environment and are committed to conducting our operations in an environmentally responsible manner that minimises impacts and promotes sustainability.',
    category: 'Environment',
  },
  {
    title: 'Quality Policy',
    description:
      'Ahrens is committed to delivering services that consistently meet or exceed client expectations. Our quality management system is certified to ISO 9001 and underpins all of our operations.',
    category: 'Quality',
  },
  {
    title: 'Equal Opportunity & Diversity Policy',
    description:
      'We are committed to providing a workplace free from discrimination, harassment, and bullying. We value diversity and believe an inclusive workplace makes us a stronger organisation.',
    category: 'People',
  },
  {
    title: 'Modern Slavery Statement',
    description:
      'Ahrens is committed to identifying and addressing modern slavery risks in our operations and supply chains. This statement sets out the steps we take to ensure ethical and responsible sourcing.',
    category: 'Governance',
  },
  {
    title: 'Reconciliation Action Plan',
    description:
      'Our Reconciliation Action Plan outlines our commitment to building respectful relationships with Aboriginal and Torres Strait Islander peoples and communities across Australia.',
    category: 'Community',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Safety: 'bg-orange-100 text-orange-800',
  Environment: 'bg-green-100 text-green-800',
  Quality: 'bg-blue-100 text-blue-800',
  People: 'bg-purple-100 text-purple-800',
  Governance: 'bg-gray-100 text-gray-700',
  Community: 'bg-yellow-100 text-yellow-800',
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Policies"
        subtitle="Our commitment to safety, integrity, and responsible business."
        breadcrumbs={[{ label: 'Policies' }]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <AnimatedSection className="mb-12">
            <h2 className="section-heading">Company Policies</h2>
            <p className="section-subheading">
              Our policies reflect the values and standards that guide
              everything we do at Ahrens.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" margin="0px">
            {POLICIES.map((policy) => (
              <FadeInItem
                key={policy.title}
                className="card p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <FileText
                    className="w-8 h-8 text-brand-orange"
                    aria-hidden="true"
                  />
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${CATEGORY_COLORS[policy.category] ?? 'bg-gray-100 text-gray-700'}`}
                  >
                    {policy.category}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-brand-dark text-lg mb-3 leading-snug">
                  {policy.title}
                </h3>

                <p className="text-sm text-brand-steel leading-relaxed flex-1">
                  {policy.description}
                </p>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-dark transition-colors"
                  aria-label={`Download ${policy.title}`}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download PDF
                </button>
              </FadeInItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-16 p-8 bg-brand-dark rounded-sm text-white text-center">
            <h3 className="font-heading font-bold text-xl mb-2">
              Questions about our policies?
            </h3>
            <p className="text-white/65 text-sm mb-5">
              If you have questions about any of our policies or need a printed
              copy, please contact our Head Office team.
            </p>
            <a
              href="mailto:info@ahrens.com.au"
              className="btn-primary inline-flex"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
