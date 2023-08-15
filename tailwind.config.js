/** @type {import('tailwindcss').Config} */
import colors from './src/config/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors,
    },
  },
  plugins: [],
}

