/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to remove unused styles in production
  ],
  theme: {
    extend: {
      colors: {
        customNavy: '#165aa9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
  ],
}
