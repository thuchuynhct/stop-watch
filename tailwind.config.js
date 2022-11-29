/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        box: [
          '0px 15px 25px rgba(0, 0, 0, 0.15)',
          'rgba(0, 0, 0, 0.05) 0px 5px 10px'
        ]
      }
    },
  },
  plugins: [],
}
