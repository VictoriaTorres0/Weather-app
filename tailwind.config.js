/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d2039",
        secondary: "#100E1D",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
