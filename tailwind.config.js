/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harry: ["harry", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "blue-harry": "#222F5B",
        "gold-harry": "#D3A625",
        "yellow-harry": "#EEBA30",
        "red-harry": "#AE0001",
        "bourdeaux-harry": "#740001",
      },
      backgroundImage: {
        hogwarts: "url('/assets/hogwarts.png')",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
