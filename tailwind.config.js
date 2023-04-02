/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
      backgroundColor: {
        accentBlue: "#4166f0",
        accentGray: "#181818",
      },
    },
  },
  plugins: [],
};
