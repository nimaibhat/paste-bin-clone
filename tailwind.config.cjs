/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: theme => ({
      "screen/2": "50vh",
      "screen/3": "calc(100vh / 3)",
      "screen/4": "calc(100vh / 4)",
      "screen/5": "calc(100vh / 5)",
    }),
  },
  },
  plugins: [],
};
