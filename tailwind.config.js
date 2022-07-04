/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-grey': '#2a3942',
        'mid-grey': '#202c33',
        'dark-grey': '#111b21',
        'midnight-black': '#0b141a',
        'dead-white': '#e9edef'
      },
    },
  },
  plugins: [],
};
