/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#eb0029',
      secondary: '#ff9d2d',
      white: '#fff',
    }
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}