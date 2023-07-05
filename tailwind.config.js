/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        "tomato" : "hsl(4, 100%, 67%)",
        "DarkSlateGrey": "hsl(234, 29%, 20%)",
        "CharcoalGrey": "hsl(235, 18%, 26%)",
        "LettersBlue" : "#22263f",
      },
      fontFamily: {
        "Roboto": ['Roboto', "sans-serif"]
      }
    },
  },
  plugins: [],
}