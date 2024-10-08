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
        'blue': "#4285F4",
        'red': "#EA4335"
      },
    },
  },
  plugins: [],
}
