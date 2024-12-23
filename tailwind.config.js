/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#fff",
        darkText: "#000000",
        lightText: "#9b9b9b",
        greenText: "#1d8221",
        redText: "#E02B2B",
        skyText: "#0000FF",
        skyReduceText:"#0000ff50",
        mainText: "#0066FF"
      },
      flex: {
        full: "0 0 100%"
      },
    },
  },
  plugins: [],
}

