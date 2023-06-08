/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F6B4F",
        textBlack: "#2A2C3D",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
