import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Calibre', 'SF Mono', ...defaultTheme.fontFamily.sans],
        calibre: ['Calibre', ...defaultTheme.fontFamily.sans],
        mono: ['SF Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: {
          DEFAULT: 'var(--color-navy-default)',
          light: 'var(--color-navy-light)',
          dark: 'var(--color-navy-dark)',
          shadow: 'var(--color-navy-shadow)',
          50: 'var(--color-navy-50)',
        },
        slate: {
          DEFAULT: 'var(--color-slate-default)',
          light: 'var(--color-slate-light)',
          dark: 'var(--color-slate-dark)',
          50: 'var(--color-slate-50)',
        },
        white: 'var(--color-white)',
        green: {
          DEFAULT: 'var(--color-green)',
          tint: 'var(--color-green-tint)',
        },
        blue: 'var(--color-blue)',
        pink: 'var(--color-pink)',
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      fontSize: {
        '2xs': '0.8125rem',
      },
      height: {
        'full-dvh': '100dvh',
      },
      boxShadow: {
        profile: '0 10px 30px -15px var(--navy-shadow)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.default-link::before': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
      });
    }),
  ],
};

export default config;
