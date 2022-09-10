/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#041C32",
        greenblue: "#04293A",
        lightblue: "#064663",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
