/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,tsx}', // addition to app router
    './pages/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

