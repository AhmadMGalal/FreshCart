/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography')],

  darkMode: 'class',
};
