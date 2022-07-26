/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        'black-custom': '#1b1d23',
        'grey-custom': '#7d828f',
        'grey-dark-custom': '#60636d',
        'grey-light-custom': '#c8ccd8',
        'silver-custom': '#eeeff4',
        'red-custom': '#df5656',
      },
    },
  },
  plugins: [],
};
