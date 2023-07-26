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
      screens: {
        md2: '1048px',
      },
      backgroundImage: {
        line: 'url(/src/assets/Wave_bg.svg)',
      },
      backgroundSize: {
        full: '100% 100%',
      },
    },
  },
  plugins: [],
};
