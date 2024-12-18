/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#202020",
        'white': "#ffffff",
        'off-white': "#f4f4f4",
        'dull': "#707070",
        'gray': "rgb(229, 231, 235)",
        'grayer': "rgb(225, 226, 227)",
        'blue': "#4385F5",
        'red': "#E94337",
        "yellow": "#F8BC00",
        "green": "#36A855"
      },
      fontFamily: {
        sans: ['HelveticaNeue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
