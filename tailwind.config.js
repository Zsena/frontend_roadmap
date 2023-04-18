/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        'pink': '#f092d8',
        'yellow': '#fdc166',
        'cyan': '#79dbdb',
        'purple': '#9a90f4'
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        bestermind: ["Bestermind", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
