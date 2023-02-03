/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#A7A7A7",
        active: "#FF6838",
        wihte: "rgba(255, 255, 255, 0.7)",
        shadow: "rgba(255, 104, 56, 0.19)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 22px 40px rgba(255, 104, 56, 0.19)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1050px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
