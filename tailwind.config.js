/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme') // Import default theme

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans], // Add Inter to sans-serif stack
      },
      // Add any other theme extensions here (colors, spacing, etc.)
    },
  },
  plugins: [],
} 