/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chrltt: "#cf2a31",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
