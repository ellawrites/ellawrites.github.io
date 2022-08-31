/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}"],
  theme: {
    extend: {
      fontFamily: {
          'crimson-text': ['"Crimson Text"'],
          'hammersmith': ['"Hammersmith One"']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
