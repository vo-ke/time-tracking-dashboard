/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  "./default.js"],
  theme: {
    screens: {
      'main': '279px',
      'sm2': '321px',
      'sm': '376px',
      'tab': '426px',
      'minL': '960px',
      'L': '1025px',
    },
    fontFamily: {
      main: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

