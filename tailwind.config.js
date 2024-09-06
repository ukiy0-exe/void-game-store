/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Noto Sans Mono"', "monospace"],
      },
      colors: {
        primary: "#0F172A",
        secondary: "#8B5CF6",
        background: "#DDD6FE",
        highlight: "#483181",
      },
    },
  },
  plugins: [],
};
