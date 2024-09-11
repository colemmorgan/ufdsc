/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Metropolis', 'Roboto', 'ui-sans-serif', 'system-ui'], 
      },
      colors: {
        'black': "#202124",
        'white': "#ffffff",
        'off-white': "#f9f9f9",
        'gray': '#9AA0A6',
        'light-gray': "#eeeeee",
        'button-blue': "#1A73E8",
        'blue': "#4285F4",
        'yellow': "#FBBC04",
        'orange': "#E37400",
        'green': '#34A853'
      },
      boxShadow: {
        'nav': '0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15)',
      }
    },
  },
  plugins: [],
}
