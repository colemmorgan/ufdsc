/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#202124",
        'white': "#ffffff",
        'off-white': "#F3F6FB",
        'blue': "#4385F5",
        'green': '#36A855',
        'red' : '#E94337',
        'yellow': "#F8BC00"
      },
    },
  },
  plugins: [],
}
