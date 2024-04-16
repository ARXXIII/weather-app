/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-blue': '#1D1B1F',
        'dark-black-blue': '#1A191D',
      }
    },
  },
  plugins: [],
}

