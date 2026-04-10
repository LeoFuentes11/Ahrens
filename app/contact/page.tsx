import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Ahrens Group — enquiries, tenders, careers, and general contact information for our offices across Australia.',
};

const OFFICES = [
  {
    name: 'Head Office — Kingsford',
    address: '1 Ahrens Drive, Kingsford SA 5118',
    phone: '(08) 8527 8000',
    email: 'info@ahrens.com.au',
    hours: 'Mon–Fri 7:30am–5:00pm ACST',
  },
  {
    name: 'Adelaide Office',
    address: 'Level 2, 97 Pirie Street, Adelaide SA 5000',
    phone: '(08) 8527 8100',
    email: 'adelaide@ahrens.com.au',
    hours: 'Mon–Fri 8:00am–5:00pm ACST',
  },
  {
    name: 'Perth Office',
    address: '45 Ventnor Avenue, West Perth WA 6005',
    phone: '(08) 9480 2000',
    email: 'perth@ahrens.com.au',
    hours: 'Mon–Fri 8:00am–5:00pm AWST',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — whether it's a tender, a project enquiry, or a career question."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 bg-brand-cream">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="section-heading mb-8">Send Us a Message</h2>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Offices */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="section-heading mb-8">Our Offices</h2>
                <div className="space-y-6">
                  {OFFICES.map((office) => (
                    <div key={office.name} className="card p-6">
                      <h3 className="font-heading font-semibold text-brand-dark mb-4">
                        {office.name}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm text-brand-steel">
                          <MapPin
                            className="w-4 h-4 text-brand-orange shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          {office.address}
                        </li>
                        <li className="flex items-center gap-3 text-sm text-brand-steel">
                          <Phone
                            className="w-4 h-4 text-brand-orange shrink-0"
                            aria-hidden="true"
                          />
                          <a
                            href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {office.phone}
                          </a>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-brand-steel">
                          <Mail
                            className="w-4 h-4 text-brand-orange shrink-0"
                            aria-hidden="true"
                          />
                          <a
                            href={`mailto:${office.email}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {office.email}
                          </a>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-brand-steel">
                          <Clock
                            className="w-4 h-4 text-brand-orange shrink-0"
                            aria-hidden="true"
                          />
                          {office.hours}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
