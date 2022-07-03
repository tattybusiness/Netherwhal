/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    fontFamily: {
      'mySans': ['Poppins'],
      'minecraft': ['"Press Start 2P"'],
    },
    extend: {
      colors: {
        'myCyan': '#00C8C8',
      },
    },
  },
  plugins: [],
}
