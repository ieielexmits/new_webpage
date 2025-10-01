/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // covers App.js, index.js, etc.
    "./public/index.html",          // optional but safe
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
