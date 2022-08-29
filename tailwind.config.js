/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
