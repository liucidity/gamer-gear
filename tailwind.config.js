const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#FEFEFE",
        "black-main": "#282828",
        "purple-main": "#c42bf0",
        "purple-light": "#D461F4",
        "purple-dark": "#AC0FD9"
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss')
  ],
}
