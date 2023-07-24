/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        skeleton: '200% 100%',
      },
      colors: {
        'ft-white': '#d9dbdc',
      },
      keyframes: {
        loading: {
          to: {backgroundPositionX: '-20%'},
        },
      },
      animation: {
        skeleton: 'loading 1s linear infinite ease-in-out ',
      },
      minWidth: {
        minWidth: '1048px',
      },
    },
  },
  plugins: [],
};
