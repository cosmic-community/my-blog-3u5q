/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          500: '#5b6cff',
          600: '#4754e6',
          700: '#3a44b8'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}