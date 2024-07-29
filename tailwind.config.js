/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.6667%',
        '1/12': '8.3333%',
      },
      margin: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.6667%',
        '1/11': '10%',
        '1/12': '8.3333%',
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}