/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', 'ui-sans-serif', 'system-ui'], 
      },
      colors: {
        'black': "#202124",
        'white': "#ffffff",
        'purple': "#BB86FC",
        'off-white': "#f9f9f9",
        'gray': '#9AA0A6',
        'light-gray': "#e0e0e0",
        'blue' : "#03DAC5"
      },
    },
  },
  plugins: [],
}
