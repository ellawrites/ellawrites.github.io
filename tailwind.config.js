/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./includes/*.{njk,md}", "./*.{njk,md}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
