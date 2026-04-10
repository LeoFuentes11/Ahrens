import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Facebook, Youtube } from 'lucide-react';

const CAPABILITIES = [
  { label: 'Design & Construct', href: '/capabilities/design-construct' },
  { label: 'Mining Services', href: '/capabilities/mining-services' },
  { label: 'Steel Fabrication', href: '/capabilities/steel-fabrication' },
  { label: 'Water Storage', href: '/capabilities/water-storage' },
  { label: 'Sheds', href: '/capabilities/sheds' },
  { label: 'Silos', href: '/capabilities/silos' },
];

const COMPANY = [
  { label: 'Our Heritage', href: '/why-ahrens/heritage' },
  { label: 'Our People', href: '/why-ahrens/people' },
  { label: 'Our Brands', href: '/our-brands' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Ahrens — Home">
              <span className="text-2xl font-heading font-bold tracking-tight">
                AHRENS
              </span>
            </Link>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Five generations of building Australia. Delivering construction,
              engineering, and infrastructure excellence since 1934.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/ahrens"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ahrens on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/ahrensgroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ahrens on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@AhrensGroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ahrens on YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2" role="list">
              {CAPABILITIES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2" role="list">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-2 text-sm text-white/65">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" aria-hidden="true" />
                <span>Kingsford, South Australia 5118</span>
              </li>
              <li>
                <a
                  href="tel:1800247367"
                  className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" aria-hidden="true" />
                  1800 AHRENS (1800 247 367)
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ahrens.com.au"
                  className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" aria-hidden="true" />
                  info@ahrens.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Ahrens Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies" className="hover:text-white/70 transition-colors">
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
