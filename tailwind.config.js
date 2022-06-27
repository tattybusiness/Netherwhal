/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    fontFamily: {
      'mySans': ['Poppins'],
      'minecraft': ['Minecraft'],
    },
    extend: {
      colors: {
        'myCyan': '#00C8C8',
      },
    },
  },
  plugins: [],
}
