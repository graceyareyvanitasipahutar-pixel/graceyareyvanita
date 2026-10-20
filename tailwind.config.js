/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f3f5f9',
          100: '#e3e8f0',
          200: '#c7d1de',
          300: '#9faec3',
          400: '#6f839f',
          500: '#52677f',
          600: '#3f5066',
          700: '#344154',
          800: '#1f2e44',
          900: '#172b4d',
          950: '#0f1d36',
        },
        gold: {
          50: '#fbf7ef',
          100: '#f4ead2',
          200: '#e9d4a3',
          300: '#dcb86f',
          400: '#cf9f47',
          500: '#c08a32',
          600: '#a06e28',
          700: '#7d5524',
          800: '#634524',
          900: '#533b24',
        },
        cream: '#F7F8FA',
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'serif'],
        display: ['"Times New Roman"', 'Times', 'serif'],
        serif: ['"Times New Roman"', 'Times', 'serif']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,43,77,0.04), 0 8px 24px -12px rgba(23,43,77,0.12)',
        card: '0 1px 3px rgba(23,43,77,0.05), 0 12px 32px -16px rgba(23,43,77,0.18)',
      },
      maxWidth: {
        section: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
