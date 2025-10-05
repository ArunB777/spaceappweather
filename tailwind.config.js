/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans React files
    "./src/index.css", // Explicitly include custom CSS
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#1e3a8a', // Matches your gradient end
        'sky-blue': '#38bdf8',   // Matches your gradient start
        'midnight-blue': '#3b82f6', // Matches your gradient middle
      },
      backgroundImage: {
        'day-to-night': 'linear-gradient(180deg, #38bdf8 0%, #3b82f6 40%, #1e3a8a 100%)', // Your gradient
      },
    },
  },
  plugins: [],
}