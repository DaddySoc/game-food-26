/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff8f1',
          100: '#ffe9d4',
          200: '#ffd4a8',
          300: '#ffb777',
          400: '#ff9344',
          500: '#ff6b35', // Primary
          600: '#fa4e0a',
          700: '#c53a05',
          800: '#9c300a',
          900: '#7e2a0c',
        },
        teal: {
          50: '#effcfa',
          100: '#c7f7ef',
          200: '#92efe2',
          300: '#5be3d1',
          400: '#2dcdc0',
          500: '#2EC4B6', // Secondary
          600: '#0e9d8f',
          700: '#0c7b70',
          800: '#0e625a',
          900: '#105049',
        }
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-medium': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
        'float-fast': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'custom-bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 5s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'custom-bounce': 'custom-bounce 700ms ease-in-out',
      },
    },
  },
  plugins: [],
};