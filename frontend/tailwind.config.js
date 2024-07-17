/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {
      height: {
        'screen/98': '98vh',
      }
    },
  },
  plugins: [],
}