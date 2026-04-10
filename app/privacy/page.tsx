import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Ahrens Group privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto prose prose-brand">
            <p className="text-brand-smoke text-sm mb-8">
              Last updated: January 2025
            </p>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              Ahrens Group Pty Ltd (&ldquo;Ahrens&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your personal information in accordance
              with the Privacy Act 1988 (Cth) and the Australian Privacy
              Principles (APPs).
            </p>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-brand-steel space-y-2 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company or organisation name</li>
              <li>Enquiry details and correspondence</li>
              <li>Employment applications and resume information</li>
              <li>
                Website usage data (IP address, browser type, pages visited)
              </li>
            </ul>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              We use your personal information to:
            </p>
            <ul className="list-disc list-inside text-brand-steel space-y-2 mb-4">
              <li>Respond to enquiries and provide requested information</li>
              <li>Process employment applications</li>
              <li>Send newsletters and updates you have subscribed to</li>
              <li>Improve our website and services</li>
              <li>
                Comply with legal obligations and regulatory requirements
              </li>
            </ul>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              4. Disclosure of Information
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-brand-steel space-y-2 mb-4">
              <li>
                Service providers who assist in operating our business (subject
                to confidentiality obligations)
              </li>
              <li>
                Related entities within the Ahrens Group for internal purposes
              </li>
              <li>
                Regulatory authorities where required by law
              </li>
            </ul>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              5. Data Security
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              We take reasonable steps to protect your personal information from
              misuse, interference, loss, and unauthorised access, modification,
              or disclosure. Our website uses SSL encryption for data
              transmission.
            </p>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              6. Access and Correction
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              You have the right to access and correct the personal information
              we hold about you. To request access or correction, please contact
              our Privacy Officer at{' '}
              <a
                href="mailto:privacy@ahrens.com.au"
                className="text-brand-orange hover:underline"
              >
                privacy@ahrens.com.au
              </a>
              .
            </p>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              7. Cookies
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              Our website uses cookies to enhance your browsing experience.
              Cookies are small files stored on your device that help us
              understand how you use our website. You may disable cookies
              through your browser settings, though this may affect some website
              functionality.
            </p>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a revised &ldquo;Last
              updated&rdquo; date.
            </p>

            <h2 className="font-heading font-bold text-brand-dark text-2xl mt-8 mb-4">
              9. Contact Us
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              For privacy-related enquiries or complaints, please contact:
            </p>
            <address className="not-italic text-brand-steel leading-relaxed">
              <strong className="text-brand-dark">Privacy Officer</strong>
              <br />
              Ahrens Group Pty Ltd
              <br />
              1 Ahrens Drive, Kingsford SA 5118
              <br />
              Email:{' '}
              <a
                href="mailto:privacy@ahrens.com.au"
                className="text-brand-orange hover:underline"
              >
                privacy@ahrens.com.au
              </a>
              <br />
              Phone: (08) 8527 8000
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
