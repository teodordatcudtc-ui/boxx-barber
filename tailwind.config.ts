import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paletă inspirată din locație: lemn închis, auriu, cream, accente
        bark: {
          950: '#1a1612',
          900: '#2C2416',
          800: '#3d3630',
          700: '#5c5348',
          600: '#6b6156',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F4ED',
          200: '#F5F0E8',
          300: '#EDE6DA',
          400: '#E0D6C4',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E5C65C',
          dark: '#9A7B1A',
        },
        accent: {
          teal: '#2d6a6a',
          burgundy: '#6b2d3d',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F5F0E8 0%, #EDE6DA 50%, #E0D6C4 100%)',
        'gradient-dark': 'linear-gradient(180deg, #2C2416 0%, #1a1612 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
