import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary — navy blue. Source of truth: design/brand/brand.md (T01).
        // Base confirmed via pixel sampling of logo.png: #123C6E.
        'brand-primary': {
          50: '#EBF2FB',
          100: '#D5E4F5',
          200: '#A5C0E8',
          300: '#6A95D6',
          400: '#3A6DBF',
          500: '#214E9F',
          600: '#123C6E', // confirmed logo color
          700: '#0F3560',
          800: '#0D2F48', // confirmed dark section bg
          900: '#0A192F', // confirmed nav/footer bg
          950: '#060D1C',
        },
        // Brand accent — emergency red. T01 determined the "orange" in the Odoo nav
        // is actually red #DD0303. Used ONLY for the emergency 24/7 contact element.
        'brand-accent': {
          100: '#FDE0E0',
          400: '#E45A5A',
          500: '#DD0303', // confirmed emergency red (T01)
          600: '#B50202',
        },
        // Alias used in specific task specs (T11 stepper circles, etc.)
        'brand-emergency': {
          DEFAULT: '#DD0303',
          dark: '#B50202',
        },
        // WhatsApp official green — replaces #28A745 (Bootstrap green) used in Odoo site.
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
        // Neutrals — match Tailwind gray values for WCAG-safe body text.
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          300: '#D1D5DB',
          500: '#6B7280',
          700: '#374151',
          900: '#111827',
        },
        // Semantic
        success: '#16A34A',
        error: '#DC2626',
        warning: '#D97706',
      },

      fontFamily: {
        heading: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },

      // Fluid typographic scale — specs/02-design.md §1.2
      fontSize: {
        xs: ['clamp(0.75rem, 1.5vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.7' }],
        lg: ['clamp(1.125rem, 3vw, 1.25rem)', { lineHeight: '1.6' }],
        xl: ['clamp(1.25rem, 3.5vw, 1.5rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.875rem, 5vw, 2.5rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(2.25rem, 6vw, 3.5rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(2.75rem, 8vw, 4.5rem)', { lineHeight: '1.1' }],
      },

      // Border radii — specs/02-design.md §1.4 (override Tailwind defaults)
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },

      // Custom shadows — specs/02-design.md §1.5
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        elevated: '0 4px 12px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        floating: '0 8px 24px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}

export default config
