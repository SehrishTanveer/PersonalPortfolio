/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#656176",
        "gray-deep": "#534D56",
      },
      screens: {
        xxs: '330px',
        xs: '430px',
        sm: '640px',
      },
    },
  },
  plugins: [],
};




