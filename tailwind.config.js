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
        "purple-main": "#c42bf0"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss')
  ],
}
