import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F26522',
        'brand-dark': '#1C2531',
        'brand-charcoal': '#2D3748',
        'brand-steel': '#4A5568',
        'brand-smoke': '#718096',
        'brand-mist': '#A0AEC0',
        'brand-cream': '#FAF8F5',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-right': 'slide-right 0.5s ease-out forwards',
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'card-hover': '0 8px 30px rgba(242, 101, 34, 0.15)',
        'card': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.10)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;
