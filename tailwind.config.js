const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
    // "./src/componenets/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#FEFEFE",
        "black-main": "#282828",
        "purple-main": "#c42bf0",
        "purple-light": "#D461F4",
        "purple-dark": "#AC0FD9",
        "blue": "#4361EE"
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