'use client';

import { useReducedMotion } from 'framer-motion';

const STATS = [
  { value: '90+', label: 'Years of Excellence' },
  { value: '5th', label: 'Generation Family Business' },
  { value: '1,000+', label: 'Team Members' },
  { value: '$2B+', label: 'Projects Delivered' },
  { value: '7', label: 'Specialist Brands' },
  { value: 'National', label: 'Presence Across Australia' },
  { value: 'Zero', label: 'Harm Safety Culture' },
  { value: '50+', label: 'Industry Sectors Served' },
];

function TickerItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-8 shrink-0 px-8">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-heading font-bold text-white">
          {value}
        </span>
        <span className="text-sm text-white/70 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="w-px h-6 bg-white/30" aria-hidden="true" />
    </div>
  );
}

export default function StatsTicker() {
  const shouldReduceMotion = useReducedMotion();

  const items = [...STATS, ...STATS];

  if (shouldReduceMotion) {
    return (
      <section className="bg-brand-orange py-6 overflow-hidden" aria-label="Company statistics">
        <div className="container-xl">
          <div className="flex flex-wrap gap-6 justify-center">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="text-xl font-heading font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-white/80 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-orange py-6 overflow-hidden" aria-label="Company statistics">
      <div
        className="flex animate-ticker"
        style={{ width: 'max-content' }}
        aria-hidden="true"
      >
        {items.map((stat, i) => (
          <TickerItem key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
      {/* Screen-reader accessible version */}
      <div className="sr-only">
        <ul>
          {STATS.map((stat, i) => (
            <li key={i}>{stat.value} {stat.label}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
