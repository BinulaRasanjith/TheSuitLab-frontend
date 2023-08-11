/** @type {import('tailwindcss').Config} */
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
      colors: {
        primary: '#111111',
        secondary: '#FEFEFE',
        borderColor: '#DCDCDC',
        supplierColor: '#A0AEC0'
      }
    },
  },
  plugins: [],
}

