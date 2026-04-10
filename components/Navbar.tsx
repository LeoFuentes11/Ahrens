'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  {
    label: 'Why Ahrens',
    href: '/why-ahrens',
    children: [
      { label: 'Our Heritage', href: '/why-ahrens/heritage' },
      { label: 'Our People', href: '/why-ahrens/people' },
      { label: 'Our Strength', href: '/why-ahrens/strength' },
      { label: 'Safety', href: '/why-ahrens/safety' },
      { label: 'Community', href: '/why-ahrens/community' },
    ],
  },
  {
    label: 'Our Brands',
    href: '/our-brands',
  },
  {
    label: 'Capabilities',
    href: '/capabilities',
    children: [
      { label: 'Design & Construct', href: '/capabilities/design-construct' },
      { label: 'Mining Services', href: '/capabilities/mining-services' },
      { label: 'Steel Fabrication', href: '/capabilities/steel-fabrication' },
      { label: 'Water Storage', href: '/capabilities/water-storage' },
      { label: 'Sheds', href: '/capabilities/sheds' },
      { label: 'Silos', href: '/capabilities/silos' },
      { label: 'Fitout & Refurbishment', href: '/capabilities/fitout-refurbishment' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Opportunities', href: '/careers/opportunities' },
      { label: 'Stories', href: '/careers/stories' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-nav'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container-xl flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Ahrens — Home">
          <span className="text-2xl font-heading font-bold text-white tracking-tight group-hover:text-brand-orange transition-colors">
            AHRENS
          </span>
          <span className="hidden sm:block w-1 h-6 bg-brand-orange" aria-hidden="true" />
          <span className="hidden sm:block text-xs text-white/60 uppercase tracking-widest leading-tight">
            Built<br />to Last
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded',
                      pathname.startsWith(item.href) && 'text-brand-orange'
                    )}
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        openDropdown === item.href && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <m.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-brand-dark border border-white/10 rounded shadow-nav py-1"
                        role="list"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors',
                                pathname === child.href && 'text-brand-orange'
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </m.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded',
                    pathname === item.href && 'text-brand-orange'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex btn-primary text-sm"
        >
          Get in Touch
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <nav aria-label="Mobile navigation" className="container-xl py-4">
              <ul role="list" className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block py-3 px-2 text-white/80 hover:text-white font-medium border-b border-white/5 transition-colors',
                        pathname.startsWith(item.href) && 'text-brand-orange'
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul role="list" className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block py-2 text-sm text-white/60 hover:text-white transition-colors',
                                pathname === child.href && 'text-brand-orange'
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary mt-4 w-full justify-center"
              >
                Get in Touch
              </Link>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
