/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'blush': '#eed7df',
        'cream': '#fff7ed',
      },
      height: {
        '5vh': '5vh',
      }
    },
  },
  plugins: [],
}
