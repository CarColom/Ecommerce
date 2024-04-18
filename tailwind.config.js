/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c3aaa5', 
        secondary: {
          100: '#d76483', 
          200: '#ef9ca4',
          300: '#ffc2bb',
          400: '#f6e5cb33',
        },
    },
  },
  plugins: [],
}
}
