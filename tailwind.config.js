/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'sans-serif'],
        roboto_mono: ['Roboto Mono', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        gothic: ['League Gothic', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}