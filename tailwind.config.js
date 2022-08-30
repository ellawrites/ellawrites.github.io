/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./includes/*.{njk,md}", "./*.{njk,md}"],
  theme: {
    extend: {
      fontFamily: {
          'crimson-text': ['"Crimson Text"']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
