/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swadDark: '#0F3832',  // Aapke logo ka dark green
        swadLight: '#4CAF50', // Aapke logo ka leaf green
      }
    },
  },
  plugins: [],
}