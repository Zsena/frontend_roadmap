/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3bc8b1",
          secondary: "#9a90f4",
          accent: "#f092d8",
          neutral: "#021431",
          "base-100": "#FFFFFF",
          info: "#93E7FB",
          success: "#81CFD1",
          warning: "#EFD7BB",
          error: "#E58B8B",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        pink: "#f092d8",
        cyan: "#79dbdb",
        purple: "#9a90f4",
        yellow: '#fdc166',
        lightGreen: '#56d4c0',
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        bestermind: ["Bestermind", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
