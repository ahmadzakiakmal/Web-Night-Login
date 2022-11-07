/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins" : ["Poppins", "sans-serif"]
      },
      colors: {
        "dark-red": "#B60E13"
      }
    },
  },
  plugins: [],
}