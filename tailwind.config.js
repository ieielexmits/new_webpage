/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // <-- required for class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
