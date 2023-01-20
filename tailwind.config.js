/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "rgb(var(--bgcolor) / <alpha-value>)",
        dsec: "rgb(var(--dsec) / <alpha-value>)",
        lsec: "rgb(var(--lsec) / <alpha-value>)",
        dprim: "rgb(var(--dprim) / <alpha-value>)",
        lprim: "rgb(var(--lprim) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
