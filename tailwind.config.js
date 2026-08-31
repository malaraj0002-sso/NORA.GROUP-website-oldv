/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c6cc',
          300: '#9ea3ac',
          400: '#757b87',
          500: '#585e6b',
          600: '#464b56',
          700: '#393d46',
          800: '#2b2e35',
          900: '#1a1c20',
          950: '#0f1012',
        },
        warm: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f4e9d3',
          300: '#ecd9b3',
          400: '#e2c389',
          500: '#d9ad63',
        },
        beige: {
          50: '#faf8f5',
          100: '#f3eee6',
          200: '#e7ddd0',
          300: '#d6c7b2',
          400: '#c2ad95',
          500: '#b09478',
        },
        wood: {
          50: '#faf7f4',
          100: '#f0e8e0',
          200: '#e0cdbb',
          300: '#c9ab8e',
          400: '#b08a64',
          500: '#9a7050',
          600: '#7e5a40',
          700: '#634732',
          800: '#4a3526',
          900: '#322418',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5ecd0',
          200: '#ead9a3',
          300: '#dcbf6a',
          400: '#cda845',
          500: '#b8923a',
          600: '#9a7530',
          700: '#7c5c28',
        },
      },
      fontFamily: {
        sans: ['"Noto Kufi Arabic"', '"Noto Sans Hebrew"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Noto Kufi Arabic"', '"Noto Sans Hebrew"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'wood-grain': "url('data:image/svg+xml,%3Csvg width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h200v200H0z\" fill=\"%23f0e8e0\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
